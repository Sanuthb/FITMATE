import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import colors from "../Utils/colors";

const Onboard = () => {
    const navigation = useNavigation();
        return (
        <SafeAreaView style={styles.container}>
           <View style={styles.mainbox}>
                <View style={styles.box1}>
                    <Text style={{ color: colors.color1, fontSize: 40, fontWeight: 600 }}>Welcome to</Text><Text style={{ color: colors.PRIMARY, fontSize: 40, fontWeight: 600 }}>FitMate <Text style={{ color: colors.color1, fontSize: 40, fontWeight: 600 }}>Mobile App</Text></Text>
                </View>
                <View style={styles.box2}>
                    <Text style={{ width: 200, textAlign: 'center', fontSize: 15 ,color:colors.color2}}>The Best Fitness App for your daily health and fitness</Text>
                </View>
                <View style={styles.box3}>
                    <Image
                        source={require('../../assets/onboard.png')}
                        style={styles.image}
                    />
                </View>
                <View style={styles.box4}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('Signin')}
                    >
                        <Text style={styles.buttontext}>Get Started</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.box5}>
                    <Text style={{color:colors.color2}}>Already Have Account? <Text style={{color:colors.color1,fontSize:17}} onPress={()=>navigation.navigate('Login')}>Signin</Text></Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Onboard;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.color3,
  },
  mainbox: {
    marginTop: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 1,
    width: "100%",
    height: "100%",
  },
  box1: {
    width: "100%",
    height: "20%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  box2: {
    width: "100%",
    height: "10%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  box3: {
    width: "100%",
    height: "40%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  box4: {
    width: "100%",
    height: "10%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: colors.PRIMARY,
    padding: 10,
    borderRadius: 10,
  },
  buttontext: {
    color: "white",
    fontSize: 20,
  },
  box5: {
    width: "100%",
    height: "10%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    objectFit: "contain",
  },
});
