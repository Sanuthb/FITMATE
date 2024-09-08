import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useEffect ,useState } from "react";
import colors from "../../Utils/colors";
import ProgressBar from "react-native-progress/Bar";
import { useNavigation } from "@react-navigation/native";
import { onSnapshot,doc } from "firebase/firestore";
import { firebaseauth, firestoredb } from "../../../firebase";

const Calories = ({
  result,
  userproteinGrams,
  userfatGrams,
  usercarbGrams,
}) => {
  const navigation = useNavigation();
  const user = firebaseauth.currentUser.uid
  const [calories,setcalories]=useState(0)
  const [protein,setprotein]=useState(0)
  const [fat,setfat]=useState(0)
  const [carbs,setcarbs]=useState(0)
  const [progress,setprogress]=useState(0)
  useEffect(() => {
    const unsubscribe = onSnapshot(doc(firestoredb, "addusercaloriestrack", user), (snapshot) => {
      if (snapshot.exists()) {
        const calories = snapshot.data().calories;
        const fat = snapshot.data().fat;
        const protein = snapshot.data().protein;
        const carbs = snapshot.data().carbs;
        setcalories(calories)
        setprotein(parseFloat(protein).toFixed(1));
        setcarbs(parseFloat(carbs).toFixed(1))
        setfat(parseFloat(fat).toFixed(1));
      } else {
        console.log("Document does not exist");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require("../../../assets/home_screen.webp")}
          style={styles.imageview}
        />
      </View>
      <View style={styles.box}>
        <View style={styles.textarea}>
          <Text
            style={{ color: colors.PRIMARY, fontSize: 16, fontWeight: 400 }}
          >
            My Daily Calories
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Searchcalories");
            }}
          >
            <Text
              style={{ color: colors.PRIMARY, fontSize: 13, fontWeight: 400 }}
            >
              Add Calories
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.box1}>
          <View style={styles.textarea}>
            <Text style={{ color: colors.color2 }}>Calories</Text>
            <Text style={{ color: colors.color2 }}>
              {calories}/{result}
            </Text>
          </View>
          <View style={{ marginTop: 10 }}>
            <ProgressBar
              progress={(result && calories) ? (calories/result) : 0}
              width={350}
              height={6}
              color={colors.PRIMARY}
              backgroundColor={colors.color4}
              borderWidth={0}
            />
          </View>
        </View>
        <View style={styles.container1}>
          <View style={styles.box2}>
            <View style={styles.textarea}>
              <Text style={{ color: colors.color4,fontSize:11}}>Proteins</Text>
              <Text style={{ color: colors.color4,fontSize:11}}>{protein}/{userproteinGrams}</Text>
            </View>
            <View style={{ marginTop: 10 }}>
              <ProgressBar
                progress={(protein && userproteinGrams) ? (protein/userproteinGrams) : 0}
                width={110}
                height={6}
                color={colors.color3}
                backgroundColor={colors.color4}
                borderWidth={0}
              />
            </View>
          </View>
          <View style={styles.box3}>
            <View style={styles.textarea}>
              <Text style={{ color: colors.color2,fontSize:11}}>Fats</Text>
              <Text style={{ color: colors.color2,fontSize:11 }}>{fat}/{userfatGrams}</Text>
            </View>
            <View style={{ marginTop: 10 }}>
              <ProgressBar
                progress={(userfatGrams && fat) ? (fat/userfatGrams) : 0}
                width={110}
                height={6}
                color={colors.PRIMARY}
                backgroundColor={colors.color4}
                borderWidth={0}
              />
            </View>
          </View>
          <View style={styles.box4}>
            <View style={styles.textarea}>
              <Text style={{ color: colors.color2,fontSize:11 }}>Carbs</Text>
              <Text style={{ color: colors.color2,fontSize:11 }}>{carbs}/{usercarbGrams}</Text>
            </View>
            <View style={{ marginTop: 10 }}>
              <ProgressBar
                progress={(usercarbGrams && carbs) ? (carbs/usercarbGrams) : 0}
                width={110}
                height={6}
                color={colors.PRIMARY}
                backgroundColor={colors.color4}
                borderWidth={0}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Calories;

const styles = StyleSheet.create({
  container: {
    width: "95%",
    height: 380,
    shadowColor: "red",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 3,
  },
  imageview: {
    width: "100%",
    height: 200,
    objectFit: "cover",
    borderRadius: 20,
  },
  box: {
    width: "100%",
    height: 160,
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
    padding: 10,
    borderRadius: 10,
  },
  textarea: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
  },
  box1: {
    width: "100%",
  },
  container1: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    gap: 2,
  },

  box2: {
    width: "33.3%",
    backgroundColor: colors.PRIMARY,
    borderRadius: 5,
    padding: 5,
  },
  box3: {
    width: "33.3%",
    padding: 5,
  },
  box4: {
    width: "33.3%",
    padding: 5,
  },
});
