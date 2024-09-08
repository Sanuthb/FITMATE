import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from "@react-navigation/native";
import colors from "../../Utils/colors";
import userdetails from "../../UserAuth/userdetails";


const Admin_fetch_payment = () => {
  const navigation = useNavigation();

    const { userspayment } = userdetails(); 
  return (
    <SafeAreaView>
      <View style={styles.box1}>
        <Text style={{ color: "white", fontSize: 20 }}>Users Payments</Text>
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
        {userspayment.map((user) => (
          <TouchableOpacity key={user.id} style={styles.userContainer}>
            <Text style={styles.userInfo}>Name: {user.cardholderName}</Text>
            <Text style={styles.userInfo}>paymentId: {user.paymentId}</Text>
            <Text style={styles.userInfo}>Price: Rs {user.payment_price}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

export default Admin_fetch_payment

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
});