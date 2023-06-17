import Navbar from "./components/Navbar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import HomeScreen from "./screens/HomeScreen";
import NewTaskScreen from "./screens/NewTaskScreen";
import Login from "./screens/Login";
import { useState } from "react";
import { app } from "./firebase";

const Stack = createNativeStackNavigator();

export default function App() {
  // const [loggedIn, setLoggedIn] = useState(false);
  // const onAuthStateChanged = app.auth().onAuthStateChanged();
  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     setLoggedIn(true);
  //   } else {
  //     setLoggedIn(false);
  //   }
  // });

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Newtask" component={NewTaskScreen} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
      <Navbar />
    </NavigationContainer>
  );
}
