import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./src/Login";
import Home from "./src/Home";
import Onboarding from "./src/Onboarding";
import Conteudo from "./src/Conteudo";
import MentorIA from "./src/MentorIA.js";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Conteudo" component={Conteudo} />
        <Stack.Screen name="MentorIA" component={MentorIA} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}