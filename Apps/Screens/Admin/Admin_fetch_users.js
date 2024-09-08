import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import userdetails from "../../UserAuth/userdetails";
import colors from "../../Utils/colors";
import { useNavigation } from "@react-navigation/native";
import { firestoredb, firebaseauth } from "../../../firebase";
import { deleteDoc, doc, getDoc } from "firebase/firestore";
import { deleteUser } from "firebase/auth";

const Admin_fetch_users = () => {
  const { usersno } = userdetails();
  const navigation = useNavigation();

  const handleDelete = async (userid) => {
    try {
      await getDoc(doc(firestoredb, "users", userid)).then((userdoc) => {
        if (userdoc.exists()) {
          deleteDoc(doc(firestoredb, "users", userid)).then(() => {
            alert("User deleted successfully");
          });
          deleteUser(userid).then(() => {
            alert("delete");
          });
        }
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <SafeAreaView>
      <View style={styles.box1}>
        <Text style={{ color: "white", fontSize: 20 }}>Active Users</Text>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("Adminpage")}>
            <Text
              style={{
                color: colors.color4,
                fontSize: 15,
                textAlign: "center",
              }}
            >
              Back
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        {usersno.map((user) => (
          <TouchableOpacity key={user.id} style={styles.userContainer}>
            <Text style={styles.userInfo}>Name: {user.name}</Text>
            <Text style={styles.userInfo}>Email: {user.email}</Text>
            <View>
              <TouchableOpacity
                style={styles.deleteButtonText}
                onPress={() => handleDelete(user.id)}
              >
                <Text style={{ color: "white" }}>Delete</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Admin_fetch_users;

const styles = StyleSheet.create({
  box1: {
    display: "flex",
    justifyContent: "space-between",
    height: 80,
    alignItems: "center",
    backgroundColor: "black",
    flexDirection: "row",
    padding: 10,
  },
  userContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    padding: 10,
    marginBottom: 10,
  },
  userInfo: {
    fontSize: 16,
    marginBottom: 5,
  },
  deleteButtonText: {
    color: "white",
    fontSize: 14,
    backgroundColor: "red",
    width: 70,
    padding: 10,
    borderRadius: 5,
    textAlign: "center",
  },
});
