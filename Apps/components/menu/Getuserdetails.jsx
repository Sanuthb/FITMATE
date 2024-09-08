import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../../Utils/colors";
import { firebaseauth, firestoredb } from "../../../firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

const Getuserdetails = () => {
  const [backgroundColor, setbackgroundcolor] = useState("transparent");
  const [gender, setgender] = useState("");
  const [userage, setuserage] = useState();
  const [userheight, setuserheight] = useState();
  const [userweight, setuserweight] = useState();
  const [fitnessgoal, setfitnessgoal] = useState("");
  const [workout_type, setworkout_type] = useState("");
  const [goalweight, setgoalweight] = useState("");
  const [meal, setmeal] = useState("");
  const [workoutperweek, setworkoutperweek] = useState();

  const navigation = useNavigation()

  const userdetailsdb = () =>{

    const user = firebaseauth.currentUser.uid
    console.log(user)

    const userfitnessdata = {
      _id : user,
      gender: gender,
      age: userage,
      height: userheight,
      weight: userweight,
      fitnessgoal: fitnessgoal,
      workout_type: workout_type,
      goalweight: goalweight,
      meal: meal,
      workoutperweek: workoutperweek,
    }

     setDoc(doc(firestoredb,"User_Fitness_Details",user),userfitnessdata).then(()=>{
      alert("Successfully updated")
     });
  }



  return (
    <SafeAreaView style={styles.safeareacontainer}>
      <ScrollView>
        <KeyboardAvoidingView>
          <View style={styles.container}>
            <View style={styles.topbox}>
              <TouchableOpacity>
                <Text onPress={() => navigation.navigate("Home")}>
                  <Icon
                    name="long-arrow-left"
                    size={25}
                    color="black"
                  />
                </Text>
              </TouchableOpacity>
              <Text style={{ fontSize: 20 }}>Fitnesss Info</Text>
            </View>
            <View style={styles.box1}>
              <Text style={{ color: colors.color4, fontSize: 20 }}>Gender</Text>
              <View
                style={{
                  marginTop: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  gap: 20,
                  width: "70%",
                }}
              >
                <TouchableOpacity
                  style={[
                    {
                      borderColor: colors.color4,
                      borderRadius: 10,
                      borderWidth: 1,
                      width: 100,
                      height: 30,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    },
                    gender === "Male"
                      ? { backgroundColor }
                      : { backgroundColor: "transparent" },
                  ]}
                  onPress={() => {
                    setgender("Male");
                    setbackgroundcolor(colors.color4);
                  }}
                >
                  <Text>Male</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    {
                      borderColor: colors.color4,
                      borderRadius: 10,
                      borderWidth: 1,
                      width: 100,
                      height: 30,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    },
                    gender === "Female"
                      ? { backgroundColor }
                      : { backgroundColor: "transparent" },
                  ]}
                  onPress={() => {
                    setgender("Female");
                    setbackgroundcolor(colors.color4);
                  }}
                >
                  <Text>Female</Text>
                </TouchableOpacity>
              </View>
              <View style={{ marginTop: 20 }}>
                <Text style={{ color: colors.color4, fontSize: 20 }}>Age</Text>
                <TextInput
                  placeholder="Age"
                  style={styles.input}
                  value={userage}
                  onChangeText={(text) => setuserage(text)}
                  keyboardType="numeric"
                />
              </View>
            </View>
            <View style={[styles.box1, { height: 300 }]}>
              <View style={{ marginTop: 10 }}>
                <Text style={{ color: colors.color4, fontSize: 20 }}>
                  Height
                </Text>
                <TextInput
                  placeholder="Height"
                  style={styles.input}
                  value={userheight}
                  onChangeText={(text) => setuserheight(text)}
                  keyboardType="numeric"
                />
              </View>
              <View style={{ marginTop: 10 }}>
                <Text style={{ color: colors.color4, fontSize: 20 }}>
                  Weight
                </Text>
                <TextInput
                  placeholder="Weight"
                  style={styles.input}
                  value={userweight}
                  onChangeText={(text) => setuserweight(text)}
                  keyboardType="numeric"
                />
              </View>
            </View>
            <View style={[styles.box1, { height: "fit-content", gap: 20 }]}>
              <View>
                <Text style={{ color: colors.color4, fontSize: 20 }}>
                  Fitness Goal
                </Text>
              </View>
              <View>
                <TouchableOpacity
                  style={[
                    styles.fitnessgoal,
                    fitnessgoal === "Weight Loss"
                      ? { backgroundColor: colors.color4 }
                      : { backgroundColor: "transparent" },
                  ]}
                  onPress={() => {
                    setfitnessgoal("Weight Loss");
                  }}
                >
                  <Text>Weight Loss</Text>
                  <Text>A purely dedicated weight loss program</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  style={[
                    styles.fitnessgoal,
                    fitnessgoal === "Fat Loss"
                      ? { backgroundColor: colors.color4 }
                      : { backgroundColor: "transparent" },
                  ]}
                  onPress={() => {
                    setfitnessgoal("Fat Loss");
                  }}
                >
                  <Text>Fat Loss</Text>
                  <Text>I want to reduce fat</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  style={[
                    styles.fitnessgoal,
                    fitnessgoal === "Muscle Building"
                      ? { backgroundColor: colors.color4 }
                      : { backgroundColor: "transparent" },
                  ]}
                  onPress={() => {
                    setfitnessgoal("Muscle Building");
                  }}
                >
                  <Text>Muscle Building</Text>
                  <Text>I want to gain weight and build muscles</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={[styles.box1, { height: "fit-content", gap: 20 }]}>
              <View>
                <Text style={{ color: colors.color4, fontSize: 20 }}>
                  Workout Difficulty
                </Text>
              </View>
              <View>
                <TouchableOpacity
                  style={[
                    styles.fitnessgoal,
                    workout_type === "Beginner"
                      ? { backgroundColor: colors.color4 }
                      : { backgroundColor: "transparent" },
                  ]}
                  onPress={() => {
                    setworkout_type("Beginner");
                  }}
                >
                  <Text>Beginner</Text>
                  <Text>Doing workouts for past year or less</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  style={[
                    styles.fitnessgoal,
                    workout_type === "Intermediate"
                      ? { backgroundColor: colors.color4 }
                      : { backgroundColor: "transparent" },
                  ]}
                  onPress={() => {
                    setworkout_type("Intermediate");
                  }}
                >
                  <Text>Intermediate</Text>
                  <Text>Doing workouts for past 4 years or less</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  style={[
                    styles.fitnessgoal,
                    workout_type === "Advanced"
                      ? { backgroundColor: colors.color4 }
                      : { backgroundColor: "transparent" },
                  ]}
                  onPress={() => {
                    setworkout_type("Advanced");
                  }}
                >
                  <Text>Advanced</Text>
                  <Text>Doing workouts for more than 4 years</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={[styles.box1, { height: "fit-content", gap: 20 }]}>
              <View>
                <Text style={{ color: colors.color4, fontSize: 20 }}>
                  Goal Weight
                </Text>
                <TextInput
                  placeholder="Weight (Kg)"
                  style={styles.input}
                  value={goalweight}
                  onChangeText={(text) => setgoalweight(text)}
                  keyboardType="numeric"
                />
              </View>
              <View>
                <Text style={{ color: colors.color4, fontSize: 20 }}>
                  Meal per Day
                </Text>
                <TextInput
                  placeholder="Calorie Distribution"
                  style={styles.input}
                  value={meal}
                  onChangeText={(text) => setmeal(text)}
                  keyboardType="numeric"
                />
              </View>
              <View>
                <Text style={{ color: colors.color4, fontSize: 20 }}>
                  Workout per Week
                </Text>
                <TextInput
                  placeholder="Weekly workout plan (3,4,5,6)"
                  style={styles.input}
                  value={workoutperweek}
                  onChangeText={(text) => setworkoutperweek(text)}
                  keyboardType="numeric"
                />
              </View>
            </View>
            <View>
              <TouchableOpacity style={styles.button} onPress={userdetailsdb}>
                <Text style={{ color: colors.color4, fontSize: 20 }}>
                  Submit
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Getuserdetails;

const styles = StyleSheet.create({
  safeareacontainer: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.color3,
  },
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.color3,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  topbox: {
    width: "100%",
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection:'row',
    padding:10
  },
  box1: {
    width: "95%",
    height: 250,
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-between",
    gap: 10,
    backgroundColor: colors.PRIMARY,
    borderRadius: 10,
    padding: 30,
  },
  input: {
    width: 250,
    backgroundColor: colors.color4,
    marginTop: 20,
    marginBottom: 20,
    padding: 5,
    borderRadius: 10,
  },
  fitnessgoal: {
    borderColor: colors.color4,
    borderRadius: 10,
    borderWidth: 1,
    width: 320,
    height: 60,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  button:{
    width: 200,
    height: 50,
    backgroundColor: colors.PRIMARY,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20,
  }
});
