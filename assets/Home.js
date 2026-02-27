import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Animated,
} from "react-native";
import { Feather } from "@expo/vector-icons";

export default function Home({ navigation }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 700,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 700,
        useNativeDriver: true,
      }),
    ]).start();

    // Pulso no botão do Mentor IA
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.08,
          duration: 1200,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 1200,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#060D1F" }}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Glows de fundo */}
        <View style={styles.bgGlow1} />
        <View style={styles.bgGlow2} />

        <Animated.View
          style={{ opacity: fadeAnim, transform: [{ translateY: slideAnim }] }}
        >
          {/* Header */}
          <View style={styles.header}>
            <View>
              <Text style={styles.greetingSmall}>Olá de volta 👋</Text>
              <Text style={styles.greetingBig}>Bem-vinda!</Text>
            </View>
            <TouchableOpacity style={styles.avatarBtn}>
              <Feather name="user" size={22} color="#38BDF8" />
            </TouchableOpacity>
          </View>

          {/* Banner Mentor IA destaque */}
          <TouchableOpacity
            style={styles.mentorBanner}
            onPress={() => navigation.navigate("MentorIA")}
            activeOpacity={0.88}
          >
            <View style={styles.mentorBannerLeft}>
              <View style={styles.mentorBannerIcon}>
                <Feather name="cpu" size={22} color="#38BDF8" />
              </View>
              <View>
                <Text style={styles.mentorBannerTitle}>Mentor IA</Text>
                <Text style={styles.mentorBannerSub}>
                  Converse agora • online
                </Text>
              </View>
            </View>
            <View style={styles.mentorBannerBadge}>
              <View style={styles.onlineDot} />
              <Feather name="arrow-right" size={18} color="#38BDF8" />
            </View>
          </TouchableOpacity>

          {/* Banner Meta Atual */}
          <TouchableOpacity
            style={styles.bannerCard}
            onPress={() => navigation.navigate("Conteudo")}
            activeOpacity={0.85}
          >
            <View style={styles.bannerIcon}>
              <Feather name="target" size={22} color="#38BDF8" />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.bannerLabel}>Meta Atual</Text>
              <Text style={styles.bannerTitle}>
                Aprender Programação Backend
              </Text>
            </View>
            <Feather name="chevron-right" size={20} color="#38BDF8" />
          </TouchableOpacity>

          {/* Progresso */}
          <Text style={styles.sectionTitle}>Seu Progresso</Text>
          <View style={styles.progressCard}>
            <View style={styles.progressRow}>
              <Text style={styles.progressLabel}>Estruturas de Dados</Text>
              <Text style={styles.progressPercent}>64%</Text>
            </View>
            <View style={styles.progressBarBg}>
              <View style={[styles.progressBarFill, { width: "64%" }]} />
            </View>
          </View>

          {/* Continuar Estudo */}
          <Text style={styles.sectionTitle}>Continuar de onde parou</Text>
          <TouchableOpacity
            style={styles.continueCard}
            onPress={() => navigation.navigate("Conteudo")}
            activeOpacity={0.85}
          >
            <View style={styles.continueIconWrapper}>
              <Feather name="play-circle" size={28} color="#0EA5E9" />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.continueTitle}>Estruturas de Dados</Text>
              <Text style={styles.continueSubtitle}>
                Aula 7 — Listas Encadeadas
              </Text>
            </View>
            <Feather name="arrow-right" size={20} color="#38BDF8" />
          </TouchableOpacity>

          {/* Ações Rápidas */}
          <Text style={styles.sectionTitle}>Ações Rápidas</Text>
          <View style={styles.actionsRow}>
            <TouchableOpacity
              style={styles.actionCard}
              onPress={() => navigation.navigate("Conteudo")}
            >
              <Feather name="book-open" size={24} color="#38BDF8" />
              <Text style={styles.actionLabel}>Conteúdos</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionCard}>
              <Feather name="bar-chart-2" size={24} color="#38BDF8" />
              <Text style={styles.actionLabel}>Progresso</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionCard}>
              <Feather name="award" size={24} color="#38BDF8" />
              <Text style={styles.actionLabel}>Conquistas</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionCard}>
              <Feather name="settings" size={24} color="#38BDF8" />
              <Text style={styles.actionLabel}>Config.</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </ScrollView>

      {/* Botão flutuante Mentor IA removido — use a aba abaixo */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#060D1F",
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 100,
  },

  bgGlow1: {
    position: "absolute",
    top: -60,
    right: -80,
    width: 280,
    height: 280,
    borderRadius: 140,
    backgroundColor: "#1E3A8A",
    opacity: 0.2,
  },
  bgGlow2: {
    position: "absolute",
    bottom: 100,
    left: -80,
    width: 240,
    height: 240,
    borderRadius: 120,
    backgroundColor: "#0369A1",
    opacity: 0.15,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  greetingSmall: {
    color: "#94A3B8",
    fontSize: 14,
    marginBottom: 2,
  },
  greetingBig: {
    color: "#E2E8F0",
    fontSize: 26,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
  avatarBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#0F1F3D",
    borderWidth: 1,
    borderColor: "#1E3A5F",
    alignItems: "center",
    justifyContent: "center",
  },

  // Banner Mentor IA
  mentorBanner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#0C1E3A",
    borderRadius: 18,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1.5,
    borderColor: "#0EA5E9",
    shadowColor: "#0EA5E9",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 14,
    elevation: 8,
  },
  mentorBannerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  mentorBannerIcon: {
    width: 42,
    height: 42,
    borderRadius: 13,
    backgroundColor: "#0F1F3D",
    borderWidth: 1,
    borderColor: "#1E3A5F",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  mentorBannerTitle: {
    color: "#E2E8F0",
    fontWeight: "bold",
    fontSize: 15,
  },
  mentorBannerSub: {
    color: "#22C55E",
    fontSize: 12,
    marginTop: 2,
  },
  mentorBannerBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  onlineDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#22C55E",
    marginRight: 6,
  },

  bannerCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0F1F3D",
    borderRadius: 18,
    padding: 18,
    marginBottom: 28,
    borderWidth: 1,
    borderColor: "#1E3A5F",
    shadowColor: "#38BDF8",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 8,
  },
  bannerIcon: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: "#162033",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },
  bannerLabel: {
    color: "#64748B",
    fontSize: 12,
    marginBottom: 4,
  },
  bannerTitle: {
    color: "#E2E8F0",
    fontWeight: "bold",
    fontSize: 15,
  },

  sectionTitle: {
    color: "#94A3B8",
    fontSize: 13,
    fontWeight: "600",
    letterSpacing: 0.8,
    textTransform: "uppercase",
    marginBottom: 12,
  },

  progressCard: {
    backgroundColor: "#0F1F3D",
    borderRadius: 18,
    padding: 18,
    marginBottom: 28,
    borderWidth: 1,
    borderColor: "#1E3A5F",
  },
  progressRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  progressLabel: { color: "#CBD5E1", fontSize: 14 },
  progressPercent: { color: "#38BDF8", fontWeight: "bold", fontSize: 14 },
  progressBarBg: {
    height: 8,
    backgroundColor: "#162033",
    borderRadius: 4,
    overflow: "hidden",
  },
  progressBarFill: {
    height: 8,
    backgroundColor: "#0EA5E9",
    borderRadius: 4,
  },

  continueCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0F1F3D",
    borderRadius: 18,
    padding: 18,
    marginBottom: 28,
    borderWidth: 1,
    borderColor: "#1E3A5F",
    shadowColor: "#0EA5E9",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 8,
  },
  continueIconWrapper: { marginRight: 14 },
  continueTitle: {
    color: "#E2E8F0",
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: 4,
  },
  continueSubtitle: { color: "#64748B", fontSize: 13 },

  actionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  actionCard: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#0F1F3D",
    borderRadius: 16,
    paddingVertical: 18,
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: "#1E3A5F",
  },
  actionLabel: {
    color: "#94A3B8",
    fontSize: 11,
    marginTop: 8,
  },

  // FAB flutuante
  fab: {
    position: "absolute",
    bottom: 30,
    right: 24,
  },
  fabBtn: {
    width: 62,
    height: 62,
    borderRadius: 20,
    backgroundColor: "#0EA5E9",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#0EA5E9",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.5,
    shadowRadius: 16,
    elevation: 14,
  },
  fabGlow: {
    position: "absolute",
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#0EA5E9",
    opacity: 0.15,
  },
});
