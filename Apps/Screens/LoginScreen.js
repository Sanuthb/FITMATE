import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import colors from "../Utils/colors";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { firebaseauth, firestoredb } from "../../firebase";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

const handleSignin = () => {
  signInWithEmailAndPassword(firebaseauth, email, password)
    .then((userCredential) => {
      if (userCredential) {
        const userDocRef = doc(firestoredb, "users", userCredential.user.uid);
        getDoc(userDocRef).then((docSnap) => {
          if (docSnap.exists()) {
            const userData = docSnap.data();
            if (userData.email.toLowerCase() === "sanuthadmin@gmail.com") {
              console.log("Admin user:", userData.email);
              navigation.navigate("Adminpage");
            } else {
              navigation.navigate("FitmateScreen");
            }
          } else {
            alert("No such user document!");
          }
        });
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Invalid Email/Password");
    });
};

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <KeyboardAvoidingView behavior="padding">
          <View style={styles.mainbox}>
            <View style={styles.box6}>
              <Image
                source={require("../../assets/signup.png")}
                style={styles.image}
              />
            </View>
            <View style={styles.box1}>
              <Text style={styles.loginText}>Welcome Back</Text>
            </View>

            <View style={styles.box2}>
              <View>
                <Text style={{ color: colors.color1, fontSize: 16 }}>
                  Email
                </Text>
                <TextInput
                  placeholder="Email"
                  value={email}
                  onChangeText={(text) => setemail(text)}
                  style={styles.input}
                />
              </View>
            </View>
            <View style={styles.box3}>
              <View>
                <Text style={{ color: colors.color1, fontSize: 16 }}>
                  Password
                </Text>
                <TextInput
                  placeholder="Password"
                  value={password}
                  onChangeText={(text) => setpassword(text)}
                  style={styles.input}
                />
              </View>
            </View>
            <View style={styles.box4}>
              <TouchableOpacity style={styles.button} onPress={handleSignin}>
                <Text style={styles.buttontext}>Sign In</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.box5}>
              <Text style={{ color: colors.color2 }}>
                Don't Have An Account?{" "}
                <Text
                  style={{ color: colors.color1, fontSize: 17 }}
                  onPress={() => navigation.navigate("Signin")}
                >
                  Register
                </Text>
              </Text>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.color3,
  },
  mainbox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  box1: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop:10,
  },
  loginText: {
    fontSize: 30,
    fontWeight: "600",
    color: colors.color1,
  },
  box2: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop:10,

  },
  box3: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop:10,
  },
  input: {
    backgroundColor: colors.color4,
    color: colors.color1,
    width: 300,
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  box4: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop:10,
  },
  box5: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop:30,
  },
  button: {
    backgroundColor: colors.PRIMARY,
    padding: 10,
    width: 100,
    borderRadius: 10,
    marginTop:30,
    marginBottom:20,
  },
  buttontext: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
  },
  box6: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop:10,
  },
  image: {
    width: 400,
    height: 400,
    objectFit: "contain",
  },
});
