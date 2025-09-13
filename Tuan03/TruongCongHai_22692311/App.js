import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from "./screens/SignUpScreen"
import SignUpScreen2 from './screens/SignUpScreen2'
import ForgetPassword from "./screens/ForgetPassword"
import VerifyCode from "./screens/VerifyCodeScreen"
import Register from "./screens/Register"
import Login1 from "./screens/Login1"
import Login2 from "./screens/Login2"
import Login3 from "./screens/Login3"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="SignUp2" component={SignUpScreen2} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="VerifyCode" component={VerifyCode} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login1" component={Login1} />
        <Stack.Screen name="Login2" component={Login2} />
        <Stack.Screen name="Login3" component={Login3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
