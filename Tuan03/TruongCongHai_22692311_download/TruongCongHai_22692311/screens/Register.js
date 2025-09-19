import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function RegisterScreen({ navigation }) {
  const [gender, setGender] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>REGISTER</Text>

      <TextInput style={styles.input} placeholder="Name" />
      <TextInput style={styles.input} placeholder="Phone" keyboardType="phone-pad" />
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

      <TextInput style={styles.input} placeholder="Birthday" />

      <View style={styles.genderContainer}>
        <TouchableOpacity
          style={styles.radio}
          onPress={() => setGender("male")}
        >
          <Text style={styles.radioCircle}>{gender === "male" ? "●" : "○"}</Text>
          <Text style={styles.radioLabel}>Male</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.radio}
          onPress={() => setGender("female")}
        >
          <Text style={styles.radioCircle}>{gender === "female" ? "●" : "○"}</Text>
          <Text style={styles.radioLabel}>Female</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} onPress={() => navigation.navigate("Login2")}>REGISTER</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>When you agree to terms and conditions</Text>
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
    marginBottom: 15,
    width: "100%",
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 10,
  },
  eye: {
    fontSize: 18,
    marginLeft: 10,
  },
  genderContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "100%",
    marginBottom: 20,
  },
  radio: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 30,
  },
  radioCircle: {
    fontSize: 18,
    marginRight: 6,
  },
  radioLabel: {
    fontSize: 16,
  },
  button: {
    backgroundColor: "#C74C3C",
    paddingVertical: 14,
    paddingHorizontal: 40,
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
  footer: {
    fontSize: 12,
    color: "#333",
    textAlign: "center",
  },
});
