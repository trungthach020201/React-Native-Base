import { View, Text, TouchableOpacity, Alert } from "react-native";

const Test = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity
        style={{
          backgroundColor: "orange",
          width: 200,
          height: 40,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => alertMessgae()}
      >
        <Text>Test Alert</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: "green",
          width: 200,
          height: 40,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 30,
        }}
        onPress={() => navigation.navigate("SignIn")}
        color="blue"
      >
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const alertMessgae = () => {
  Alert.alert("Hello");
};
export default Test;
