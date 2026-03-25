import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Dimensions,
} from "react-native";
import colors from "./colors"; 

const { width, height } = Dimensions.get("window");

export default function LoginMicrosoft({ navigation }) {
  const [email, setEmail] = useState("");

  const data = [
    { id: "1", type: "title" },
    { id: "2", type: "subtitle" },
    { id: "3", type: "input" },
    { id: "4", type: "button" },
  ];

  const renderItem = ({ item }) => {
    switch (item.type) {
      case "title":
        return <Text style={styles.title}>Login com Microsoft</Text>;
      case "subtitle":
        return <Text style={styles.subtitle}>Digite aqui o seu e-mail Microsoft</Text>;
      case "input":
        return (
          <TextInput
            placeholder="E-mail Microsoft"
            placeholderTextColor={colors.textSecondary}
            value={email}
            onChangeText={setEmail}
            style={styles.input}
          />
        );
      case "button":
        return (
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Continuar</Text>
          </TouchableOpacity>
        );
      default:
        return null;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Fundo com */}
      <View style={StyleSheet.absoluteFill} pointerEvents="none">
        <View style={{ ...StyleSheet.absoluteFillObject, backgroundColor: colors.background }} />
        <View style={{
          position: "absolute",
          width: width * 1.2,
          height: width * 1.2,
          borderRadius: width * 0.6,
          backgroundColor: "#0A2A6E",
          top: height * 0.15,
          left: -width * 0.1,
          opacity: 0.45,
        }} />
        <View style={{
          position: "absolute",
          width: width * 0.9,
          height: width * 0.9,
          borderRadius: width * 0.45,
          backgroundColor: "#0369A1",
          bottom: -width * 0.3,
          left: width * 0.05,
          opacity: 0.18,
        }} />
        <View style={{
          position: "absolute",
          width: 180,
          height: 180,
          borderRadius: 90,
          backgroundColor: colors.accent,
          top: height * 0.08,
          right: -40,
          opacity: 0.08,
        }} />
        <View style={{
          position: "absolute",
          width: 120,
          height: 120,
          borderRadius: 60,
          backgroundColor: colors.textSecondary,
          bottom: height * 0.1,
          left: -30,
          opacity: 0.07,
        }} />
      </View>

      {/* Seta  */}
      <TouchableOpacity style={styles.arrow} onPress={() => navigation.goBack()}>
        <Text style={styles.arrowText}>{"<"}</Text>
      </TouchableOpacity>

      {/* Conteúdo da tela */}
      <View style={styles.card}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  arrow: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 10,
    padding: 8,
  },
  arrowText: {
    color: colors.textPrimary,
    fontSize: 34, 
    fontWeight: "bold",
  },
  title: {
    color: colors.textPrimary,
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    color: colors.textSecondary,
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    padding: 16,
    color: colors.textPrimary,
    marginBottom: 20,
    backgroundColor: colors.card,
  },
  button: {
    backgroundColor: colors.accent,
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
    borderWidth: 2,
    borderColor: colors.accent, 
  },
  buttonText: {
    color: colors.textPrimary,
    fontWeight: "bold",
  },
  card: {
    width: "90%",
    backgroundColor: "rgba(12, 26, 48, 0.95)",
    borderRadius: 26,
    padding: 24,
    alignSelf: "center",
    marginTop: height * 0.2,
    borderColor: colors.accent,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 10,
  },
});
