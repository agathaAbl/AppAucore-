import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

export default function LoginCard({ onClose }) {
  const [email, setEmail] = useState("");

  return (
    <View
      style={{
        backgroundColor: "#0C1A30",
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        padding: 24,
      }}
    >
      <Text
        style={{
          color: "#fff",
          fontSize: 20,
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: 10,
        }}
      >
        Login com Google
      </Text>

      <Text
        style={{
          color: "#94A3B8",
          textAlign: "center",
          marginBottom: 20,
        }}
      >
        Digite seu e-mail
      </Text>

      <TextInput
        placeholder="E-mail"
        placeholderTextColor="#64748B"
        value={email}
        onChangeText={setEmail}
        style={{
          borderWidth: 1,
          borderColor: "#334155",
          borderRadius: 10,
          padding: 16,
          color: "#fff",
          marginBottom: 20,
        }}
      />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity onPress={onClose}>
          <Text style={{ color: "#94A3B8" }}>Cancelar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: "#4285F4",
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 10,
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "bold" }}>
            Continuar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}