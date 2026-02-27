import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const FEATURES = [
  { icon: "map", label: "Roadmap personalizado com IA" },
  { icon: "zap", label: "Conteúdos gratuitos curados" },
  { icon: "trending-up", label: "Progresso visual e mensurável" },
  { icon: "cpu", label: "Mentor IA disponível 24h" },
];

export default function Onboarding({ navigation }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(40)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 900,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 900,
        useNativeDriver: true,
      }),
    ]).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.06,
          duration: 1400,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 1400,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      {/* Glows */}
      <View style={styles.bgGlow1} />
      <View style={styles.bgGlow2} />
      <View style={styles.bgGlow3} />

      <Animated.View
        style={[
          styles.content,
          { opacity: fadeAnim, transform: [{ translateY: slideAnim }] },
        ]}
      >
        {/* Ícone central animado */}
        <Animated.View
          style={[styles.iconWrapper, { transform: [{ scale: pulseAnim }] }]}
        >
          <View style={styles.iconGlow} />
          <View style={styles.iconCircle}>
            <Feather name="cpu" size={40} color="#38BDF8" />
          </View>
        </Animated.View>

        {/* Título */}
        <Text style={styles.brand}>MentorPath AI</Text>
        <Text style={styles.title}>
          Pare de se perder{"\n"}estudando sozinho.
        </Text>
        <Text style={styles.subtitle}>
          Receba um roadmap personalizado com IA e aprenda com direção.
        </Text>

        {/* Features */}
        <View style={styles.featuresWrapper}>
          {FEATURES.map((f, i) => (
            <View key={i} style={styles.featureRow}>
              <View style={styles.featureIcon}>
                <Feather name={f.icon} size={16} color="#38BDF8" />
              </View>
              <Text style={styles.featureText}>{f.label}</Text>
            </View>
          ))}
        </View>

        {/* Botão */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Login")}
          activeOpacity={0.85}
        >
          <Text style={styles.buttonText}>Começar agora</Text>
          <Feather name="arrow-right" size={18} color="#fff" style={{ marginLeft: 8 }} />
        </TouchableOpacity>

        <Text style={styles.terms}>
          Gratuito para começar • Sem cartão de crédito
        </Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#060D1F",
    justifyContent: "center",
  },

  bgGlow1: {
    position: "absolute",
    top: -80,
    left: -80,
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: "#1E3A8A",
    opacity: 0.25,
  },
  bgGlow2: {
    position: "absolute",
    bottom: -60,
    right: -60,
    width: 260,
    height: 260,
    borderRadius: 130,
    backgroundColor: "#0369A1",
    opacity: 0.2,
  },
  bgGlow3: {
    position: "absolute",
    top: "40%",
    left: width / 2 - 100,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "#0EA5E9",
    opacity: 0.05,
  },

  content: {
    paddingHorizontal: 32,
    alignItems: "center",
  },

  iconWrapper: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 28,
  },
  iconGlow: {
    position: "absolute",
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: "#38BDF8",
    opacity: 0.12,
  },
  iconCircle: {
    width: 84,
    height: 84,
    borderRadius: 26,
    backgroundColor: "#0F1F3D",
    borderWidth: 1.5,
    borderColor: "#1E3A5F",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#38BDF8",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 10,
  },

  brand: {
    color: "#38BDF8",
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: 2,
    textTransform: "uppercase",
    marginBottom: 14,
  },
  title: {
    color: "#E2E8F0",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 40,
    marginBottom: 14,
  },
  subtitle: {
    color: "#64748B",
    fontSize: 15,
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 32,
  },

  featuresWrapper: {
    width: "100%",
    backgroundColor: "#0F1F3D",
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: "#1E3A5F",
    marginBottom: 32,
    gap: 14,
  },
  featureRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  featureIcon: {
    width: 34,
    height: 34,
    borderRadius: 10,
    backgroundColor: "#162033",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  featureText: {
    color: "#94A3B8",
    fontSize: 14,
  },

  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0EA5E9",
    paddingVertical: 18,
    borderRadius: 16,
    width: "100%",
    shadowColor: "#0EA5E9",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 14,
    elevation: 10,
    marginBottom: 16,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    letterSpacing: 0.5,
  },

  terms: {
    color: "#334155",
    fontSize: 12,
  },
});
