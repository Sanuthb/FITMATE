import {
  getDoc,
  getDocs,
  doc,
  onSnapshot,
  collection,
} from "firebase/firestore";
import { firebaseauth, firestoredb } from "../../firebase";
import { useEffect, useState } from "react";

const userdetails = () => {
  const [useremail, setuseremail] = useState("");
  const [user_name, setuser_name] = useState("");
  const [login_token, setlogin_token] = useState("False");

  const [getgender, setgetgender] = useState("");
  const [getuserage, setgetuserage] = useState();
  const [getuserheight, setgetuserheight] = useState();
  const [getuserweight, setgetuserweight] = useState();
  const [getfitnessgoal, setgetfitnessgoal] = useState("");
  const [getworkout_type, setgetworkout_type] = useState("");
  const [getgoalweight, setgetgoalweight] = useState("");
  const [getmeal, setgetmeal] = useState("");
  const [getworkoutperweek, setgetworkoutperweek] = useState();
  const [getpaymentid, setpaymentid] = useState("");

  const [numberuser, setnumberuser] = useState(0);
  const [usersno, setusersno] = useState([]);
  const [userspayment, setuserspayment] = useState([]);
  const [userscontact, setuserscontact] = useState([]);

  const user = firebaseauth.currentUser.uid;
  useEffect(() => {
    getDoc(doc(firestoredb, "users", user)).then((userdoc) => {
      if (userdoc.exists()) {
        const usename = userdoc.get("name");
        const useremail = userdoc.get("email");
        const logintoken = userdoc.get("login_token");
        setuseremail(useremail);
        setuser_name(usename);
        setlogin_token(logintoken);
      } else {
        setuser_name("user");
        setuseremail("user@gmail.com");
      }
    });
  }, []);
  useEffect(() => {
    const unsubscribe = onSnapshot(
      doc(firestoredb, "User_Fitness_Details", user),
      (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.data();
          setgetgender(data.gender || "");
          setgetuserage(data.age || 0);
          setgetuserheight(data.height || 0);
          setgetuserweight(data.weight || 0);
          setgetfitnessgoal(data.fitnessgoal || "");
          setgetworkout_type(data.workout_type || "");
          setgetgoalweight(data.goalweight || 0);
          setgetmeal(data.meal || 0);
          setgetworkoutperweek(data.workoutperweek || 0);
        } else {
          setgetgender("");
          setgetuserage(0);
          setgetuserheight(0);
          setgetuserweight(0);
          setgetfitnessgoal("");
          setgetworkout_type("");
          setgetgoalweight(0);
          setgetmeal(0);
          setgetworkoutperweek(0);
        }
      }
    );

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      doc(firestoredb, "paymentData", user),
      (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.data();
          setpaymentid(data.paymentId || "");
        }
      }
    );
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(firestoredb, "users"),
      (querySnapshot) => {
        setnumberuser(querySnapshot.size);
      },
      (error) => {
        console.error("Error fetching user count: ", error);
      }
    );

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(firestoredb, "users"),
      (querySnapshot) => {
        const userList = [];
        querySnapshot.forEach((doc) => {
          const userData = doc.data();
          const userWithId = { id: doc.id, ...userData };
          userList.push(userWithId);
        });
        setusersno(userList);
      },
      (error) => {
        console.error("Error fetching users: ", error);
      }
    );

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(firestoredb, "paymentData"),
      (querySnapshot) => {
        const userpayList = [];
        querySnapshot.forEach((doc) => {
          const userData = doc.data();
          const userWithId = { id: doc.id, ...userData };
          userpayList.push(userWithId);
        });
        setuserspayment(userpayList);
      },
      (error) => {
        console.error("Error fetching users: ", error);
      }
    );

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(firestoredb, "Contact"),
      (querySnapshot) => {
        const usercontactList = [];
        querySnapshot.forEach((doc) => {
          const userData = doc.data();
          const userWithId = { id: doc.id, ...userData };
          usercontactList.push(userWithId);
        });
        setuserscontact(usercontactList);
      },
      (error) => {
        console.error("Error fetching users: ", error);
      }
    );

    return () => unsubscribe();
  }, []);
  return {
    user_name,
    login_token,
    useremail,
    getgender,
    getuserage,
    getuserheight,
    getuserweight,
    getfitnessgoal,
    getworkout_type,
    getgoalweight,
    getmeal,
    getworkoutperweek,
    getpaymentid,
    numberuser,
    usersno,
    userspayment,
    userscontact,
  };
};

export default userdetails;
