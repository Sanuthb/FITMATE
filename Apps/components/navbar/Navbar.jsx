import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../Utils/colors";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome'

const Navbar = ({ user_name }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View >
        <Text onPress={() => navigation.navigate("Menu")}><Icon name="bars" size={30} color={colors.PRIMARY}/></Text>
      </View>
      <View>
        <Text style={{ fontSize: 20, color: colors.PRIMARY }}>
          Hi! {user_name}
        </Text>
      </View>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 100,
    backgroundColor: colors.color4,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 10,
  },
  hamburger: {
    width: 50,
    height: 50,
    backgroundColor: colors.PRIMARY,
  },
});
