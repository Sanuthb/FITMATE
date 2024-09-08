import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  workout_musclebuilding_data,
  workout_fatloss_data,
  workout_weightloss_data,
} from "../workouts/Workout";
import colors from "../Utils/colors";
import userdetails from "../UserAuth/userdetails";
import Footer from "../components/footer/Footer";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const Workoutlist = () => {
  const { getfitnessgoal } = userdetails();
  const navigation = useNavigation();

  if (getfitnessgoal === "Muscle Building") {
    return (
      <SafeAreaView style={styles.safeareacontainer}>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.topbox}>
              <TouchableOpacity>
                <Text onPress={() => navigation.navigate("Home")}>
                  <Icon
                    name="long-arrow-left"
                    size={25}
                    color={colors.PRIMARY}
                  />
                </Text>
              </TouchableOpacity>
              <Text style={{ fontSize: 20 }}>Your Workout Program</Text>
            </View>
            <View style={{ width: "95%", height: 200 }}>
              <Image
                source={require("../../assets/workouts.jpg")}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: 10,
                }}
              />
            </View>
            {workout_musclebuilding_data.map((item, index) => {
              return (
                <View style={styles.box} key={index}>
                  <View>
                    <Text
                      style={{
                        fontSize: 30,
                        fontWeight: 300,
                        color: colors.color1,
                      }}
                    >
                      {item.Title}
                    </Text>
                  </View>
                  <View style={styles.workout}>
                    <Text style={{ color: colors.PRIMARY }}>
                      {item.workout1.Name}
                    </Text>
                    <Text>Sets:{item.workout1.sets}</Text>
                    <Text>Reps:{item.workout1.reps}</Text>
                  </View>
                  <View style={styles.workout}>
                    <Text style={{ color: colors.PRIMARY }}>
                      {item.workout2.Name}
                    </Text>
                    <Text>Sets:{item.workout2.sets}</Text>
                    <Text>Reps:{item.workout2.reps}</Text>
                  </View>
                  <View style={styles.workout}>
                    <Text style={{ color: colors.PRIMARY }}>
                      {item.workout3.Name}
                    </Text>
                    <Text>Sets:{item.workout3.sets}</Text>
                    <Text>Reps:{item.workout3.reps}</Text>
                  </View>
                  <View style={styles.workout}>
                    <Text style={{ color: colors.PRIMARY }}>
                      {item.workout4.Name}
                    </Text>
                    <Text>Sets:{item.workout4.sets}</Text>
                    <Text>Reps:{item.workout4.reps}</Text>
                  </View>
                  <View style={styles.workout}>
                    <Text style={{ color: colors.PRIMARY }}>
                      {item.workout5.Name}
                    </Text>
                    <Text>Sets:{item.workout5.sets}</Text>
                    <Text>Reps:{item.workout5.reps}</Text>
                  </View>
                  <View style={styles.workout}>
                    <Text style={{ color: colors.PRIMARY }}>
                      {item.workout6.Name}
                    </Text>
                    <Text>Sets:{item.workout6.sets}</Text>
                    <Text>Reps:{item.workout6.reps}</Text>
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>
        <Footer />
      </SafeAreaView>
    );
  } else if (getfitnessgoal === "Weight Loss") {
    return (
       <SafeAreaView style={styles.safeareacontainer}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.topbox}>
            <TouchableOpacity>
              <Text onPress={() => navigation.navigate("Home")}>
                <Icon name="long-arrow-left" size={25} color={colors.PRIMARY} />
              </Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 20 }}>Your Workout Program</Text>
          </View>
          <View style={{ width: "95%", height: 200 }}>
            <Image
              source={require("../../assets/workouts.jpg")}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: 10,
              }}
            />
          </View>
          {workout_weightloss_data.map((item, index) => {
            return (
              <View style={styles.box} key={index}>
                <View>
                  <Text
                    style={{
                      fontSize: 30,
                      fontWeight: 300,
                      color: colors.color1,
                    }}
                  >
                    {item.Title}
                  </Text>
                </View>
                <View style={styles.workout}>
                  <Text style={{ color: colors.PRIMARY }}>
                    {item.workout1.Name}
                  </Text>
                  <Text>Sets:{item.workout1.sets}</Text>
                  <Text>Reps:{item.workout1.reps}</Text>
                </View>
                <View style={styles.workout}>
                  <Text style={{ color: colors.PRIMARY }}>
                    {item.workout2.Name}
                  </Text>
                  <Text>Sets:{item.workout2.sets}</Text>
                  <Text>Reps:{item.workout2.reps}</Text>
                </View>
                <View style={styles.workout}>
                  <Text style={{ color: colors.PRIMARY }}>
                    {item.workout3.Name}
                  </Text>
                  <Text>Sets:{item.workout3.sets}</Text>
                  <Text>Reps:{item.workout3.reps}</Text>
                </View>
                <View style={styles.workout}>
                  <Text style={{ color: colors.PRIMARY }}>
                    {item.workout4.Name}
                  </Text>
                  <Text>Sets:{item.workout4.sets}</Text>
                  <Text>Reps:{item.workout4.reps}</Text>
                </View>
                <View style={styles.workout}>
                  <Text style={{ color: colors.PRIMARY }}>
                    {item.workout5.Name}
                  </Text>
                  <Text>Sets:{item.workout5.sets}</Text>
                  <Text>Reps:{item.workout5.reps}</Text>
                </View>
                <View style={styles.workout}>
                  <Text style={{ color: colors.PRIMARY }}>
                    {item.workout6.Name}
                  </Text>
                  <Text>Sets:{item.workout6.sets}</Text>
                  <Text>Reps:{item.workout6.reps}</Text>
                </View>
                <View style={styles.workout}>
                  <Text style={{ color: colors.PRIMARY }}>
                    {item.workout7.Name}
                  </Text>
                  <Text>Min:{item.workout7.min}</Text>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
      <Footer />
    </SafeAreaView>
    )
  } else if (getfitnessgoal === "Fat Loss") {
    return (
      <SafeAreaView style={styles.safeareacontainer}>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.topbox}>
              <TouchableOpacity>
                <Text onPress={() => navigation.navigate("Home")}>
                  <Icon
                    name="long-arrow-left"
                    size={25}
                    color={colors.PRIMARY}
                  />
                </Text>
              </TouchableOpacity>
              <Text style={{ fontSize: 20 }}>Your Workout Program</Text>
            </View>
            <View style={{ width: "95%", height: 200 }}>
              <Image
                source={require("../../assets/workouts.jpg")}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: 10,
                }}
              />
            </View>
            {workout_fatloss_data.map((item, index) => {
              return (
                <View style={styles.box} key={index}>
                  <View>
                    <Text
                      style={{
                        fontSize: 30,
                        fontWeight: 300,
                        color: colors.color1,
                      }}
                    >
                      {item.Title}
                    </Text>
                  </View>
                  <View style={styles.workout}>
                    <Text style={{ color: colors.PRIMARY }}>
                      {item.workout1.Name}
                    </Text>
                    <Text>Sets:{item.workout1.sets}</Text>
                    <Text>Reps:{item.workout1.reps}</Text>
                  </View>
                  <View style={styles.workout}>
                    <Text style={{ color: colors.PRIMARY }}>
                      {item.workout2.Name}
                    </Text>
                    <Text>Sets:{item.workout2.sets}</Text>
                    <Text>Reps:{item.workout2.reps}</Text>
                  </View>
                  <View style={styles.workout}>
                    <Text style={{ color: colors.PRIMARY }}>
                      {item.workout3.Name}
                    </Text>
                    <Text>Sets:{item.workout3.sets}</Text>
                    <Text>Reps:{item.workout3.reps}</Text>
                  </View>
                  <View style={styles.workout}>
                    <Text style={{ color: colors.PRIMARY }}>
                      {item.workout4.Name}
                    </Text>
                    <Text>Sets:{item.workout4.sets}</Text>
                    <Text>Reps:{item.workout4.reps}</Text>
                  </View>
                  <View style={styles.workout}>
                    <Text style={{ color: colors.PRIMARY }}>
                      {item.workout5.Name}
                    </Text>
                    <Text>Sets:{item.workout5.sets}</Text>
                    <Text>Reps:{item.workout5.reps}</Text>
                  </View>
                  <View style={styles.workout}>
                    <Text style={{ color: colors.PRIMARY }}>
                      {item.workout6.Name}
                    </Text>
                    <Text>Sets:{item.workout6.sets}</Text>
                    <Text>Reps:{item.workout6.reps}</Text>
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>
        <Footer />
      </SafeAreaView>
    );
  }
};

export default Workoutlist;

const styles = StyleSheet.create({
  safeareacontainer: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.color5,
  },
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  box: {
    width: "95%",
    height: "fit-content",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
    gap: 10,
    padding: 15,
    paddingBottom: 50,
    backgroundColor: colors.color3,
    borderRadius: 10,
  },
  workout: {
    width: "95%",
    height: "fit-content",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    gap: 10,
    padding: 10,
    backgroundColor: colors.color4,
    borderRadius: 10,
  },
  topbox: {
    width: "100%",
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 10,
  },
});
