import React from "react";
import { View, TextInput } from "react-native";
import Text from "@kaloraat/react-native-text";
import UserInput from "../components/auth/UserInput";
const SignUp = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text title center color="#ff2222">
        Sign up
      </Text>
      <UserInput name="NAME" />
      <UserInput name="EMAIL" />
      <UserInput name="PASSWORD" />
    </View>
  );
};

export default SignUp;
