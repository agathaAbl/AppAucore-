import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Onboarding from "./src/Onboarding";
import Login from "./src/Login";
import Home from "./src/Home";
import Conteudo from "./src/Conteudo";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Conteudo" component={Conteudo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}