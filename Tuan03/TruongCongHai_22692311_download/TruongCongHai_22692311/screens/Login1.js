import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function LoginScreen({ navigation }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGIN</Text>

      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Icon
            name={showPassword ? "eye-slash" : "eye"}
            size={20}
            color="black"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} onPress={() => navigation.navigate("Login3")}>LOGIN 3</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>When you agree to terms and conditions</Text>

      <TouchableOpacity>
        <Text style={styles.forgot} onPress={() => navigation.navigate("ForgetPassword")}>Forgot your password?</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Or login with</Text>

      <View style={styles.socialContainer}>
        <TouchableOpacity style={[styles.socialButton, { backgroundColor: "#3b5998" }]}>
          <Text style={styles.socialText}>f</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.socialButton, { backgroundColor: "#2196F3" }]}>
          <Text style={styles.socialText}>Z</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.socialButton, { borderWidth: 1, borderColor: "#ccc" }]}>
          <Text style={[styles.socialText, { color: "black" }]}>G</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E0F2E9",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#0D2B1D",
  },
  input: {
    width: "100%",
    backgroundColor: "#C8E6C9",
    borderRadius: 5,
    padding: 12,
    marginBottom: 15,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#C8E6C9",
    borderRadius: 5,
    paddingHorizontal: 12,
    marginBottom: 20,
    width: "100%",
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 10,
  },
  button: {
    backgroundColor: "#C74C3C",
    paddingVertical: 14,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
    marginBottom: 15,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  footerText: {
    fontSize: 12,
    color: "#333",
    marginBottom: 8,
  },
  forgot: {
    fontSize: 13,
    color: "blue",
    textDecorationLine: "underline",
    marginBottom: 15,
  },
  orText: {
    fontSize: 14,
    marginBottom: 10,
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: 300,
  },
  socialButton: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 12,
    marginHorizontal: 5,
    borderRadius: 3,
  },
  socialText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
