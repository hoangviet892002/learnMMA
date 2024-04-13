import * as React from "react";
import { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, TextInput } from "react-native";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/action/UserAction";
import { AuthService } from "../services";

const LoginScreen = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleLogin = async () => {
    const response = await AuthService.Login(userName, password);
    if (response !== null) {
      dispatch(loginSuccess(response));
    } else {
      alert("Login fail");
    }
  };

  return (
    <>
      <ScrollView style={styles.container}>
        <Text style={styles.headerText}>Welcome to Litle Lemon</Text>
        <Text style={styles.regularText}>Login to continue</Text>
        <TextInput
          style={styles.inputText}
          placeholder="User Name"
          value={userName}
          keyboardType="numeric"
          onChangeText={setUserName}
        ></TextInput>
        <TextInput
          style={styles.inputText}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        ></TextInput>
        <Button title="Login" onPress={handleLogin} />
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: "#edefee",
    textAlign: "center",
  },
  regularText: {
    fontSize: 34,
    padding: 20,
    marginVertical: 8,
    color: "#edefee",
    textAlign: "center",
  },
  inputText: {
    backgroundColor: "white",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
});
export default LoginScreen;
