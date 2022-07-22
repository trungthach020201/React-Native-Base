import React from "react";
import { TouchableOpacity } from "react-native";
import Text from "@kaloraat/react-native-text";

const SubmitButton = () => (
  <TouchableOpacity
    style={{
      backgroundColor: "#FF9900",
      height: 40,
      justifyContent: "center",
      borderRadius: 24,
      marginHorizontal: 20,
    }}
  >
    <Text center bold medium>
      Submit
    </Text>
  </TouchableOpacity>
);

export default SubmitButton;
