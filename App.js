import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Welcome from "./components/Welcome.js";
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

export default function App() {
  return <SignUp />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
