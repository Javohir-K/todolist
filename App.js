import { View } from "react-native";
import TitleBar from "./components/TitleBar";
import TaskList from "./components/TaskList";
import Navbar from "./components/Navbar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import HomeScreen from "./screens/HomeScreen";
import NewTaskScreen from "./screens/NewTaskScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Newtask" component={NewTaskScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
