import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Modal,
  Image,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import colors from "../Utils/colors";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { firebaseauth, firestoredb } from "../../firebase";

export default function PaymentScreen() {
  const route = useRoute();
  const { paymentprice } = route.params;
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCVV] = useState("");
  const [cardholderName, setCardholderName] = useState("");
  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const user = firebaseauth.currentUser.uid;
  const navigation = useNavigation();

  const handlePayment = async () => {
    try {
      if (!validatePaymentForm()) {
        return;
      }

      const generatedPaymentId = generatePaymentId();

      const docRef = doc(firestoredb, "paymentData", user);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        await updateDoc(docRef, {
          payment_price: paymentprice,
          cardholderName: cardholderName,
          paymentId: generatedPaymentId, 
        });
      } else {
        const paymentData = {
          _id: user,
          payment_price: paymentprice,
          cardholderName: cardholderName,
          paymentId: generatedPaymentId, 
        };
        await setDoc(docRef, paymentData);
      }

      setSuccessModalVisible(true);

      setCardNumber("");
      setExpiryDate("");
      setCVV("");
      setCardholderName("");
    } catch (error) {
      console.error("Error processing payment:", error);
    }
  };


  const generatePaymentId = () => {
    return Math.random().toString(36).substring(2, 10);
  };

  const validatePaymentForm = () => {
    const cardNumberDigitsOnly = cardNumber.replace(/\s+/g, "");
    if (!cardNumberDigitsOnly || cardNumberDigitsOnly.length !== 16) {
      Alert.alert(
        "Invalid Card Number",
        "Please enter a valid 16-digit card number."
      );
      return false;
    }
    if (!expiryDate || !/^\d{2}\/\d{2}$/.test(expiryDate)) {
      Alert.alert(
        "Invalid Expiry Date",
        "Please enter a valid expiry date in MM/YY format."
      );
      return false;
    }
    if (!cvv || cvv.length !== 3) {
      Alert.alert("Invalid CVV", "Please enter a valid 3-digit CVV number.");
      return false;
    }
    if (!cardholderName) {
      Alert.alert(
        "Missing Cardholder Name",
        "Please enter the cardholder's name."
      );
      return false;
    }
    return true;
  };

  const formatCardNumber = (input) => {
    const digitsOnly = input.replace(/\D/g, "");
    const formatted = digitsOnly.replace(/(.{4})/g, "$1 ");
    return formatted.trim();
  };

  return (
    <SafeAreaView style={styles.safeareacontainer}>
      <View style={styles.backgroundContainer}>
        <View style={styles.backgroundCircle1}></View>
        <View style={styles.backgroundCircle2}></View>
      </View>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Secure Payment</Text>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Card Number"
              keyboardType="numeric"
              maxLength={19}
              value={formatCardNumber(cardNumber)}
              onChangeText={(text) => setCardNumber(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Expiry Date (MM/YY)"
              maxLength={5}
              value={expiryDate}
              onChangeText={(text) => setExpiryDate(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="CVV"
              keyboardType="numeric"
              maxLength={3}
              value={cvv}
              onChangeText={(text) => setCVV(text)}
            />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Cardholder Name"
            value={cardholderName}
            onChangeText={setCardholderName}
          />
          <Text style={styles.total}>Total Amount: Rs {paymentprice}</Text>
          <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
            <Text style={styles.buttonText}>Pay Now</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Success Modal */}
      <Modal visible={successModalVisible} transparent animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Image
              source={require("../../assets/sccuess.png")}
              style={styles.successImage}
            />
            <Text style={styles.modalTitle}>Payment Successful</Text>
            <Text style={styles.modalText}>Your payment was successful!</Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => {
                setSuccessModalVisible(false);
                navigation.navigate("FitmateScreen");
              }}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeareacontainer: {
    flex: 1,
    backgroundColor: colors.PRIMARY,
  },
  backgroundContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundCircle1: {
    position: "absolute",
    top: -200,
    left: -100,
    width: 400,
    height: 400,
    borderRadius: 200,
    backgroundColor: colors.color5,
    opacity: 0.8,
  },
  backgroundCircle2: {
    position: "absolute",
    bottom: -100,
    right: -100,
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: colors.color5,
    opacity: 0.8,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    marginBottom: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  formContainer: {
    width: "80%",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 20,
    elevation: 3,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "#CCCCCC",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  total: {
    fontSize: 20,
    marginBottom: 20,
  },
  payButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  successImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  closeButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  closeButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
