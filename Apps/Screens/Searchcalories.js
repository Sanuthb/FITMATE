import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import colors from "../Utils/colors";
import { firebaseauth, firestoredb } from "../../firebase";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import Footer from "../components/footer/Footer";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const Searchcalories = () => {
  const [search, setsearch] = useState("");
  const [apidata ,setapidata] =useState(false);
  const [foodname,setfoodname]=useState('')
  const [calories,setcalories]=useState(0)
  const [serving,setserving]=useState(0)
  const [protein,setprotein]=useState(0)
  const [fat,setfat]=useState(0)
  const [carbs,setcarbs]=useState(0)
  var foodcalories = 0;
  var foodserving = 0;
  var foodprotein = 0;
  var foodfat = 0;
  var foodcarbs = 0;
  const handlesearch = () => {
    const query = search;
    const apiKey = "FAvMWLYLocdkU7twghh02g==h05lVq58exBCGwr6";
    fetch(`https://api.calorieninjas.com/v1/nutrition?query=${query}`, {
      headers: {
        "X-Api-Key": apiKey,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setapidata(true);
        if(data.items.length>1){
          for(var i=0;i<data.items.length;i++){
            foodcalories=foodcalories + parseFloat(data.items[i].calories)
            foodserving=foodserving + parseFloat(data.items[i].serving_size_g)
            foodprotein=foodprotein + parseFloat(data.items[i].protein_g)
            foodfat=foodfat + parseFloat(data.items[i].fat_total_g)
            foodcarbs=foodcarbs + parseFloat(data.items[i].carbohydrates_total_g)
          }
          setcalories(foodcalories.toFixed(2))
          setserving(foodserving.toFixed(2))
          setprotein(foodprotein.toFixed(2))
          setfat(foodfat.toFixed(2))
          setcarbs(foodcarbs.toFixed(2))
          setfoodname(query)
        }else{
          setcalories(data.items[0].calories)
          setserving(data.items[0].serving_size_g)
          setprotein(data.items[0].protein_g)
          setfat(data.items[0].fat_total_g)
          setcarbs(data.items[0].carbohydrates_total_g)
          setfoodname(query)
        }
      })
      .catch((error) => {
        console.error("Request failed:", error);
      });
  };

  const addcalorietodb = async() =>{
    try {
      const user = firebaseauth.currentUser.uid;
      const docRef = doc(firestoredb, "addusercaloriestrack", user);
      const docSnap = await getDoc(docRef);
      const usercalories = {
        _id : user,
        calories: parseFloat(calories),
        serving: parseFloat(serving),
        protein: parseFloat(protein),
        fat: parseFloat(fat),
        carbs: parseFloat(carbs),
      }

      let existingData = {};

      if(docSnap.exists()){
        existingData = docSnap.data();
      }

      const updatedCalories = {
        calories: (existingData.calories || 0) + usercalories.calories,
        serving: (existingData.serving || 0) + usercalories.serving,
        protein: (existingData.protein || 0) + usercalories.protein,
        fat: (existingData.fat || 0) + usercalories.fat,
        carbs: (existingData.carbs || 0) + usercalories.carbs,
      };
      if(docSnap.exists()){
        await updateDoc(docRef,updatedCalories)
      }
      else{
        await setDoc(docRef,usercalories)
      }

      alert("Successfully Added")
    }
    catch(error) { 
      console.log(error)
    }
  }
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safecontainer}>
      <ScrollView>
        <KeyboardAvoidingView>
          <View style={styles.caloriescontainer}>
            <View style={styles.topbox}>
              <TouchableOpacity>
                <Text onPress={() => navigation.navigate("Home")}>
                  <Icon
                    name="long-arrow-left"
                    size={25}
                    color={colors.PRIMARY}
                  />
                </Text>
              </TouchableOpacity>
              <Text style={{ color: colors.PRIMARY, fontSize: 20 }}>
                Search Calories
              </Text>
            </View>
            <View style={styles.searchcontainer}>
              <TextInput
                placeholder="Search Calories"
                onChangeText={(text) => {
                  setsearch(text);
                }}
                value={search}
                style={styles.input}
              />
              <TouchableOpacity
                style={{
                  backgroundColor: colors.PRIMARY,
                  width: 150,
                  height: 50,
                  borderRadius: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onPress={handlesearch}
              >
                <Text style={{ color: colors.color4 }}>Search</Text>
              </TouchableOpacity>
            </View>
            {apidata && (
              <View style={styles.caloriescard}>
                <Text
                  style={{
                    fontSize: 20,
                    color: colors.PRIMARY,
                    textTransform: "capitalize",
                  }}
                >
                  {foodname}
                </Text>
                <Text>Cal:{calories}</Text>
                <Text>Serving:{serving}</Text>
                <View
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                    flexDirection: "row",
                  }}
                >
                  <Text>Pro:{protein}</Text>
                  <Text>Fat:{fat}</Text>
                  <Text>carbs:{carbs}</Text>
                </View>
                <TouchableOpacity
                  style={{
                    backgroundColor: colors.PRIMARY,
                    width: 150,
                    height: 50,
                    borderRadius: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onPress={addcalorietodb}
                >
                  <Text style={{ color: colors.color4 }}>Add Calories</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
};

export default Searchcalories;

const styles = StyleSheet.create({
  safecontainer: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.color3,
  },
  caloriescontainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  topbox: {
    height: 100,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 15,
  },
  searchcontainer: {
    width: "100%",
    height: 300,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 50,
    padding: 10,
    flexDirection: "column",
  },
  input: {
    width: 390,
    height: 60,
    backgroundColor: colors.color4,
    borderRadius: 10,
    padding: 10,
  },
  caloriescard: {
    width: 350,
    height: "fit-content",
    display: "flex",
    alignItems: "baseline",
    justifyContent: "center",
    flexDirection: "column",
    gap: 20,
    padding: 15,
    backgroundColor: colors.color4,
    borderRadius: 10,
  },
});
