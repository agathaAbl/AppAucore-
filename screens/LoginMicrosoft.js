import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function LoginMicrosoft() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login com Microsoft</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#0A0F1F" },
  text: { color: "#fff", fontSize: 18 }
});