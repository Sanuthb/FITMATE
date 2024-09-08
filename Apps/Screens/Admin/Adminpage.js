import { StyleSheet, Text, View, TouchableOpacity ,Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../../Utils/colors";
import { signOut } from "firebase/auth";
import { firebaseauth } from "../../../firebase";
import userdetails from "../../UserAuth/userdetails";
import { useNavigation } from "@react-navigation/native";

const Adminpage = () => {
  const handlelogout = async () => {
    await signOut(firebaseauth);
  };

  const { numberuser } = userdetails();
  const navigation = useNavigation()
  return (
    <SafeAreaView>
      <View style={styles.box1}>
        <Text style={{ color: "white", fontSize: 20 }}>Welcome Admin !</Text>
        <View>
          <TouchableOpacity onPress={handlelogout}>
            <Text
              style={{
                color: colors.color4,
                fontSize: 15,
                textAlign: "center",
              }}
            >
              Sign Out
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Image
          source={require("../../../assets/admin.webp")}
          style={{
            width: 400,
            height: 340,
            objectFit: "cover",
            borderRadius: 10,
            marginTop: 20,
            marginBottom:20,
          }}
        />
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.box2}
          onPress={() => navigation.navigate("Adminuserpage")}
        >
          <Text style={{ color: "black", fontSize: 20, marginTop: 10 }}>
            Active Users
          </Text>
          <Text style={{ color: "black", fontSize: 20 }}>{numberuser}</Text>
          <View
            style={{
              backgroundColor: colors.PRIMARY,
              width: "100%",
              height: 25,
              borderBottomRightRadius: 10,
              borderBottomLeftRadius: 10,
            }}
          ></View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.box2}
          onPress={() => navigation.navigate("Adminuserpayment")}
        >
          <Text style={{ color: "black", fontSize: 20, marginTop: 10 }}>
            User
          </Text>
          <Text style={{ color: "black", fontSize: 20 }}>Payments</Text>
          <View
            style={{
              backgroundColor: colors.PRIMARY,
              width: "100%",
              height: 25,
              borderBottomRightRadius: 10,
              borderBottomLeftRadius: 10,
            }}
          ></View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.box2}
          onPress={() => navigation.navigate("Adminusermessage")}
        >
          <Text style={{ color: "black", fontSize: 20, marginTop: 10 }}>
            Users
          </Text>
          <Text style={{ color: "black", fontSize: 20 }}>Messages</Text>
          <View
            style={{
              backgroundColor: colors.PRIMARY,
              width: "100%",
              height: 25,
              borderBottomRightRadius: 10,
              borderBottomLeftRadius: 10,
            }}
          ></View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Adminpage;

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
  box2: {
    display: "flex",
    justifyContent: "space-between",
    height: 100,
    width: 180,
    alignItems: "center",
    backgroundColor: "white",
    borderColor: colors.PRIMARY,
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: "column",
  },
  container: {
    display: 'flex',
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: "100%",
    padding: 10,
    rowGap: 20,
    flexWrap: "wrap",
  },  
});
