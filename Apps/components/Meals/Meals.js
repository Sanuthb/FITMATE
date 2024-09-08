import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import colors from "../../Utils/colors";
import { useNavigation } from "@react-navigation/native";

const Meals = () => {

    const navigation = useNavigation() 
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate("Meals");
      }}
    >
      <View style={styles.container1}>
        <Text style={{ fontSize: 18, fontWeight: 400, color: colors.PRIMARY }}>
          Sample Diet
        </Text>
        <Text style={{ fontSize: 15, fontWeight: 400, color: colors.PRIMARY }}>
          Explore
        </Text>
      </View>
      <View>
        <Image
          source={require("../../../assets/meals.jpg")}
          style={{
            width: 350,
            height: 240,
            objectFit: "contain",
            borderRadius: 10,
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default Meals;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.color4,
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-between",
    flexDirection: "column",
    padding: 10,
    gap: 10,
    borderRadius: 10,
    margin: 10,
    width: 380,
  },
  container1: {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    padding: 10,
  },
});
