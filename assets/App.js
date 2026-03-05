import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "react-native";

import Login from "./src/Login";
import Home from "./src/Home";
import Onboarding from "./src/Onboarding";
import Conteudo from "./src/Conteudo";
import MentorIA from "./src/MentorIA";

const Stack = createNativeStackNavigator();

const AppTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: "#060D1F",
  },
};

export default function App() {
  return (
    <SafeAreaProvider style={{ flex: 1, backgroundColor: "#060D1F" }}>
      <StatusBar barStyle="light-content" backgroundColor="#060D1F" />
      <NavigationContainer theme={AppTheme}>
        <Stack.Navigator
          initialRouteName="Onboarding"
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: "#060D1F" },
          }}
        >
          <Stack.Screen name="Onboarding" component={Onboarding} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Conteudo" component={Conteudo} />
          <Stack.Screen name="MentorIA" component={MentorIA} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}