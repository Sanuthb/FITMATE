import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import colors from "../../Utils/colors";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";

const Footer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.continer}>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.icons}
          onPress={() => navigation.navigate("Home")}
        >
          <Icon name="home" size={20} color={colors.PRIMARY} />
          <Text style={{ color: colors.color2 }}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.icons}
          onPress={() => navigation.navigate("Searchcalories")}
        >
          <Icon name="fire-alt" size={20} color={colors.PRIMARY} />
          <Text style={{ color: colors.color2 }}>Calories</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.icons}
          onPress={() => navigation.navigate("Workoutlist")}
        >
          <Icon name="dumbbell" size={20} color={colors.PRIMARY} />
          <Text style={{ color: colors.color2 }}>Workout</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.icons}
          onPress={() => navigation.navigate("Meals")}
        >
          <Icon name="chess-king" size={20} color={colors.PRIMARY} />
          <Text style={{ color: colors.color2 }}>GOAT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  continer: {
    width: "100%",
    height: 55,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  footer: {
    width: "80%",
    height: 55,
    borderRadius: 55,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  icons: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
  },
});
