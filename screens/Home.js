import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Animated,
  Dimensions,
  StatusBar,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

function BG() {
  return (
    <View style={[StyleSheet.absoluteFill, { overflow: "hidden" }]} pointerEvents="none">
      <View style={{ ...StyleSheet.absoluteFillObject, backgroundColor: "#050C1E" }} />
      <View style={{ position: "absolute", width: width * 0.9, height: width * 0.9, borderRadius: width * 0.45, backgroundColor: "#0A2A6E", top: -width * 0.2, left: -width * 0.1, opacity: 0.4 }} />
      <View style={{ position: "absolute", width: width * 0.7, height: width * 0.7, borderRadius: width * 0.35, backgroundColor: "#0369A1", bottom: -width * 0.1, right: -width * 0.1, opacity: 0.15 }} />
    </View>
  );
}

const MENU_ITEMS = [
  { icon: "user", label: "Informações\nPessoais", color: "#38BDF8", bg: "rgba(56,189,248,0.12)", screen: "Perfil" },
  { icon: "clock", label: "Histórico de\nPesquisa", color: "#818CF8", bg: "rgba(129,140,248,0.12)", screen: "Historico" },
  { icon: "bar-chart-2", label: "Painel de\nDesempenho", color: "#34D399", bg: "rgba(52,211,153,0.12)", screen: "Desempenho" },
  { icon: "zap", label: "Upgrade\nPremium", color: "#FBBF24", bg: "rgba(251,191,36,0.12)", screen: "Premium" },
];

