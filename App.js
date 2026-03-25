import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./screens/Login";
import Home from "./screens/Home";
import Onboarding from "./screens/Onboarding";
import Conteudo from "./screens/Conteudo";
import MentorIA from "./screens/MentorIA";
import ForgotPassword from "./screens/ForgotPassword";
import LoginComGoogle from "./screens/LoginComGoogle";
import LoginApple from "./screens/LoginApple";
import LoginMicrosoft from "./screens/LoginMicrosoft";
import CriarConta from "./screens/Criarconta";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Conteudo" component={Conteudo} />
        <Stack.Screen name="MentorIA" component={MentorIA} />
        <Stack.Screen name="ForgotPassword"component={ForgotPassword} />
        <Stack.Screen name="LoginComGoogle" component={LoginComGoogle} />
        <Stack.Screen name="LoginApple" component={LoginApple} />
        <Stack.Screen name="LoginMicrosoft" component={LoginMicrosoft} />
        <Stack.Screen name="CriarConta" component={CriarConta} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}