import React, { useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import Text from "@kaloraat/react-native-text";
import UserInput from "../components/auth/UserInput";
import SubmitButton from "../components/auth/SubmitButton";
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [loading, setLoading] = useState("");
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text title center color="#ff2222">
        Sign up
      </Text>
      <UserInput
        name="NAME"
        value={name}
        setValue={setName}
        autoCapitalize="word"
        autoCorrect={false}
      />
      <UserInput
        name="EMAIL"
        value={email}
        setValue={setEmail}
        autoCompleteType="email"
        keyboardType="email-address"
      />
      <UserInput
        name="PASSWORD"
        value={password}
        setValue={setPass}
        secureTextEntry={true}
        autoCompleteType="password"
      />
      <SubmitButton />
      <Text>{JSON.stringify({ name, email, password }, null, 4)}</Text>
    </View>
  );
};

export default SignUp;
