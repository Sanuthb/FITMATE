import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { LineChart } from "react-native-chart-kit"; 
import colors from "../../Utils/colors";
import { useNavigation } from "@react-navigation/native";
import { firebaseauth, firestoredb } from "../../../firebase";
import { doc,onSnapshot } from "firebase/firestore";

const TrackWeight = () => {
  const navigation = useNavigation();
  const [graphweight, setgraphweight] = useState(0);
  const [graphfat, setfat] = useState(0);
  const user = firebaseauth.currentUser.uid;
  useEffect(() => {
    const unsubscribe = onSnapshot(doc(firestoredb, "trackweightData", user), (snapshot) => {
      if (snapshot.exists()) {
        const weight = snapshot.data().weight;
        const fat = snapshot.data().fat;
        setgraphweight(weight);
        setfat(fat);
      } else {
        console.log("Document does not exist");
      }
    });
    return () => unsubscribe();
  }, []);
  
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={{ fontSize: 20, color: colors.PRIMARY }}>
          Track Weight
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Trackweight");
          }}
        >
          <Text style={{ fontSize: 14, color: colors.PRIMARY }}>
            Add weight
          </Text>
        </TouchableOpacity>
      </View>
      <LineChart
        data={{
          labels: graphfat ? graphfat : [0],
          datasets: [
            {
              data: graphweight ? graphweight : [0],
            },
          ],
        }}
        width={Dimensions.get("window").width - 30}
        height={220}
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
    </View>
  );
};

export default TrackWeight;

const styles = StyleSheet.create({
  container: {
    width: "95%",
    height: 300,
    borderRadius: 20,
    backgroundColor: colors.color4,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    gap: 10,
  },
  box: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
