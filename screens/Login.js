import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  Animated,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Feather, AntDesign, FontAwesome } from "@expo/vector-icons";
import styles from "./stylesLogin";

const { width, height } = Dimensions.get("window");

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [focused, setFocused] = useState(null);

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(24)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 1, duration: 700, useNativeDriver: true }),
      Animated.timing(slideAnim, { toValue: 0, duration: 600, useNativeDriver: true }),
    ]).start();
  }, []);

  const MOCK_EMAIL = "2";
  const MOCK_PASSWORD = "2";

  const handleLogin = () => {
    if (email === MOCK_EMAIL && password === MOCK_PASSWORD) {
      navigation.replace("Onboarding");
    } else {
      Alert.alert("Erro", "Email ou senha inválidos.");
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {/* BACKGROUND */}
      <View style={StyleSheet.absoluteFill} pointerEvents="none">
        <View style={{ ...StyleSheet.absoluteFillObject, backgroundColor: "#050C1E" }} />
        <View
          style={{
            position: "absolute",
            width: width * 1.2,
            height: width * 1.2,
            borderRadius: width * 0.6,
            backgroundColor: "#0A2A6E",
            top: height * 0.15,
            left: -width * 0.1,
            opacity: 0.45,
          }}
        />
        <View
          style={{
            position: "absolute",
            width: width * 0.9,
            height: width * 0.9,
            borderRadius: width * 0.45,
            backgroundColor: "#0369A1",
            bottom: -width * 0.3,
            left: width * 0.05,
            opacity: 0.18,
          }}
        />
        <View
          style={{
            position: "absolute",
            width: 180,
            height: 180,
            borderRadius: 90,
            backgroundColor: "#0EA5E9",
            top: height * 0.08,
            right: -40,
            opacity: 0.08,
          }}
        />
        <View
          style={{
            position: "absolute",
            width: 120,
            height: 120,
            borderRadius: 60,
            backgroundColor: "#38BDF8",
            bottom: height * 0.1,
            left: -30,
            opacity: 0.07,
          }}
        />
      </View>

      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <Animated.View style={{ opacity: fadeAnim, transform: [{ translateY: slideAnim }] }}>
          {/* Logo */}
          <View style={styles.logoContainer}>
            <Image source={require("../assets/logo-convertido.png")} style={styles.logo} />
          </View>

          {/* Card */}
          <View style={styles.card}>
            <Text style={{ color: "#ffffff", fontSize: 13, fontWeight: "600", marginBottom: 8, letterSpacing: 0.3 }}>
              Email ou usuário
            </Text>
            <View style={[styles.inputWrapper, focused === "email" && styles.inputFocused]}>
              <Feather name="user" size={18} color="#3D5A7A" style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholderTextColor="#4A7FA5"
                placeholder="Digite seu email ou usuário"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused(null)}
              />
            </View>

            <Text style={{ color: "#ffffff", fontSize: 13, fontWeight: "600", letterSpacing: 0.3, marginBottom: 8, marginTop: 8 }}>
              Senha
            </Text>
            <View style={[styles.inputWrapper, focused === "senha" && styles.inputFocused]}>
              <Feather name="lock" size={18} color="#3D5A7A" style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholderTextColor="#4A7FA5"
                placeholder="Digite sua senha"
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

            <TouchableOpacity
              onPress={() => navigation.navigate("ForgotPassword")}
              style={{ alignSelf: "flex-end", marginTop: 6, marginBottom: 16 }}
            >
              <Text style={styles.forgotText}>Esqueceu a senha?</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleLogin} activeOpacity={0.85} style={styles.button}>
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
          </View>

          {/* Divider */}
          <View style={styles.divider}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>ou</Text>
            <View style={styles.dividerLine} />
          </View>

          {/* Social Buttons */}
          <View style={{ marginBottom: 12 }}>
            <View style={styles.socialButtonWrapper}>
              <TouchableOpacity onPress={() => navigation.navigate("LoginGoogle")} activeOpacity={0.8} style={styles.socialButton}>
                <AntDesign name="google" size={24} color="#DB4437" style={{ marginRight: 10 }} />
                <Text style={styles.socialText}>Continuar com Google</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.socialButtonWrapper}>
              <TouchableOpacity onPress={() => navigation.navigate("LoginApple")} activeOpacity={0.8} style={styles.socialButton}>
                <FontAwesome name="apple" size={26} color="#fff" style={{ marginRight: 10 }} />
                <Text style={styles.socialText}>Continuar com Apple</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.socialButtonWrapper}>
              <TouchableOpacity onPress={() => navigation.navigate("LoginMicrosoft")} activeOpacity={0.8} style={styles.socialButton}>
                <FontAwesome name="windows" size={24} color="#00A4EF" style={{ marginRight: 10 }} />
                <Text style={styles.socialText}>Continuar com Microsoft</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Register */}
          <View style={styles.registerRow}>
            <Text style={styles.registerText}>Não tem uma conta? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("CriarConta")}>
              <Text style={styles.registerLink}>Criar conta</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </ScrollView>
    </View>
  );
}