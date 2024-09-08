import { useEffect, useState } from "react";
import userdetails from "./userdetails";
import { doc,onSnapshot} from "firebase/firestore";
import { firebaseauth,firestoredb } from "../../firebase";

export default function Caloriesfinder() {
  const [result, setresult] = useState(0);
  const [userproteinGrams, setproteinGrams] = useState(0);
  const [userfatGrams, setfatGrams] = useState(0);
  const [usercarbGrams, setcarbGrams] = useState(0);
  const user=firebaseauth.currentUser.uid

  const {
    getgender,
    getuserage,
    getuserheight,
    getuserweight,
    getfitnessgoal,
    getworkout_type,
    getgoalweight,
    getmeal,
    getworkoutperweek,
  } = userdetails();

  function calculateDailyCalorieIntake(
    currentWeight,
    goalWeight,
    height,
    age,
    proteinPercent,
    fatPercent,
    carbPercent
  ) {
    const BMR = Math.abs(
      10 * currentWeight +
        6.25 * height -
        5 * age +
        (getgender === "male" ? 5 : -161)
    );
    const calorieSurplus = Math.abs(6.25 * goalWeight - BMR);
    const dailyCalorieIntake = BMR + calorieSurplus;
    setresult(dailyCalorieIntake);
    const totalCalories = dailyCalorieIntake;
    const proteinGrams = Math.floor(
      ((proteinPercent / 100) * totalCalories) / 4
    );
    const fatGrams = Math.floor(((fatPercent / 100) * totalCalories) / 9);
    const carbGrams = Math.floor(((carbPercent / 100) * totalCalories) / 4);
    setproteinGrams(proteinGrams);
    setfatGrams(fatGrams);
    setcarbGrams(carbGrams);
  }

  const proteinPercent = 25;
  const fatPercent = 30;
  const carbPercent = 45;

  const currentWeight = getuserweight;
  const goalWeight = getgoalweight;
  const height = getuserheight;
  const age = getuserage;

  useEffect(() => {
    const unsubscribe = onSnapshot(
      doc(firestoredb, "User_Fitness_Details", user),
      (snapshot) => {
        if (snapshot.exists()) {
          calculateDailyCalorieIntake(
            currentWeight,
            goalWeight,
            height,
            age,
            proteinPercent,
            fatPercent,
            carbPercent
          );
        }
      }
    );
    return () => unsubscribe();
  }, [currentWeight, goalWeight, height, age]); 

  useEffect(() => {
    calculateDailyCalorieIntake(
      currentWeight,
      goalWeight,
      height,
      age,
      proteinPercent,
      fatPercent,
      carbPercent
    );
  });
  return {
    result,
    userproteinGrams,
    userfatGrams,
    usercarbGrams,
    calculateDailyCalorieIntake,
  };
}
