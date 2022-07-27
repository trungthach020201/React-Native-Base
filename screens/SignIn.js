import React, { useState } from "react";
import { ScrollView } from "react-native";
import Text from "@kaloraat/react-native-text";
import UserInput from "../components/auth/UserInput";
import SubmitButton from "../components/auth/SubmitButton";
import CircleLogo from "../components/auth/LogoCircle";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
// import axios from "axios";
const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [loading, setLoading] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    let reg = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    if (!email || !password) {
      alert("All field should not be empty");
      setLoading(false);
      return;
    } else {
      alert("Loging....");
    }
    try {
      const { data } = {};
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flex: 1, marginTop: 120 }}
    >
      <CircleLogo />
      <Text title center color="#ff2222">
        Sign In
      </Text>
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

      <SubmitButton
        title="Sign In"
        handleSubmit={handleSubmit}
        loading={loading}
      />
      <Text center small style={{ marginTop: 70 }}>
        Do not have account?{" "}
        <Text onPress={() => navigation.navigate("SignUp")} color="blue">
          Sign Up
        </Text>
      </Text>
      <Text small center color="#FF2222" style={{ marginTop: 10 }}>
        Forget Password
      </Text>
    </KeyboardAwareScrollView>
  );
};

export default SignIn;
