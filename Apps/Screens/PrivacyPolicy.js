import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import {privacypolicy} from "../Utils/data"
import colors from "../Utils/colors";
import Icon from "react-native-vector-icons/FontAwesome";


const PrivacyPolicy = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topbox}>
        <TouchableOpacity>
          <Text onPress={() => navigation.navigate("Home")}>
            <Icon name="long-arrow-left" size={25} color={colors.PRIMARY} />
          </Text>
        </TouchableOpacity>
        <Text style={styles.text}>Privacy Policy </Text>
      </View>
      <View style={styles.textcontainer}>
        <ScrollView>
          {privacypolicy.map((data) => {
            if (
              data.description1 === "" ||
              data.description2 === "" ||
              data.description3 === "" ||
              data.description4 === ""
            ) {
              return (
                <View style={styles.texts}>
                  <Text style={styles.text1}>{data.title}</Text>
                  <Text style={styles.text2}>{data.description}</Text>
                </View>
              );
            } else if (data.description3 === "" || data.description4 === "") {
              return (
                <View style={styles.texts}>
                  <Text style={styles.text1}>{data.title}</Text>
                  <Text style={styles.text2}>{data.description}</Text>
                  <Text style={styles.text2}>{data.description1}</Text>
                  <Text style={styles.text2}>{data.description2}</Text>
                </View>
              );
            } else if (data.description4 === "") {
              return (
                <View style={styles.texts}>
                  <Text style={styles.text1}>{data.title}</Text>
                  <Text style={styles.text2}>{data.description}</Text>
                  <Text style={styles.text2}>{data.description1}</Text>
                  <Text style={styles.text2}>{data.description2}</Text>
                  <Text style={styles.text2}>{data.description3}</Text>
                </View>
              );
            } else {
              return (
                <View style={styles.texts}>
                  <Text style={styles.text1}>{data.title}</Text>
                  <Text style={styles.text2}>{data.description}</Text>
                  <Text style={styles.text2}>{data.description1}</Text>
                  <Text style={styles.text2}>{data.description2}</Text>
                  <Text style={styles.text2}>{data.description3}</Text>
                  <Text style={styles.text2}>{data.description4}</Text>
                </View>
              );
            }
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default PrivacyPolicy;

const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: "100%",
      backgroundColor: colors.color5,
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
    text: {
      color: colors.PRIMARY,
      fontSize: 20,
    },
    textcontainer: {
      padding: 10,
      height: 740,
    },
    texts: {
      width: "100%",
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      flexDirection: "column",
      gap: 10,
      marginTop: 10,
    },
    text1: {
      color: colors.PRIMARY,
      fontSize: 20,
    },
    text2: {
      color: colors.color1,
      fontSize: 15,
      textAlign: "justify",
    },
  });
  
