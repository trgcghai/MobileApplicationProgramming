import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

export default function ForgetPasswordScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
         source={{ uri: "https://img.icons8.com/ios-filled/100/000000/lock--v1.png" }}
        style={styles.icon}
        resizeMode="contain"
      />

      <Text style={styles.title}>FORGET{"\n"}PASSWORD</Text>

      <Text style={styles.subtitle}>
        Provide your account’s email for which you{"\n"}want to reset your
        password
      </Text>

      <View style={styles.inputContainer}>
        <Text style={styles.inputIcon}>📧</Text>
        <TextInput
          placeholder="Email"
          style={styles.input}
          keyboardType="email-address"
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} onPress={() => navigation.navigate('VerifyCode')}>NEXT</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E0F7FA",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  icon: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
    color: "black",
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "#eee",
    paddingHorizontal: 10,
    marginBottom: 30,
    width: "100%",
    maxWidth: 320,
  },
  inputIcon: {
    fontSize: 18,
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 40,
  },
  button: {
    backgroundColor: "gold",
    paddingVertical: 14,
    paddingHorizontal: 60,
    borderRadius: 5,
  },
  buttonText: {
    fontWeight: "bold",
    color: "black",
    fontSize: 16,
  },
});
