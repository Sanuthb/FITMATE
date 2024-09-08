import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../Utils/colors";
import fs1 from "../../assets/fs1.png";
import fs2 from "../../assets/fs2.png";
import fs3 from "../../assets/fs3.png";
import fs4 from "../../assets/fs4.png";
import { useNavigation } from "@react-navigation/native";
import userdetails from "../UserAuth/userdetails";

const MainHomeScreen = () => {
  const { getpaymentid } = userdetails();

  const Solutions = [
    {
      title: "Goal Focused Training",
      description:
        "Goal-Focused Training Or Structured Approach To Achieve Objectives. Identify Goals, Tailor Program, Keep It SMART.",
      image: fs1,
    },
    {
      title: "Custom Diet Plan",
      description:
        "Transform Your Health: Personalized Diet Plans Designed For You By Fitmates For Optimal Wellness & Results.",
      image: fs2,
    },
    {
      title: "Digi-Gym",
      description:
        "Transform At Home With FITMATE's DIGI Gym, AI-Driven Wellness & Fitness Solutions",
      image: fs3,
    },
    {
      title: "Fusion Training Class",
      description:
        "Unleash Your Fitness Potential With FITMATE Fusion Classes- Fun, Effective & Personalized Workouts Guaranteed!",
      image: fs4,
    },
  ];

  const navigation = useNavigation();

  function handlepayment(price) {
    navigation.navigate("PaymentScreen", { paymentprice: price });
  }

  function Navighomescreen() {
    navigation.navigate("Home");
  }

  return (
    <SafeAreaView style={styles.homecontainer}>
      <ScrollView>
        <View style={styles.frontaboutbox}>
          <Text style={{ fontSize: 100, fontWeight: 600 }}>
            Fit<Text style={{ color: colors.PRIMARY }}>Mate</Text>
          </Text>
          <Text style={{ fontSize: 16 }}>
            "Empowering Your Fitness, One Step at a Time."
          </Text>
          <Image
            source={require("../../assets/mhs.jpg")}
            style={{ width: 400, height: 420, objectFit: "contain" }}
          />
          {getpaymentid && (
            <TouchableOpacity onPress={() => Navighomescreen()}>
              <Text
                style={{ fontSize: 20, fontWeight: 600, color: colors.PRIMARY }}
              >
                Get Started
              </Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.safeareacontainer}>
          <View style={styles.aboutbox}>
            <View>
              <Text style={{ fontSize: 20, color: colors.PRIMARY }}>
                About Us
              </Text>
            </View>
            <View>
              <Text style={styles.abouttext}>
                The FitMate Gym app is your ultimate fitness companion, designed
                to help you achieve your health and wellness goals conveniently
                from your mobile device. With intuitive features and
                user-friendly interface, the app provides access to personalized
                workout plans, exercise routines, nutrition tips, and progress
                tracking tools. You can easily schedule gym sessions, book
                classes, and connect with expert trainers for guidance and
                support. Whether you're at home, at work, or on the go, the
                FitMate Gym app empowers you to stay motivated, track your
                progress, and stay committed to your fitness journey.
              </Text>
              <Image
                source={require("../../assets/about.png")}
                style={styles.aboutimage}
              />
            </View>
          </View>
          <View style={styles.membershipbox}>
            <View style={styles.membershipcontainer}>
              <Text style={{ fontSize: 35, color: colors.color4 }}>
                Our Plans
              </Text>
              <View style={styles.membership1}>
                <Text style={styles.membershiptext}>12 Months</Text>
                <View style={styles.members}>
                  <Image
                    source={require("../../assets/mb2.png")}
                    style={styles.memberimage}
                  />
                  <View>
                    <Text>PRICE: Rs 12,000</Text>
                    <TouchableOpacity
                      style={{
                        backgroundColor: colors.PRIMARY,
                        padding: 10,
                        borderRadius: 10,
                        marginTop: 10,
                      }}
                      onPress={() => handlepayment(12000)}
                    >
                      <Text
                        style={{ color: colors.color5, textAlign: "center" }}
                      >
                        Enroll Now
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={styles.membership2}>
                <Text style={styles.membershiptext}>6 Months</Text>
                <View style={styles.members}>
                  <Image
                    source={require("../../assets/mb1.png")}
                    style={styles.memberimage}
                  />
                  <View>
                    <Text>PRICE: Rs 8000</Text>
                    <TouchableOpacity
                      style={{
                        backgroundColor: colors.PRIMARY,
                        padding: 10,
                        borderRadius: 10,
                        marginTop: 10,
                      }}
                      onPress={() => handlepayment(8000)}
                    >
                      <Text
                        style={{ color: colors.color5, textAlign: "center" }}
                      >
                        Enroll Now
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={styles.membership3}>
                <Text style={styles.membershiptext}>3 Months</Text>
                <View style={styles.members}>
                  <Image
                    source={require("../../assets/mb3.png")}
                    style={styles.memberimage}
                  />
                  <View>
                    <Text>PRICE: Rs 4000</Text>
                    <TouchableOpacity
                      style={{
                        backgroundColor: colors.PRIMARY,
                        padding: 10,
                        borderRadius: 10,
                        marginTop: 10,
                      }}
                      onPress={() => handlepayment(4000)}
                    >
                      <Text
                        style={{ color: colors.color5, textAlign: "center" }}
                      >
                        Enroll Now
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.banner}>
            <Image
              source={require("../../assets/banner.webp")}
              style={styles.bannerimage}
            />
          </View>
          <View style={styles.fitness_solution}>
            <Text style={styles.fitnessheading}>
              Our All-Inclusive Fitness Solutions
            </Text>
            <Text style={styles.fitnesstext}>
              Experience a Total Fitness Transformation with Our Comprehensive
              Suite of Services.
            </Text>
            <View style={styles.solutionbox}>
              {Solutions.map((item, index) => {
                return (
                  <View key={index} style={styles.solutioncontainer}>
                    <Image source={item.image} style={styles.solutionimage} />
                    <Text style={styles.solutiontext}>{item.title}</Text>
                    <Text style={styles.solutiondescription}>
                      {item.description}
                    </Text>
                  </View>
                );
              })}
            </View>
          </View>
          <View style={styles.contactbox}>
            <Text style={{ fontSize: 25 }}>Contact Us</Text>
            <View style={styles.contactcontainer}>
              <Text style={{ fontSize: 20 }}>Address :Bangalore Karnataka</Text>
              <Text style={{ fontSize: 20 }}>Phone No: +91 9876543210</Text>
              <Text style={{ fontSize: 20 }}>Email : Fitmate@gmail.com</Text>
              <Image
                source={require("../../assets/contact.png")}
                style={styles.contactimage}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainHomeScreen;

const styles = StyleSheet.create({
  homecontainer: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.color7,
  },
  frontaboutbox: {
    width: "100%",
    height: 900,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 30,
    backgroundColor: colors.color7,
  },
  aboutbox: {
    backgroundColor: colors.color4,
    padding: 20,
    borderRadius: 10,
    marginTop: 10,
    width: "fit-content",
    height: "fit-content",
  },
  abouttext: {
    textAlign: "justify",
    fontSize: 15,
    marginTop: 30,
  },
  aboutimage: {
    width: 380,
    height: 300,
    resizeMode: "contain",
  },
  membershipbox: {
    height: 600,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.color4,
  },
  membershipcontainer: {
    width: 380,
    height: "100%",
    backgroundColor: colors.PRIMARY,
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    padding: 10,
  },

  membership1: {
    width: 300,
    height: "fit-content",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.color4,
    borderRadius: 10,
    gap: 10,
    padding: 10,
  },
  membershiptext: {
    fontSize: 20,
  },
  membership2: {
    width: 300,
    height: "fit-content",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.color4,
    borderRadius: 10,
    gap: 10,
    padding: 10,
  },
  membership3: {
    width: 300,
    height: "fit-content",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.color4,
    borderRadius: 10,
    gap: 10,
    padding: 10,
  },
  members: {
    width: "80%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    gap: 10,
  },
  memberimage: {
    width: 100,
    height: 100,
    resizeMode: "cover",
  },
  banner: {
    width: "100%",
    height: 200,
    backgroundColor: colors.color4,
  },
  bannerimage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  fitness_solution: {
    padding: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
    gap: 20,
    backgroundColor: colors.color4,
  },
  fitnessheading: {
    fontSize: 30,
    color: colors.PRIMARY,
    fontWeight: "bold",
  },
  fitnesstext: {
    fontSize: 15,
    marginTop: 10,
  },
  solutionbox: {
    isplay: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  solutioncontainer: {
    width: 370,
    height: 400,
    backgroundColor: colors.PRIMARY,
    borderRadius: 15,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
  },
  solutiontext: {
    fontSize: 25,
    color: colors.color4,
    fontWeight: "bold",
  },
  solutiondescription: {
    fontSize: 17,
    textAlign: "justify",
    width: 330,
    marginBottom: 10,
  },
  solutionimage: {
    width: 300,
    height: 200,
    resizeMode: "contain",
  },
  contactbox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
    height: 500,
    backgroundColor: colors.color4,
  },
  contactimage: {
    width: 300,
    height: 250,
    resizeMode: "contain",
  },
  contactcontainer: {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "center",
    gap: 20,
  },
});
