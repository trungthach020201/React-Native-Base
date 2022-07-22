import React from "react";
import { View, TextInput } from "react-native";
import Text from "@kaloraat/react-native-text";

const UserInput = (pros) => {
  return (
    <View style={{ marginHorizontal: 24 }}>
      <Text semi>{pros.name}</Text>
      <TextInput
        style={{
          borderBottomWidth: 0.5,
          height: 48,
          borderBottomColor: "#8e93a1",
          marginBottom: 30,
        }}
      />
    </View>
  );
};

export default UserInput;
