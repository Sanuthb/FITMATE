import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { LineChart } from "react-native-chart-kit";
import colors from "../Utils/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { firebaseauth, firestoredb } from "../../firebase";
import { doc, getDoc, updateDoc, arrayUnion, setDoc } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

const Track_weight = () => {

  const navigation =useNavigation()
  const [graphweight, setgraphweight] = useState(0);
  const [graphfat, setgraphfat] = useState(0);
  const [xlabel, setxlabel] = useState(0);
  const [ylabel, setylabel] = useState(0);
  const user = firebaseauth.currentUser.uid;

  const fetchdata = async () => {
    try {
       await getDoc(doc(firestoredb, "trackweightData", user)).then((userdoc) => {
        if (userdoc.exists()) {
          const weight = userdoc.get("weight");
          const fat = userdoc.get("fat");
          setylabel(weight);
          setxlabel(fat);
        }
      });
    } catch (error) {
      console.error("Error fetching document:", error);
    }
  };
  const addValue = async () => {
    try {
      const docRef = doc(firestoredb, "trackweightData", user);
      const docSnap = await getDoc(docRef);
  
      if (docSnap.exists()) {
        await updateDoc(docRef, {
          fat: arrayUnion(parseFloat(graphfat)),
          weight: arrayUnion(parseFloat(graphweight)),
        });
      } else {
        const trackweightdata = {
          _id: user,
          fat: [parseFloat(graphfat)],
          weight: [parseFloat(graphweight)],
        };
        await setDoc(docRef, trackweightdata);
      }
  
      alert("Successfully updated");
      fetchdata();
    } catch (error) {
      console.error("Error adding weight data:", error);
    }
  };

  const removeCurrentItem = async () => {
    try {
      const docRef = doc(firestoredb, "trackweightData", user);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        const newData = { ...data };

        newData.weight.pop();
        newData.fat.pop();
  
        await setDoc(docRef, newData);
        alert("Successfully removed current item");
        fetchdata(); 
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error removing current item:", error);
    }
  };

  const removeWeightAndFatData = async () => {
    try {
      const docRef = doc(firestoredb, "trackweightData", user);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        const newData = { ...data };
  
        newData.weight = [];
        newData.fat = [];
  
        await setDoc(docRef, newData);
        alert("Weight and fat data removed successfully");
        fetchdata(); 
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error removing weight and fat data:", error);
    }
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <KeyboardAvoidingView behavior="padding">
          <View style={styles.box}>
             <TouchableOpacity>
                <Text onPress={() => navigation.navigate("Home")}>
                  <Icon
                    name="long-arrow-left"
                    size={25}
                    color={colors.PRIMARY}
                  />
                </Text>
              </TouchableOpacity>
            <Text
              style={{ fontSize: 25, fontWeight: 600, color: colors.PRIMARY }}
            >
              Track Weight
            </Text>
          </View>
          <View style={styles.mainbox}>
            <LineChart
              data={{
                labels: xlabel ? xlabel : [0],
                datasets: [
                  {
                    data: ylabel ? ylabel : [0],
                  },
                ],
              }}
              width={Dimensions.get("window").width - 30}
              height={250}
              yAxisLabel=""
              yAxisSuffix=""
              chartConfig={{
                backgroundColor: colors.color2,
                backgroundGradientFrom: colors.PRIMARY,
                backgroundGradientTo: colors.PRIMARY,
                decimalPlaces: 2,
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: "6",
                  strokeWidth: "2",
                  stroke: "#ffa726",
                },
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
            />
            <View style={styles.box1}>
              <Text style={{ fontSize: 20, color: colors.color1 }}>
                Current Weight
              </Text>
              <TextInput
                placeholder="Weight"
                style={styles.input}
                value={graphweight}
                onChangeText={(text) => setgraphweight(text)}
                keyboardType="number-pad"
              />
            </View>
            <View>
              <Text style={{ fontSize: 20, color: colors.color1 }}>
                Current Fat %
              </Text>
              <TextInput
                placeholder="Fat"
                style={styles.input}
                value={graphfat}
                onChangeText={(text) => setgraphfat(text)}
                keyboardType="number-pad"
              />
            </View>
            <View >
              <TouchableOpacity onPress={addValue} style={styles.box2}>
                <Text style={{color:colors.color4}}>Add Weight</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity onPress={removeCurrentItem} style={styles.box2}>
                <Text style={{color:colors.color4}}>Remove Current entry</Text>
              </TouchableOpacity>
            </View>
            <View >
              <TouchableOpacity onPress={removeWeightAndFatData} style={styles.box2}>
                <Text style={{color:colors.color4}}>Remove</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Track_weight;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.color3,
  },
  box: {
    width: "100%",
    height: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 20,
  },
  mainbox: {
    width: "100%",
    height: 'fit-content',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap:20,
    padding:15
  },
  box2:{
    width: 300,
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:colors.PRIMARY,
    borderRadius: 10,
  },
  input:{
    width: 300,
    height: 50,
    padding: 10,
    borderRadius: 10,
    backgroundColor:colors.color4,
    color: colors.color1,
    marginTop:15,
  }
});
