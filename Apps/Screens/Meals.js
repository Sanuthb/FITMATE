import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../Utils/colors";
import data from "../Utils/explorerecipies";
import Dishcards from "../components/Dishcards/Dishcards";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import Footer from "../components/footer/Footer";

const Meals = () => {
const navigation=useNavigation()
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topcontainer}>
        <TouchableOpacity>
          <Text onPress={() => navigation.navigate("Home")}>
            <Icon name="long-arrow-left" size={25} color={colors.PRIMARY} />
          </Text>
        </TouchableOpacity>
        <Text style={{ color: colors.PRIMARY, fontSize: 20 }}>
          Explore Recipies
        </Text>
      </View>
      <View style={styles.scrollconatiner}>
        <ScrollView>
          {data.map((items, index) => {
            return (
              <Dishcards
                dishname={items.dishname}
                image={items.image}
                calories={items.calories}
                protein={items.protein}
                carbs={items.carbohydrate}
                fats={items.fat}
              />
            );
          })}
        </ScrollView>
        <Footer />
      </View>
    </SafeAreaView>
  );
};

export default Meals;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.color5,
  },
  topcontainer: {
    width: "100%",
    height: 60,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",    
    flexDirection: "row",
    gap: 10,
    padding: 10,
  },
  scrollconatiner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "90%",
  },
});
