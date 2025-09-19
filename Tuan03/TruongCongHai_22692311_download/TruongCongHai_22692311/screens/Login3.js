import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/eye.png")}
        style={styles.logo}
      />

      <View style={styles.inputContainer}>
        <Icon name="user-o" size={20} color="#3A5FCD" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Please input user name"
          placeholderTextColor="#999"
          value={username}
          onChangeText={setUsername}
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#3A5FCD" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Please input password"
          placeholderTextColor="#999"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      <View style={styles.row}>
        <TouchableOpacity>
          <Text style={styles.linkText} onPress={() => navigation.navigate("Register")}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.linkText} onPress={() => navigation.navigate("ForgetPassword")}>Forgot Password</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.dividerContainer}>
        <View style={styles.line} />
        <Text style={styles.otherText}>Other Login Methods</Text>
        <View style={styles.line} />
      </View>

      <View style={styles.socialRow}>
        <TouchableOpacity style={[styles.socialBtn, { backgroundColor: "#00BFFF" }]}>
          <Icon name="user-plus" size={28} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialBtn, { backgroundColor: "#FFA500" }]}>
          <Icon name="wifi" size={28} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialBtn, { backgroundColor: "#3b5998" }]}>
          <Icon name="facebook" size={28} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 40,
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#ccc",
    marginBottom: 20,
    width: "100%",
    paddingVertical: 5,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  loginBtn: {
    backgroundColor: "#1E90FF",
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: "center",
    width: "100%",
    marginTop: 10,
  },
  loginText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 15,
    paddingHorizontal: 10,
  },
  linkText: {
    color: "#000",
    fontSize: 14,
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
    width: "100%",
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#1E90FF",
  },
  otherText: {
    marginHorizontal: 10,
    color: "#1E90FF",
  },
  socialRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 10,
  },
  socialBtn: {
    width: 60,
    height: 60,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
});
