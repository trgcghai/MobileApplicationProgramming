import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';

export default function SignUpScreen({ navigation }): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.circle} />
      </View>

      <View style={styles.headerBox}>
        <Text style={styles.headerText}>
          GROW<Text style={{ fontWeight: 'bold' }}>N YOUR BUSINESS</Text>
        </Text>
      </View>

      <Text style={styles.subText}>
        We will help you to grow your business using{'('}n{')'}online server
      </Text>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={[styles.button, styles.loginBtn]}>
          <Text style={styles.buttonText}  onPress={() => navigation.navigate("Login1")}>LOGIN 1</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.button, styles.signUpBtn]}>
          <Text style={styles.buttonText} onPress={() => navigation.navigate("Register")}>Register</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.headerBox}>
        <Text style={styles.headerText}>
          How we work ?
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00CFFF', // Bright blue
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logoContainer: {
    borderWidth: 1,
    borderColor: 'magenta',
    padding: 5,
    marginBottom: 20,
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 10,
    borderColor: 'black',
    backgroundColor: '#00CFFF',
  },
  headerBox: {
    borderWidth: 1,
    borderColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 15,
  },
  headerText: {
    fontSize: 18,
    textAlign: 'center',
    color: 'black',
  },
  subText: {
    textAlign: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 30,
    gap: 20,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 4,
    borderWidth: '1',
    borderColor: 'black',
  },
  loginBtn: {
    backgroundColor: 'orange',
  },
  signUpBtn: {
    backgroundColor: 'yellow',
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 16,
  },
});