import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./components/Welcome.js";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/signUp";

// export default function App() {
//   const names = ["Trung", "Thach", "Ngoc"];
//   return (
//     <View style={styles.container}>
//       <StatusBar style="dark" />
//       {names.map((name) => (
//         <Welcome name={name} />
//       ))}
//     </View>
//   );
// }
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignIn"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
