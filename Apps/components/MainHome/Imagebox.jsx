import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import colors from "../../Utils/colors";
const Imagebox = () => {
  return (
    <View style={styles.container}>
        <Image
          source={require("../../../assets/mhs.jpg")}
          style={styles.imagebox}
        />
      <Text style={styles.text}>
        Fit<Text style={{ color: colors.color5 }}>Mate</Text>
      </Text>
      <Text style={styles.tagline}>
        "Empowering Your Fitness, One Step at a Time."
      </Text>
      <View style={styles.linearGradient}></View>
    </View>
  );
};

export default Imagebox;

const styles = StyleSheet.create({
  box: {
    width: 380,
    height: "100%",
    backgroundColor: colors.color2,
    borderRadius: 22,
  },
  imagebox: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 22,
  },
  text: {
    position: "absolute",
    fontSize: 60,
    color: colors.PRIMARY,
    fontWeight: "bold",
    textAlign: "center",
    top: "30%",
    left: 20,
    zIndex: 2,
  },
  tagline: {
    position: "absolute",
    fontSize: 30,
    color: colors.color5,
    fontWeight: "bold",
    top: "46%",
    left: 10,
    zIndex: 2,
    width: 300,
  },
  linearGradient: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
    borderRadius: 22,
    backgroundColor: colors.color6,
  },
});
