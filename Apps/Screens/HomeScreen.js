import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
// import colors from "../Utils/colors";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Calories from "../components/calories/Calories";
import Workout from "../components/workout/Workout";
import Caloriesfinder from "../UserAuth/Caloriesfinder";
import TrackWeight from "../components/Weight_graph/TrackWeight";
import userdetails from "../UserAuth/userdetails";
import Meals from "../components/Meals/Meals";

const HomeScreen = () => {
  const { user_name } = userdetails();
  const { result, userproteinGrams, userfatGrams, usercarbGrams } =
    Caloriesfinder();

  return (
    <SafeAreaView style={styles.container}>
      <Navbar user_name={user_name} />
      <ScrollView>
        <View style={styles.box}>
          <View
            style={{
              width: 380,
              height: 250,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
              borderRadius: 10,
              marginBottom:20
            }}
          >
            <Image
              source={require("../../assets/homeimage.jpg")}
              style={{
                width: 380,
                height: 240,
                objectFit: "cover",
                borderRadius: 10,
              }}
            />
          </View>
          <Calories
            result={result}
            userproteinGrams={userproteinGrams}
            usercarbGrams={usercarbGrams}
            userfatGrams={userfatGrams}
          />
          <Workout />
          <View
            style={{
              backgroundColor: "black",
              width: 380,
              height: 250,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
              borderRadius: 10,
              marginBottom:20
            }}
          >
            <Image
              source={require("../../assets/homeimage.webp")}
              style={{
                width: 380,
                height: 240,
                objectFit: "contain",
                borderRadius: 10,
                
              }}
            />
          </View>
          <TrackWeight />
          <Meals/>
        </View>
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 1,
  },
});
