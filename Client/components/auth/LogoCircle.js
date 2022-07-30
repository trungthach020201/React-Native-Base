import react from "react";
import { View, Image, StyleSheet } from "react-native";

const CircleLogo = () => (
  <View
    style={{
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Image source={require("../../assets/coffee.png")} style={styles.image} />
  </View>
);

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 100,
    // marginVertical: 20,
    marginBottom: 50,
  },
});
export default CircleLogo;
