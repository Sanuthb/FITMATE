import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../../Utils/colors";
import userdetails from "../../UserAuth/userdetails";
import { useNavigation } from "@react-navigation/native";

const Workout = () => {
  const { getfitnessgoal } = userdetails();
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/workout.webp")}
        style={styles.imageview}
      />
      <TouchableOpacity
        style={styles.box}
        onPress={() => {
          navigation.navigate("Workoutlist");
        }}
      >
        <View style={styles.textarea}>
          <Text
            style={{ color: colors.PRIMARY, fontSize: 16, fontWeight: 400 }}
          >
            Current Workout Plan
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Workoutlist");
            }}
          >
            <Text
              style={{ color: colors.PRIMARY, fontSize: 13, fontWeight: 400 }}
            >
              See Workout
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.box1}>
          <View style={styles.textarea}>
            <Text style={{ color: colors.color2 }}>
              {getfitnessgoal} Training Program
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Workout;

const styles = StyleSheet.create({
  container: {
    width: "95%",
    height: 300,
  },
  imageview: {
    width: "100%",
    height: 200,
    objectFit: "cover",
    borderRadius: 20,
  },
  box: {
    backgroundColor: colors.color4,
    borderRadius: 10,
    width: "100%",
    height: "fit-content",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
    padding: 10,
  },
  textarea: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
  },
  box1: {
    width: "100%",
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-between",
    flexDirection: "column",
    padding: 10,
  },
});
