import React, { useState, useEffect, useRef } from "react";
import {
  View, Text, TextInput, TouchableOpacity,
  Alert, ScrollView, Animated,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import styles from "./Criarcontastyles";

export default function CriarConta({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [focused, setFocused] = useState(null);

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 1, duration: 800, useNativeDriver: true }),
      Animated.timing(slideAnim, { toValue: 0, duration: 700, useNativeDriver: true }),
    ]).start();
  }, []);

  const handleRegister = () => {
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert("Erro", "Preencha todos os campos.");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Erro", "As senhas não coincidem.");
      return;
    }
    navigation.replace("Home");
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* VOLTAR */}
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Feather name="arrow-left" size={18} color="#ffffff" />
          <Text style={styles.backText}>Voltar</Text>
        </TouchableOpacity>

        {/* CARD */}
        <View style={styles.card}>
          <Text style={styles.title}>Criar conta</Text>
          <Text style={styles.subtitle}>Preencha os dados abaixo para se cadastrar:</Text>

          {/* NOME */}
          <View style={[styles.inputWrapper, focused === "nome" ? styles.inputFocused : styles.inputBlurred]}>
            <Feather name="user" size={18} color="#7DD3FC" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Nome Completo"
              placeholderTextColor="#ffffff"
              value={name}
              onChangeText={setName}
              onFocus={() => setFocused("nome")}
              onBlur={() => setFocused(null)}
            />
          </View>

          {/* EMAIL */}
          <View style={[styles.inputWrapper, focused === "email" ? styles.inputFocused : styles.inputBlurred]}>
            <Feather name="mail" size={18} color="#7DD3FC" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#ffffff"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              onFocus={() => setFocused("email")}
              onBlur={() => setFocused(null)}
            />
          </View>

          {/* SENHA */}
          <View style={[styles.inputWrapper, focused === "senha" ? styles.inputFocused : styles.inputBlurred]}>
            <Feather name="lock" size={18} color="#7DD3FC" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Senha"
              placeholderTextColor="#ffffff"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
              onFocus={() => setFocused("senha")}
              onBlur={() => setFocused(null)}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Feather name={showPassword ? "eye" : "eye-off"} size={18} color="#3D5A7A" />
            </TouchableOpacity>
          </View>

          {/* CONFIRMAR SENHA */}
          <View style={[styles.inputWrapper, focused === "confirmar" ? styles.inputFocused : styles.inputBlurred]}>
            <Feather name="lock" size={18} color="#7DD3FC" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Confirmar Senha"
              placeholderTextColor="#ffffff"
              secureTextEntry={!showConfirmPassword}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              onFocus={() => setFocused("confirmar")}
              onBlur={() => setFocused(null)}
            />
            <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
              <Feather name={showConfirmPassword ? "eye" : "eye-off"} size={18} color="#3D5A7A" />
            </TouchableOpacity>
          </View>

          {/* BOTÃO */}
          <TouchableOpacity
            onPress={handleRegister}
            activeOpacity={0.85}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Criar Conta</Text>
          </TouchableOpacity>

          {/* JÁ TEM CONTA */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>Já tem uma conta? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={styles.footerLink}>Entrar</Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </View>
  );
}