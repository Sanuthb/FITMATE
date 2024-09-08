import { StyleSheet, Text, View ,ScrollView} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Menu from "../components/menu/Menu";
import colors from "../Utils/colors";
import userdetails from "../UserAuth/userdetails";

const MenuItems = () => {
  const {useremail}=userdetails();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Menu useremail={useremail}/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MenuItems;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: colors.color3,
      },
      box: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 1,
      }
});
