import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Animated,
  Linking,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const TOPICOS = [
  {
    id: "1",
    titulo: "Arrays",
    descricao: "Coleções de elementos com índice fixo.",
    feito: true,
    duracao: "15 min",
    conteudo: "Arrays são estruturas que armazenam elementos do mesmo tipo em posições contíguas de memória. Acesso por índice é O(1), inserção/remoção é O(n).",
    recursos: [
      { label: "Artigo: Arrays em JS", url: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array" },
      { label: "Vídeo: Arrays explicado", url: "https://www.youtube.com/results?search_query=arrays+estrutura+de+dados" },
    ],
  },
  {
    id: "2",
    titulo: "Listas Encadeadas",
    descricao: "Nós conectados em sequência dinâmica.",
    feito: true,
    duracao: "20 min",
    conteudo: "Cada nó armazena um valor e um ponteiro para o próximo nó. Inserção é O(1), acesso é O(n). Ideal quando o tamanho é desconhecido.",
    recursos: [
      { label: "Artigo: Linked Lists", url: "https://www.geeksforgeeks.org/linked-list-data-structure/" },
    ],
  },
  {
    id: "3",
    titulo: "Pilhas (Stack)",
    descricao: "Estrutura LIFO — último a entrar, primeiro a sair.",
    feito: false,
    duracao: "15 min",
    conteudo: "Pilhas seguem o princípio LIFO. Operações push (inserir) e pop (remover) são O(1). Usadas em chamadas de funções, undo/redo e parsing.",
    recursos: [
      { label: "Artigo: Stack Data Structure", url: "https://www.geeksforgeeks.org/stack-data-structure/" },
      { label: "Vídeo: Pilhas na prática", url: "https://www.youtube.com/results?search_query=pilha+stack+estrutura+de+dados" },
    ],
  },
  {
    id: "4",
    titulo: "Filas (Queue)",
    descricao: "Estrutura FIFO — primeiro a entrar, primeiro a sair.",
    feito: false,
    duracao: "15 min",
    conteudo: "Filas seguem o princípio FIFO. Operações enqueue e dequeue são O(1). Usadas em sistemas de impressão, BFS e filas de tarefas.",
    recursos: [
      { label: "Artigo: Queue Data Structure", url: "https://www.geeksforgeeks.org/queue-data-structure/" },
    ],
  },
  {
    id: "5",
    titulo: "Árvores Binárias",
    descricao: "Hierarquia de nós com no máximo 2 filhos.",
    feito: false,
    duracao: "30 min",
    conteudo: "Árvores binárias organizam dados hierarquicamente. Cada nó tem no máximo 2 filhos. Busca em BST é O(log n). Base para heaps, AVL e Red-Black trees.",
    recursos: [
      { label: "Artigo: Binary Tree", url: "https://www.geeksforgeeks.org/binary-tree-data-structure/" },
      { label: "Visualizador interativo", url: "https://visualgo.net/en/bst" },
    ],
  },
];

export default function Conteudo({ navigation }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [topicos, setTopicos] = useState(TOPICOS);
  const [expandido, setExpandido] = useState(null);

  useEffect(() => {
    Animated.timing(fadeAnim, { toValue: 1, duration: 700, useNativeDriver: true }).start();
  }, []);

  const toggleFeito = (id) => {
    setTopicos((prev) => prev.map((t) => (t.id === id ? { ...t, feito: !t.feito } : t)));
  };

  const toggleExpandido = (id) => {
    setExpandido((prev) => (prev === id ? null : id));
  };

  const goBack = () => {
    if (navigation?.canGoBack()) navigation.goBack();
    else navigation.navigate("Home");
  };

  const feitos = topicos.filter((t) => t.feito).length;
  const progresso = Math.round((feitos / topicos.length) * 100);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <View style={styles.bgGlow1} />
      <View style={styles.bgGlow2} />

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>

        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backBtn} onPress={goBack}>
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
            <View style={[styles.progressBarFill, { width: `${progresso}%` }]} />
          </View>
          <Text style={styles.progressSub}>{feitos} de {topicos.length} tópicos concluídos</Text>
        </View>

        {/* Descrição */}
        <Text style={styles.descricao}>
          Estruturas de dados organizam informações para que possam ser acessadas e modificadas de forma eficiente. Domine esses conceitos e pense como um engenheiro de software.
        </Text>

        {/* Tópicos */}
        <Text style={styles.sectionTitle}>Tópicos do módulo</Text>

        {topicos.map((t) => (
          <View key={t.id} style={[styles.topicoCard, t.feito && styles.topicoCardFeito]}>

            {/* Linha principal */}
            <TouchableOpacity
              style={styles.topicoRow}
              onPress={() => toggleExpandido(t.id)}
              activeOpacity={0.8}
            >
              <TouchableOpacity
                style={[styles.checkCircle, t.feito && styles.checkCircleFeito]}
                onPress={() => toggleFeito(t.id)}
              >
                {t.feito && <Feather name="check" size={13} color="#fff" />}
              </TouchableOpacity>

              <View style={{ flex: 1 }}>
                <Text style={[styles.topicoTitulo, t.feito && styles.topicoTituloFeito]}>
                  {t.titulo}
                </Text>
                <Text style={styles.topicoDesc}>{t.descricao}</Text>
              </View>

              <View style={styles.topicoMeta}>
                <Text style={styles.topicoDuracao}>{t.duracao}</Text>
                <Feather
                  name={expandido === t.id ? "chevron-up" : "chevron-down"}
                  size={16}
                  color="#38BDF8"
                />
              </View>
            </TouchableOpacity>

            {/* Conteúdo expandido */}
            {expandido === t.id && (
              <View style={styles.expandido}>
                <Text style={styles.expandidoTexto}>{t.conteudo}</Text>

                {t.recursos.length > 0 && (
                  <View style={styles.recursosWrapper}>
                    <Text style={styles.recursosLabel}>📚 Recursos gratuitos</Text>
                    {t.recursos.map((r, i) => (
                      <TouchableOpacity
                        key={i}
                        style={styles.recursoBtn}
                        onPress={() => Linking.openURL(r.url)}
                      >
                        <Feather name="external-link" size={13} color="#38BDF8" style={{ marginRight: 8 }} />
                        <Text style={styles.recursoBtnText}>{r.label}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                )}

                <TouchableOpacity
                  style={[styles.marcarBtn, t.feito && styles.marcarBtnFeito]}
                  onPress={() => toggleFeito(t.id)}
                >
                  <Feather name={t.feito ? "x-circle" : "check-circle"} size={15} color="#fff" style={{ marginRight: 6 }} />
                  <Text style={styles.marcarBtnText}>
                    {t.feito ? "Desmarcar como concluído" : "Marcar como concluído"}
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
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
            <Text style={styles.mentorBtnSub}>Tire dúvidas ou peça exercícios práticos</Text>
          </View>
          <Feather name="arrow-right" size={18} color="#fff" />
        </TouchableOpacity>

        {/* Botão Concluir */}
        {progresso === 100 && (
          <TouchableOpacity style={styles.doneBtn} onPress={goBack} activeOpacity={0.85}>
            <Feather name="check-circle" size={18} color="#fff" style={{ marginRight: 8 }} />
            <Text style={styles.doneBtnText}>Módulo concluído! Voltar 🎉</Text>
          </TouchableOpacity>
        )}

      </ScrollView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#060D1F" },
  content: { paddingHorizontal: 24, paddingTop: 56, paddingBottom: 40 },

  bgGlow1: { position: "absolute", top: -60, right: -80, width: 260, height: 260, borderRadius: 130, backgroundColor: "#1E3A8A", opacity: 0.18 },
  bgGlow2: { position: "absolute", bottom: 100, left: -80, width: 220, height: 220, borderRadius: 110, backgroundColor: "#0369A1", opacity: 0.13 },

  header: { flexDirection: "row", alignItems: "center", marginBottom: 24, gap: 14 },
  backBtn: { width: 40, height: 40, borderRadius: 13, backgroundColor: "#0F1F3D", borderWidth: 1, borderColor: "#1E3A5F", alignItems: "center", justifyContent: "center" },
  categoria: { color: "#38BDF8", fontSize: 11, fontWeight: "700", letterSpacing: 1.5, marginBottom: 2 },
  titulo: { color: "#E2E8F0", fontSize: 22, fontWeight: "bold" },

  progressCard: { backgroundColor: "#0F1F3D", borderRadius: 18, padding: 18, marginBottom: 24, borderWidth: 1, borderColor: "#1E3A5F" },
  progressRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 10 },
  progressLabel: { color: "#94A3B8", fontSize: 13 },
  progressPercent: { color: "#38BDF8", fontWeight: "bold", fontSize: 13 },
  progressBarBg: { height: 8, backgroundColor: "#162033", borderRadius: 4, overflow: "hidden", marginBottom: 10 },
  progressBarFill: { height: 8, backgroundColor: "#0EA5E9", borderRadius: 4 },
  progressSub: { color: "#475569", fontSize: 12 },

  descricao: { color: "#64748B", fontSize: 14, lineHeight: 22, marginBottom: 28 },

  sectionTitle: { color: "#94A3B8", fontSize: 12, fontWeight: "700", letterSpacing: 1, textTransform: "uppercase", marginBottom: 14 },

  topicoCard: { backgroundColor: "#0F1F3D", borderRadius: 16, marginBottom: 10, borderWidth: 1, borderColor: "#1E3A5F", overflow: "hidden" },
  topicoCardFeito: { borderColor: "#0EA5E9", opacity: 0.85 },
  topicoRow: { flexDirection: "row", alignItems: "center", padding: 16, gap: 12 },
  checkCircle: { width: 28, height: 28, borderRadius: 14, borderWidth: 2, borderColor: "#1E3A5F", alignItems: "center", justifyContent: "center" },
  checkCircleFeito: { backgroundColor: "#0EA5E9", borderColor: "#0EA5E9" },
  topicoTitulo: { color: "#E2E8F0", fontWeight: "600", fontSize: 14, marginBottom: 3 },
  topicoTituloFeito: { textDecorationLine: "line-through", color: "#475569" },
  topicoDesc: { color: "#475569", fontSize: 12 },
  topicoMeta: { alignItems: "flex-end", gap: 4 },
  topicoDuracao: { color: "#334155", fontSize: 11 },

  expandido: { paddingHorizontal: 16, paddingBottom: 16, borderTopWidth: 1, borderTopColor: "#162033" },
  expandidoTexto: { color: "#94A3B8", fontSize: 13, lineHeight: 20, marginTop: 12, marginBottom: 14 },
  recursosWrapper: { marginBottom: 14 },
  recursosLabel: { color: "#64748B", fontSize: 12, marginBottom: 8 },
  recursoBtn: { flexDirection: "row", alignItems: "center", backgroundColor: "#162033", borderRadius: 10, padding: 10, marginBottom: 6 },
  recursoBtnText: { color: "#38BDF8", fontSize: 13 },
  marcarBtn: { flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: "#0EA5E9", borderRadius: 12, paddingVertical: 10 },
  marcarBtnFeito: { backgroundColor: "#334155" },
  marcarBtnText: { color: "#fff", fontWeight: "600", fontSize: 13 },

  mentorBtn: { flexDirection: "row", alignItems: "center", backgroundColor: "#0369A1", borderRadius: 18, padding: 18, marginTop: 24, marginBottom: 12, gap: 14, shadowColor: "#0EA5E9", shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.3, shadowRadius: 14, elevation: 10 },
  mentorBtnIcon: { width: 42, height: 42, borderRadius: 13, backgroundColor: "#0EA5E9", alignItems: "center", justifyContent: "center" },
  mentorBtnTitle: { color: "#fff", fontWeight: "bold", fontSize: 15, marginBottom: 3 },
  mentorBtnSub: { color: "#7DD3FC", fontSize: 12 },

  doneBtn: { flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: "#16A34A", paddingVertical: 16, borderRadius: 16, marginBottom: 10, shadowColor: "#22C55E", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 10, elevation: 8 },
  doneBtnText: { color: "#fff", fontWeight: "bold", fontSize: 15 },
});