import React, { useState } from "react";
import { ScrollView } from "react-native";
import Text from "@kaloraat/react-native-text";
import UserInput from "../components/auth/UserInput";
import SubmitButton from "../components/auth/SubmitButton";
import CircleLogo from "../components/auth/LogoCircle";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import axios from "axios";
import { API } from "../config";

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [loading, setLoading] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    if (!email || !password) {
      alert("All field should not be empty");
      setLoading(false);
      return;
    }
    // else {
    //   alert("Loging....");
    //   setLoading(true);
    //   return;
    // }
    // console.log("SIGNUP REQUEST =>", email, password);
    try {
      const { data } = await axios.post(`${API}/signin`, {
        email,
        password,
      });
      console.log("Signin successfull =>", data);
      alert("Signin successfull");
      setLoading(false);
    } catch (err) {
      alert("Signin fail");
      console.log(err);
      setLoading(false);
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
        title="Sign Up"
        handleSubmit={handleSubmit}
        loading={loading}
      />
      <Text center small style={{ marginTop: 70 }}>
        Do not have account?{" "}
        <Text onPress={() => navigation.navigate("SignUp")} color="blue">
          Sign Up
        </Text>
      </Text>
      <Text
        small
        center
        color="#FF2222"
        style={{ marginTop: 10 }}
        onPress={() => navigation.navigate("Test")}
      >
        Forget Password
      </Text>
    </KeyboardAwareScrollView>
  );
};

export default SignIn;
