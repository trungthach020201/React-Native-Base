import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Welcome from "./components/Welcome.js";
import SignUp from "./screens/signUp";
import SignIn from "./screens/SignIn";

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

export default function App() {
  // return <SignUp />;
  return <SignIn />;
}
