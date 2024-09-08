import { Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { firestoredb } from "../../firebase";

const AdminFetch = (userId) => {
  const [userfitnessdetails, setuserfitnessdetails] = useState();
  useEffect(() => {
    const q = query(
      collection(firestoredb, "User_Fitness_Details"),
      where("userId", "==", userId)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const details = [];
      snapshot.forEach((doc) => {
        details.push({ id: doc.id, ...doc.data() });
      });
      setuserfitnessdetails(details);
    });

    return () => unsubscribe();
  }, [userId]);

  return {
    userfitnessdetails,
  };
};

export default AdminFetch;
