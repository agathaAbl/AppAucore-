import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Animated,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import styles from "./HomeStyles"; 
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
            <TouchableOpacity
              style={styles.backBtn}
              onPress={() => navigation.navigate("Login")}
            >
              <Feather name="arrow-left" size={20} color="#38BDF8" />
            </TouchableOpacity>
            <View style={{ flex: 1 }}>
              <Text style={styles.greetingSmall}>Olá de volta 👋</Text>
              <Text style={styles.greetingBig}>Bem-vinda!</Text>
            </View>
            <TouchableOpacity style={styles.avatarBtn}>
              <Feather name="user" size={22} color="#38BDF8" />
            </TouchableOpacity>
          </View>

          {/* Banner Mentor IA */}
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

            <TouchableOpacity
              style={styles.actionCard}
              onPress={() => navigation.navigate("Conteudo")}
            >
              <Feather name="bar-chart-2" size={24} color="#38BDF8" />
              <Text style={styles.actionLabel}>Progresso</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.actionCard}
              onPress={() => navigation.navigate("MentorIA")}
            >
              <Feather name="award" size={24} color="#38BDF8" />
              <Text style={styles.actionLabel}>Conquistas</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.actionCard}
              onPress={() => navigation.navigate("MentorIA")}
            >
              <Feather name="settings" size={24} color="#38BDF8" />
              <Text style={styles.actionLabel}>Config.</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </ScrollView>
    </View>
  );
}
