import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
  ScrollView,
  Animated,
} from "react-native";
import { Feather } from "@expo/vector-icons";



export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [focused, setFocused] = useState(null);

  const floatAnim = useRef(new Animated.Value(0)).current;

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();

    // Loop de flutuação do mascote
    Animated.loop(
      Animated.sequence([
        Animated.timing(floatAnim, {
          toValue: -12,
          duration: 1800,
          useNativeDriver: true,
        }),
        Animated.timing(floatAnim, {
          toValue: 0,
          duration: 1800,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const MOCK_EMAIL = "2";
  const MOCK_PASSWORD = "2";

  const handleLogin = () => {
    if (email === MOCK_EMAIL && password === MOCK_PASSWORD) {
      navigation.replace("Home");
    } else {
      Alert.alert("Erro", "Email ou senha inválidos.");
    }
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* Fundo com gradiente simulado via camadas */}
      <View style={styles.bgGlow1} />
      <View style={styles.bgGlow2} />

      <Animated.View style={[styles.content, { opacity: fadeAnim }]}>

        {/* Seção superior: logo centralizada */}
        <View style={styles.topSection}>
          <Image
            source={require("../assets/logo_convertido.jpg")}
            style={styles.logo}
          />
          <Text style={styles.subtitle}>
            Seu mentor digital para evoluir com direção.
          </Text>
        </View>

        {/* Wrapper do card com mascote flutuando acima */}
        <View style={styles.cardWrapper}>

          {/* Mascote flutuando centralizado acima do card */}
          <Animated.View
            style={[
              styles.mascoteWrapper,
              { transform: [{ translateY: floatAnim }] },
            ]}
          >
            {/* Glow atrás do mascote */}
            <View style={styles.mascoteGlow} />
            <Image
              source={require("../assets/mascote_convertido.jpg")}
              style={styles.mascote}
            />
          </Animated.View>

          {/* Card do formulário */}
          <View style={styles.card}>
            {/* Espaço para o mascote não cobrir o conteúdo */}
            <View style={styles.cardSpacer} />

            <View style={[styles.inputWrapper, focused === "email" && styles.inputFocused]}>
              <Feather name="mail" size={18} color="#7DD3FC" style={{ marginRight: 10 }} />
              <TextInput
                style={styles.inputFlex}
                placeholder="Email"
                placeholderTextColor="#7DD3FC"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused(null)}
              />
            </View>

            <View style={[styles.inputWrapper, focused === "senha" && styles.inputFocused]}>
              <Feather name="lock" size={18} color="#7DD3FC" style={{ marginRight: 10 }} />
              <TextInput
                style={styles.inputFlex}
                placeholder="Senha"
                placeholderTextColor="#7DD3FC"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
                onFocus={() => setFocused("senha")}
                onBlur={() => setFocused(null)}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Feather
                  name={showPassword ? "eye" : "eye-off"}
                  size={18}
                  color="#7DD3FC"
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={handleLogin}
              activeOpacity={0.85}
            >
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forgotBtn}>
              <Text style={styles.forgotText}>Esqueceu a senha?</Text>
            </TouchableOpacity>
          </View>
        </View>

      </Animated.View>
    </ScrollView>
  );
}

const MASCOTE_SIZE = 100;
const MASCOTE_OVERLAP = MASCOTE_SIZE / 2; // quanto o mascote fica fora do card

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#060D1F",
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingVertical: 50,
  },

  // Glows decorativos de fundo
  bgGlow1: {
    position: "absolute",
    top: -80,
    left: -80,
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: "#1E3A8A",
    opacity: 0.25,
    // React Native não tem blur nativo sem lib, mas a opacidade já cria profundidade
  },
  bgGlow2: {
    position: "absolute",
    bottom: -60,
    right: -60,
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: "#0369A1",
    opacity: 0.2,
  },

  content: {
    flex: 1,
    justifyContent: "center",
  },

  // Topo com logo
  topSection: {
    alignItems: "center",
    marginBottom: 40,
  },

  logo: {
    width: 200,
    height: 65,
    resizeMode: "contain",
    marginBottom: 14,
  },

  subtitle: {
    color: "#94A3B8",
    textAlign: "center",
    fontSize: 14,
    letterSpacing: 0.4,
    fontStyle: "italic",
  },

  // Wrapper que posiciona mascote + card juntos
  cardWrapper: {
    alignItems: "center",
  },

  // Mascote centralizado, sobrepondo o card
  mascoteWrapper: {
    zIndex: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: -MASCOTE_OVERLAP, // puxa para baixo, sobrepondo o card
  },

  mascoteGlow: {
    position: "absolute",
    width: MASCOTE_SIZE + 30,
    height: MASCOTE_SIZE + 30,
    borderRadius: (MASCOTE_SIZE + 30) / 2,
    backgroundColor: "#38BDF8",
    opacity: 0.18,
  },

  mascote: {
    width: MASCOTE_SIZE,
    height: MASCOTE_SIZE,
    borderRadius: MASCOTE_SIZE / 2,
    resizeMode: "cover",
    borderWidth: 3,
    borderColor: "#38BDF8",
  },

  // Card do formulário
  card: {
    width: "100%",
    backgroundColor: "#0F1F3D",
    borderRadius: 24,
    paddingHorizontal: 24,
    paddingBottom: 28,
    paddingTop: 8,
    borderWidth: 1,
    borderColor: "#1E3A5F",
    // Sombra
    shadowColor: "#38BDF8",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 10,
  },

  // Espaço reservado para o mascote que sobrepõe o card
  cardSpacer: {
    height: MASCOTE_OVERLAP + 16,
  },

  input: {
    backgroundColor: "#162033",
    paddingVertical: 16,
    paddingHorizontal: 18,
    borderRadius: 14,
    marginBottom: 14,
    color: "#E2E8F0",
    fontSize: 15,
    borderWidth: 1,
    borderColor: "#1E3A5F",
  },

  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#162033",
    borderRadius: 14,
    marginBottom: 14,
    paddingHorizontal: 18,
    borderWidth: 1,
    borderColor: "#1E3A5F",
  },

  inputFocused: {
    borderColor: "#38BDF8",
    shadowColor: "#38BDF8",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 4,
  },

  inputFlex: {
    flex: 1,
    paddingVertical: 16,
    color: "#E2E8F0",
    fontSize: 15,
  },

  button: {
    backgroundColor: "#0EA5E9",
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 6,
    shadowColor: "#0EA5E9",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 8,
  },

  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
    letterSpacing: 1,
  },

  forgotBtn: {
    marginTop: 16,
    alignItems: "flex-start",
  },

  forgotText: {
    color: "#38BDF8",
    fontSize: 13,
    opacity: 0.8,
  },
});
