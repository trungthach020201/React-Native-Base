import React from "react";
import { TouchableOpacity } from "react-native";
import Text from "@kaloraat/react-native-text";

const SubmitButton = ({ title, handleSubmit, loading }) => (
  <TouchableOpacity
    onPress={handleSubmit}
    style={{
      backgroundColor: "#FF9900",
      height: 40,
      justifyContent: "center",
      borderRadius: 24,
      marginHorizontal: 20,
    }}
  >
    <Text center bold medium>
      {loading ? "Waiting ...." : title}
    </Text>
  </TouchableOpacity>
);

export default SubmitButton;
