import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Animated,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const TOPICOS = [
  { id: "1", titulo: "Arrays", descricao: "Coleções de elementos com índice fixo.", feito: true },
  { id: "2", titulo: "Listas Encadeadas", descricao: "Nós conectados em sequência dinâmica.", feito: true },
  { id: "3", titulo: "Pilhas (Stack)", descricao: "Estrutura LIFO — último a entrar, primeiro a sair.", feito: false },
  { id: "4", titulo: "Filas (Queue)", descricao: "Estrutura FIFO — primeiro a entrar, primeiro a sair.", feito: false },
  { id: "5", titulo: "Árvores Binárias", descricao: "Hierarquia de nós com no máximo 2 filhos.", feito: false },
];

export default function Conteudo({ navigation }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [topicos, setTopicos] = useState(TOPICOS);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 700,
      useNativeDriver: true,
    }).start();
  }, []);

  const toggleFeito = (id) => {
    setTopicos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, feito: !t.feito } : t))
    );
  };

  const feitos = topicos.filter((t) => t.feito).length;
  const progresso = Math.round((feitos / topicos.length) * 100);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      {/* Glows */}
      <View style={styles.bgGlow1} />
      <View style={styles.bgGlow2} />

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => navigation?.goBack()}
          >
            <Feather name="arrow-left" size={20} color="#38BDF8" />
          </TouchableOpacity>
          <View style={{ flex: 1 }}>
            <Text style={styles.categoria}>MÓDULO 2</Text>
            <Text style={styles.titulo}>Estruturas de Dados</Text>
          </View>
        </View>

        {/* Progresso */}
        <View style={styles.progressCard}>
          <View style={styles.progressRow}>
            <Text style={styles.progressLabel}>Seu progresso</Text>
            <Text style={styles.progressPercent}>{progresso}%</Text>
          </View>
          <View style={styles.progressBarBg}>
            <Animated.View
              style={[styles.progressBarFill, { width: `${progresso}%` }]}
            />
          </View>
          <Text style={styles.progressSub}>
            {feitos} de {topicos.length} tópicos concluídos
          </Text>
        </View>

        {/* Descrição */}
        <Text style={styles.descricao}>
          Estruturas de dados organizam informações para que possam ser acessadas
          e modificadas de forma eficiente. Domine esses conceitos e pense como
          um engenheiro de software.
        </Text>

        {/* Tópicos */}
        <Text style={styles.sectionTitle}>Tópicos do módulo</Text>

        {topicos.map((t) => (
          <TouchableOpacity
            key={t.id}
            style={[styles.topicoCard, t.feito && styles.topicoCardFeito]}
            onPress={() => toggleFeito(t.id)}
            activeOpacity={0.8}
          >
            <View
              style={[styles.checkCircle, t.feito && styles.checkCircleFeito]}
            >
              {t.feito && <Feather name="check" size={14} color="#fff" />}
            </View>
            <View style={{ flex: 1 }}>
              <Text style={[styles.topicoTitulo, t.feito && styles.topicoTituloFeito]}>
                {t.titulo}
              </Text>
              <Text style={styles.topicoDesc}>{t.descricao}</Text>
            </View>
            <Feather name="chevron-right" size={16} color="#1E3A5F" />
          </TouchableOpacity>
        ))}

        {/* Botão Mentor IA */}
        <TouchableOpacity
          style={styles.mentorBtn}
          onPress={() => navigation?.navigate("MentorIA")}
          activeOpacity={0.85}
        >
          <View style={styles.mentorBtnIcon}>
            <Feather name="cpu" size={20} color="#fff" />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.mentorBtnTitle}>Perguntar ao Mentor IA</Text>
            <Text style={styles.mentorBtnSub}>
              Tire dúvidas ou peça exercícios práticos
            </Text>
          </View>
          <Feather name="arrow-right" size={18} color="#fff" />
        </TouchableOpacity>

        {/* Botão Concluir Módulo */}
        <TouchableOpacity
          style={styles.doneBtn}
          onPress={() => navigation?.goBack()}
          activeOpacity={0.85}
        >
          <Feather name="check-circle" size={18} color="#fff" style={{ marginRight: 8 }} />
          <Text style={styles.doneBtnText}>Marcar módulo como concluído</Text>
        </TouchableOpacity>
      </ScrollView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#060D1F",
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 56,
    paddingBottom: 40,
  },

  bgGlow1: {
    position: "absolute",
    top: -60,
    right: -80,
    width: 260,
    height: 260,
    borderRadius: 130,
    backgroundColor: "#1E3A8A",
    opacity: 0.18,
  },
  bgGlow2: {
    position: "absolute",
    bottom: 100,
    left: -80,
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: "#0369A1",
    opacity: 0.13,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
    gap: 14,
  },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 13,
    backgroundColor: "#0F1F3D",
    borderWidth: 1,
    borderColor: "#1E3A5F",
    alignItems: "center",
    justifyContent: "center",
  },
  categoria: {
    color: "#38BDF8",
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 1.5,
    marginBottom: 2,
  },
  titulo: {
    color: "#E2E8F0",
    fontSize: 22,
    fontWeight: "bold",
  },

  progressCard: {
    backgroundColor: "#0F1F3D",
    borderRadius: 18,
    padding: 18,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: "#1E3A5F",
  },
  progressRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  progressLabel: {
    color: "#94A3B8",
    fontSize: 13,
  },
  progressPercent: {
    color: "#38BDF8",
    fontWeight: "bold",
    fontSize: 13,
  },
  progressBarBg: {
    height: 8,
    backgroundColor: "#162033",
    borderRadius: 4,
    overflow: "hidden",
    marginBottom: 10,
  },
  progressBarFill: {
    height: 8,
    backgroundColor: "#0EA5E9",
    borderRadius: 4,
  },
  progressSub: {
    color: "#475569",
    fontSize: 12,
  },

  descricao: {
    color: "#64748B",
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 28,
  },

  sectionTitle: {
    color: "#94A3B8",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1,
    textTransform: "uppercase",
    marginBottom: 14,
  },

  topicoCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0F1F3D",
    borderRadius: 16,
    padding: 16,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#1E3A5F",
    gap: 12,
  },
  topicoCardFeito: {
    borderColor: "#0EA5E9",
    opacity: 0.75,
  },
  checkCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: "#1E3A5F",
    alignItems: "center",
    justifyContent: "center",
  },
  checkCircleFeito: {
    backgroundColor: "#0EA5E9",
    borderColor: "#0EA5E9",
  },
  topicoTitulo: {
    color: "#E2E8F0",
    fontWeight: "600",
    fontSize: 14,
    marginBottom: 3,
  },
  topicoTituloFeito: {
    textDecorationLine: "line-through",
    color: "#475569",
  },
  topicoDesc: {
    color: "#475569",
    fontSize: 12,
  },

  mentorBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0369A1",
    borderRadius: 18,
    padding: 18,
    marginTop: 24,
    marginBottom: 12,
    gap: 14,
    shadowColor: "#0EA5E9",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 14,
    elevation: 10,
  },
  mentorBtnIcon: {
    width: 42,
    height: 42,
    borderRadius: 13,
    backgroundColor: "#0EA5E9",
    alignItems: "center",
    justifyContent: "center",
  },
  mentorBtnTitle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: 3,
  },
  mentorBtnSub: {
    color: "#7DD3FC",
    fontSize: 12,
  },

  doneBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#16A34A",
    paddingVertical: 16,
    borderRadius: 16,
    marginBottom: 10,
    shadowColor: "#22C55E",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  doneBtnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },
});
