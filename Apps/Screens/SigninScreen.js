import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Image,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import colors from "../Utils/colors";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseauth, firestoredb } from "../../firebase";
import { setDoc, doc } from "firebase/firestore";

const SigninScreen = () => {
  const navigation = useNavigation();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [username, setusername] = useState("");
  const handelSignUp = () => {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (username === "") {
      alert("Please enter valid username");
      setusername("");
    } else if (email === "" || !emailRegex.test(email)) {
      alert("Please enter valid email");
      setemail("");
    } else if (password === "") {
      alert("Please enter  password");
      setpassword("");
    } else {
      createUserWithEmailAndPassword(firebaseauth, email, password)
        .then((userCredentials) => {
          const data = {
            _id: userCredentials?.user.uid,
            name: username,
            email: email,
            login_token:"True",
          };
          setDoc(
            doc(firestoredb, "users", userCredentials.user.uid),
            data
          ).then(() => {
            navigation.navigate("FitmateScreen");
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert("Email/Username already exist");
        });
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior="padding">
        <ScrollView>
          <View style={styles.mainbox}>
            <View style={styles.box}>
              <Image
                source={require("../../assets/login.png")}
                style={styles.image}
              />
            </View>
            <View style={styles.box1}>
              <Text style={styles.loginText}>Create New Account</Text>
            </View>
            <View style={styles.box2}>
              <View style={{ marginTop: 10 }}>
                <Text style={{ color: colors.color1, fontSize: 16 }}>
                  Username
                </Text>
                <TextInput
                  placeholder="Username"
                  value={username}
                  onChangeText={(text) => setusername(text)}
                  style={styles.input}
                />
              </View>
            </View>
            <View style={styles.box2}>
              <View style={{ marginTop: 10 }}>
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
            <View style={styles.box2}>
              <View style={{ marginTop: 10 }}>
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
              <TouchableOpacity style={styles.button} onPress={handelSignUp}>
                <Text style={styles.buttontext}>Signin</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.box5}>
              <Text style={{ color: colors.color2 }}>
                Already Have Account?{" "}
                <Text
                  style={{ color: colors.color1, fontSize: 17 }}
                  onPress={() => navigation.navigate("Login")}
                >
                  Signin
                </Text>
              </Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.color3,
  },
  mainbox: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
  box1: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
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
  },
  box3: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
    marginBottom: 10,
  },
  box5: {
    width: "100%",
    height: "5%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  button: {
    backgroundColor: colors.PRIMARY,
    padding: 10,
    width: 100,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 10,
  },
  buttontext: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
  },
});
