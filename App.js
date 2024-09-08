import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./Apps/Screens/LoginScreen";
import SigninScreen from "./Apps/Screens/SigninScreen";
import HomeScreen from "./Apps/Screens/HomeScreen";
import Onboard from "./Apps/Screens/Onboard";
import Menu from "./Apps/Screens/MenuItems";
import Splashscreen from "./Apps/Screens/Splashscreen";
import UserAuth from "./Apps/UserAuth/UserAuth";
import Track_weight from "./Apps/Screens/Track_weight";
import Meals from "./Apps/Screens/Meals";
import Termsandcondition from "./Apps/Screens/Termsandcondition";
import PrivacyPolicy from "./Apps/Screens/PrivacyPolicy";
import MainHomeScreen from "./Apps/Screens/MainHomeScreen";
import PaymentScreen from "./Apps/Screens/PaymentScreen";
import Getuserdetails from "./Apps/components/menu/Getuserdetails";
import Searchcalories from "./Apps/Screens/Searchcalories";
import Workoutlist from "./Apps/Screens/Workoutlist";
import Adminpage from "./Apps/Screens/Admin/Adminpage";
import Admin_fetch_users from "./Apps/Screens/Admin/Admin_fetch_users";
import Admin_fetch_payment from "./Apps/Screens/Admin/Admin_fetch_payment";
import Admin_fetch_message from "./Apps/Screens/Admin/Admin_fetch_message";
import Contactus from "./Apps/Screens/Contactus";

const stack = createNativeStackNavigator();

export default function App() {
  const { fitmateuser } = UserAuth();

  if (!fitmateuser) {
    return (
      <NavigationContainer>
        <stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <stack.Screen name="Splash" component={Splashscreen} />
          <stack.Screen name="Onboard" component={Onboard} />
          <stack.Screen name="Signin" component={SigninScreen} />
          <stack.Screen name="Login" component={LoginScreen} />
        </stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    );
  }

  if (fitmateuser.email === "sanuthadmin@gmail.com") {
    return (
      <NavigationContainer>
        <stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <stack.Screen name="Adminpage" component={Adminpage} />
          <stack.Screen name="Adminuserpage" component={Admin_fetch_users} />
          <stack.Screen
            name="Adminuserpayment"
            component={Admin_fetch_payment}
          />
          <stack.Screen
            name="Adminusermessage"
            component={Admin_fetch_message}
          />
        </stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    );
  }
  return (
    <NavigationContainer>
      <stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <stack.Screen name="FitmateScreen" component={MainHomeScreen} />
        <stack.Screen name="PaymentScreen" component={PaymentScreen} />
        <stack.Screen name="Home" component={HomeScreen} />
        <stack.Screen name="Menu" component={Menu} />
        <stack.Screen name="Getuserdetails" component={Getuserdetails} />
        <stack.Screen name="Searchcalories" component={Searchcalories} />
        <stack.Screen name="Workoutlist" component={Workoutlist} />
        <stack.Screen name="Trackweight" component={Track_weight} />
        <stack.Screen name="Meals" component={Meals} />
        <stack.Screen name="Contactus" component={Contactus} />
        <stack.Screen name="Termsandcondition" component={Termsandcondition} />
        <stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      </stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