export default function Home({ navigation }) {
  const [query, setQuery] = useState("");
  const [inputFocused, setInputFocused] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;
  const inputScale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 1, duration: 600, useNativeDriver: true }),
      Animated.timing(slideAnim, { toValue: 0, duration: 600, useNativeDriver: true }),
    ]).start();
  }, []);

  const onInputFocus = () => {
    setInputFocused(true);
    Animated.spring(inputScale, { toValue: 1.02, friction: 8, useNativeDriver: true }).start();
  };

  const onInputBlur = () => {
    setInputFocused(false);
    Animated.spring(inputScale, { toValue: 1, friction: 8, useNativeDriver: true }).start();
  };

  const handleSearch = () => {
    if (!query.trim()) return;
    navigation.navigate("Chat", { initialQuery: query });
    setQuery("");
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#050C1E" }}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      <BG />

      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={styles.scroll}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <Animated.View style={{ opacity: fadeAnim, transform: [{ translateY: slideAnim }] }}>

            {/* Header */}
            <View style={styles.header}>
              <View>
                <Text style={styles.logo}>MentorPath AI</Text>
                <Text style={styles.greeting}>Bem-vinda de volta 👋</Text>
              </View>
              <TouchableOpacity
                style={styles.homeBtn}
                onPress={() => navigation.navigate("Home")}
                activeOpacity={0.7}
              >
                <Feather name="home" size={20} color="#38BDF8" />
              </TouchableOpacity>
            </View>

            {/* Search Bar */}
            <Animated.View style={[styles.searchWrapper, { transform: [{ scale: inputScale }] }]}>
              <View style={[styles.searchBox, inputFocused && styles.searchBoxFocused]}>
                <Feather name="search" size={18} color={inputFocused ? "#38BDF8" : "#4A7FA5"} style={{ marginRight: 10 }} />
                <TextInput
                  style={styles.searchInput}
                  placeholder="O que você quer aprender hoje?"
                  placeholderTextColor="#4A7FA5"
                  value={query}
                  onChangeText={setQuery}
                  onFocus={onInputFocus}
                  onBlur={onInputBlur}
                  onSubmitEditing={handleSearch}
                  returnKeyType="send"
                />
                {query.length > 0 && (
                  <TouchableOpacity onPress={handleSearch} style={styles.sendBtn} activeOpacity={0.8}>
                    <Feather name="send" size={16} color="#fff" />
                  </TouchableOpacity>
                )}
              </View>
              <Text style={styles.searchHint}>Pergunte qualquer coisa sobre sua área de estudos</Text>
            </Animated.View>

            {/* Menu Grid */}
            <Text style={styles.sectionLabel}>MENU</Text>
            <View style={styles.menuGrid}>
              {MENU_ITEMS.map((item, i) => (
                <TouchableOpacity
                  key={i}
                  style={[styles.menuCard, { backgroundColor: item.bg, borderColor: item.color + "33" }]}
                  onPress={() => navigation.navigate(item.screen)}
                  activeOpacity={0.75}
                >
                  <View style={[styles.menuIconBox, { backgroundColor: item.color + "22" }]}>
                    <Feather name={item.icon} size={22} color={item.color} />
                  </View>
                  <Text style={[styles.menuLabel, { color: item.color }]}>{item.label}</Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Meta Atual */}
            <Text style={styles.sectionLabel}>META ATUAL</Text>
            <View style={styles.metaCard}>
              <View style={styles.metaRow}>
                <View style={styles.metaIconBox}>
                  <Feather name="target" size={20} color="#38BDF8" />
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.metaTitle}>Programação Backend</Text>
                  <Text style={styles.metaSubtitle}>Em progresso</Text>
                </View>
                <Text style={styles.metaPercent}>42%</Text>
              </View>
              <View style={styles.progressBar}>
                <View style={[styles.progressFill, { width: "42%" }]} />
              </View>
            </View>

            {/* Roadmap preview */}
            <Text style={styles.sectionLabel}>ROADMAP</Text>
            <View style={styles.roadmapCard}>
              {[
                { icon: "check-circle", label: "Lógica de Programação", color: "#34D399", done: true },
                { icon: "clock", label: "Estruturas de Dados", color: "#FBBF24", done: false },
                { icon: "lock", label: "APIs REST", color: "#475569", done: false },
              ].map((item, i) => (
                <View key={i} style={[styles.roadmapRow, i < 2 && styles.roadmapRowBorder]}>
                  <Feather name={item.icon} size={16} color={item.color} />
                  <Text style={[styles.roadmapText, { color: item.done ? "#CBD5E1" : item.color === "#475569" ? "#475569" : "#94A3B8" }]}>
                    {item.label}
                  </Text>
                </View>
              ))}
            </View>

            {/* CTA Buttons */}
            <TouchableOpacity
              style={styles.primaryBtn}
              onPress={() => navigation.navigate("Onboarding")}
              activeOpacity={0.85}
            >
              <Feather name="zap" size={18} color="#fff" style={{ marginRight: 8 }} />
              <Text style={styles.primaryBtnText}>Gerar Novo Plano com IA</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.secondaryBtn}
              onPress={() => navigation.navigate("Conteudo")}
              activeOpacity={0.85}
            >
              <Feather name="play" size={18} color="#38BDF8" style={{ marginRight: 8 }} />
              <Text style={styles.secondaryBtnText}>Continuar Estudo</Text>
            </TouchableOpacity>

          </Animated.View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  scroll: {
    paddingHorizontal: 20,
    paddingTop: Platform.OS === "ios" ? 10 : 20,
    paddingBottom: 50,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 28,
  },
  logo: {
    fontSize: 13,
    color: "#38BDF8",
    fontWeight: "800",
    letterSpacing: 1.5,
    textTransform: "uppercase",
    marginBottom: 4,
  },
  greeting: {
    fontSize: 22,
    color: "#F1F5F9",
    fontWeight: "800",
    letterSpacing: -0.4,
  },
  homeBtn: {
    width: 42,
    height: 42,
    borderRadius: 13,
    backgroundColor: "rgba(56,189,248,0.1)",
    borderWidth: 1,
    borderColor: "rgba(56,189,248,0.2)",
    alignItems: "center",
    justifyContent: "center",
  },

  // Search
  searchWrapper: {
    marginBottom: 28,
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(12, 26, 48, 0.9)",
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: Platform.OS === "ios" ? 14 : 12,
    borderWidth: 1.5,
    borderColor: "rgba(14,165,233,0.15)",
  },
  searchBoxFocused: {
    borderColor: "#38BDF8",
    backgroundColor: "#080F22",
    shadowColor: "#38BDF8",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 4,
  },
  searchInput: {
    flex: 1,
    color: "#E2E8F0",
    fontSize: 14.5,
    fontWeight: "500",
  },
  sendBtn: {
    width: 32,
    height: 32,
    borderRadius: 10,
    backgroundColor: "#0EA5E9",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
  },
  searchHint: {
    fontSize: 11,
    color: "#2A4A6A",
    textAlign: "center",
    marginTop: 8,
    fontWeight: "500",
  },

  sectionLabel: {
    fontSize: 11,
    fontWeight: "800",
    color: "#38BDF8",
    letterSpacing: 2,
    textTransform: "uppercase",
    marginBottom: 12,
  },

  // Menu Grid
  menuGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    marginBottom: 28,
  },
  menuCard: {
    width: (width - 52) / 2,
    borderRadius: 18,
    padding: 16,
    borderWidth: 1,
  },
  menuIconBox: {
    width: 42,
    height: 42,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  menuLabel: {
    fontSize: 13,
    fontWeight: "700",
    lineHeight: 18,
  },

  // Meta
  metaCard: {
    backgroundColor: "rgba(12, 26, 48, 0.9)",
    borderRadius: 18,
    padding: 18,
    borderWidth: 1,
    borderColor: "rgba(14,165,233,0.15)",
    marginBottom: 28,
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 14,
  },
  metaIconBox: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: "rgba(56,189,248,0.1)",
    alignItems: "center",
    justifyContent: "center",
  },
  metaTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#F1F5F9",
    marginBottom: 2,
  },
  metaSubtitle: {
    fontSize: 12,
    color: "#4A7FA5",
    fontWeight: "500",
  },
  metaPercent: {
    fontSize: 20,
    fontWeight: "800",
    color: "#38BDF8",
    letterSpacing: -0.5,
  },
  progressBar: {
    height: 6,
    borderRadius: 3,
    backgroundColor: "rgba(56,189,248,0.1)",
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    borderRadius: 3,
    backgroundColor: "#38BDF8",
  },

  // Roadmap
  roadmapCard: {
    backgroundColor: "rgba(12, 26, 48, 0.9)",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "rgba(14,165,233,0.15)",
    marginBottom: 28,
    overflow: "hidden",
  },
  roadmapRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    padding: 14,
  },
  roadmapRowBorder: {
    borderBottomWidth: 1,
    borderBottomColor: "rgba(14,165,233,0.08)",
  },
  roadmapText: {
    fontSize: 14,
    fontWeight: "500",
  },

  // Buttons
  primaryBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0EA5E9",
    borderRadius: 16,
    paddingVertical: 16,
    marginBottom: 12,
    shadowColor: "#0EA5E9",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 14,
    elevation: 8,
  },
  primaryBtnText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "800",
    letterSpacing: 0.3,
  },
  secondaryBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(56,189,248,0.08)",
    borderRadius: 16,
    paddingVertical: 16,
    borderWidth: 1.5,
    borderColor: "rgba(56,189,248,0.2)",
  },
  secondaryBtnText: {
    color: "#38BDF8",
    fontSize: 15,
    fontWeight: "700",
    letterSpacing: 0.3,
  },
});