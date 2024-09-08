import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../Utils/colors";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import { doc, setDoc } from "firebase/firestore";
import { firebaseauth, firestoredb } from "../../firebase";

const ContactUs = () => {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    let valid = true;
    let errors = {};

    if (!name) {
      errors.name = "Name is required";
      valid = false;
    }

    if (!email) {
      errors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email address is invalid";
      valid = false;
    }

    if (!message) {
      errors.message = "Message is required";
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = () => {
    if (validate()) {
      const user = firebaseauth.currentUser.uid;

      const userfitnessdata = {
        _id: user,
        Name: name,
        Email: email,
        Message: message,
      };

      setDoc(doc(firestoredb, "Contact", user), userfitnessdata).then(() => {
        alert("Successfully Sent");
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "#fff",
          width: "100%",
          height: 50,
          display: "flex",
          alignItems: "baseline",
          justifyContent: "center",
          padding: 10,
        }}
      >
        <TouchableOpacity>
          <Text onPress={() => navigation.navigate("Home")}>
            <Icon name="long-arrow-left" size={25} color={colors.PRIMARY} />
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container1}>
        <View style={styles.form}>
          <Text style={styles.title}>Contact Us</Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={setName}
          />
          {errors.name && <Text style={styles.error}>{errors.name}</Text>}

          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          {errors.email && <Text style={styles.error}>{errors.email}</Text>}

          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Message"
            value={message}
            onChangeText={setMessage}
            multiline={true}
            numberOfLines={4}
          />
          {errors.message && <Text style={styles.error}>{errors.message}</Text>}

          <Button title="Submit" onPress={handleSubmit} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ContactUs;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.PRIMARY,
  },
  container1: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    padding: 10,
    backgroundColor: colors.PRIMARY,
  },
  form: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: "100%",
    height: "65%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 12,
    marginBottom: 16,
    backgroundColor: "#fff",
  },
  textArea: {
    height: 150,
    textAlignVertical: "top",
  },
  error: {
    color: "red",
    marginBottom: 8,
  },
});
