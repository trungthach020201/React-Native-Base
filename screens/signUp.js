import React, { useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import Text from "@kaloraat/react-native-text";
import UserInput from "../components/auth/UserInput";
import SubmitButton from "../components/auth/SubmitButton";
// import axios from "axios";
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [confirmpass, setConfirm] = useState("");
  const [loading, setLoading] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!name || !email || !password || !confirmpass) {
      alert("All field should not be empty");
      setLoading(false);
      return;
    }
    if (password !== confirmpass) {
      alert("Password and Confirm password should match");
    }
    if (email !== reg) {
      alert("This is not an email");
    }
    try {
      const { data } = {};
    } catch (err) {
      console.log(err);
    }
  };
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
      <UserInput
        name="CONFIRM PASSWORD"
        value={confirmpass}
        setValue={setConfirm}
        secureTextEntry={true}
        autoCompleteType="password"
      />

      <SubmitButton
        title="Sign Up"
        handleSubmit={handleSubmit}
        loading={loading}
      />
    </View>
  );
};

export default SignUp;
