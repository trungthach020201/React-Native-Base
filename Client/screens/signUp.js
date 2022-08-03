import React, { useState } from "react";
import { ScrollView } from "react-native";
import Text from "@kaloraat/react-native-text";
import UserInput from "../components/auth/UserInput";
import SubmitButton from "../components/auth/SubmitButton";
import CircleLogo from "../components/auth/LogoCircle";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import axios from "axios";
import { API } from "../config";

const SignUp = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [confirmpass, setConfirm] = useState("");
  const [loading, setLoading] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    let reg = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    if (!name || !email || !password || !confirmpass) {
      alert("All field should not be empty");
      setLoading(false);
      return;
    }
    if (password !== confirmpass) {
      alert("Password and Confirm password should match");
      setLoading(false);
      return;
    }
    // if (email !== reg) {
    //   alert("This is not an email");
    //   setLoading(false);
    //   return;
    // }
    console.log("SIGNUP REQUEST =>", name, email, password, confirmpass);
    try {
      const { data } = await axios.post(`${API}/signUp`, {
        name,
        email,
        password,
        confirmpass,
      });
      console.log("SignUp SUccess =>", data);
      alert("SignUp successfull");
      setLoading(false);
    } catch (err) {
      alert("Sign Up fail");
      console.log(err);
      setLoading(false);
    }
  };
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flex: 1, justifyContent: "center" }}
    >
      <CircleLogo />
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
      <Text center small style={{ marginTop: 30 }}>
        Already Joined In?{" "}
        <Text onPress={() => navigation.navigate("SignIn")} color="#FF2222">
          Sign In
        </Text>
      </Text>
    </KeyboardAwareScrollView>
  );
};

export default SignUp;
