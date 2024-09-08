import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import colors from "../../Utils/colors";
import { useNavigation } from "@react-navigation/native";
import { signOut } from "firebase/auth";
import { firebaseauth } from "../../../firebase";
import Icon from "react-native-vector-icons/FontAwesome";

const Menu = ({useremail}) => {
  const navigation = useNavigation();

    const handlelogout= async ()=>{
        await signOut(firebaseauth)
    }


  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <View style={styles.box1}>
          <TouchableOpacity>
            <Text onPress={() => navigation.navigate("Home")}>
              <Icon name="long-arrow-left" size={25} color={colors.PRIMARY} />
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.box2}>
          <Text
            style={{ color: colors.PRIMARY, fontSize: 30, fontWeight: 600 }}
          >
            My FitMate
          </Text>
          <Text style={{ color: colors.color1, fontSize: 14 }}>
            {useremail}
          </Text>
        </View>
        <View style={styles.box4}>
          <TouchableOpacity
            style={styles.textmenu}
            onPress={() => navigation.navigate("FitmateScreen")}
          >
            <Text style={styles.text}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.textmenu}
            onPress={() => navigation.navigate("Getuserdetails")}
          >
            <Text style={styles.text}>User Details</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.textmenu}
            onPress={() => navigation.navigate("Searchcalories")}
          >
            <Text style={styles.text}>Macro Coach</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.textmenu}
            onPress={() => navigation.navigate("Trackweight")}
          >
            <Text style={styles.text}>Weight Management</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.textmenu}
            onPress={() => navigation.navigate("Meals")}
          >
            <Text style={styles.text}>Explore Recipies</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.textmenu}
            onPress={() => navigation.navigate("Contactus")}
          >
            <Text style={styles.text}>Contact Us</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.textmenu}
            onPress={() => navigation.navigate("Termsandcondition")}
          >
            <Text style={styles.text}>Terms & Condition</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.textmenu}
            onPress={() => navigation.navigate("PrivacyPolicy")}
          >
            <Text style={styles.text}>Privacy Policy</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.box5}>
          <TouchableOpacity style={styles.button} onPress={handlelogout}>
            <Text
              style={{
                color: colors.color4,
                fontSize: 20,
                textAlign: "center",
              }}
            >
              Sign Out
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.color3,
    padding: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container1: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-between",
    gap: 1,
    padding: 40,
  },
  box1: {
    width: "100%",
    height: 50,
  },
  box2: {
    width: "100%",
  },
  box4: {
    width: "100%",
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-between",
  },
  text: {
    color: colors.color1,
    fontSize: 16,
  },
  textmenu: {
    width: "90%",
    height: 70,
    borderBottomWidth: 1,
    display: "flex",
    alignItems: "baseline",
    justifyContent: "center",
    borderBottomColor: colors.color1,
  },
  box5: {
    width: "90%",
    height: 100,
    display: "flex",
    alignItems: "baseline",
    justifyContent: "center",
  },
  button: {
    backgroundColor: colors.PRIMARY,
    width: "100%",
    padding: 10,
    borderRadius: 10,
  },
});
