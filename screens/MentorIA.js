import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Animated,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const INITIAL_MESSAGES = [
  {
    id: "1",
    from: "ai",
    text: "Olá! 👋 Sou seu mentor digital. Estou aqui para te guiar no aprendizado de forma personalizada.\n\nMe conta: qual é o seu objetivo de aprendizado hoje?",
  },
];

const SUGGESTIONS = [
  "Quero aprender programação do zero",
  "Me ajuda a estudar para concurso",
  "Quero entender sobre finanças",
  "Criar um roadmap de UX Design",
];

function getMentorResponse(userMsg) {
  const msg = userMsg.toLowerCase();

  if (msg.includes("programação") || msg.includes("programacao") || msg.includes("código") || msg.includes("dev")) {
    return `Ótima escolha! 🚀 Vou montar um roadmap personalizado para você.\n\n**Seu plano de aprendizado:**\n\n📌 Milestone 1 — Fundamentos\n• Lógica de programação\n• Algoritmos básicos\n• Git e versionamento\n\n📌 Milestone 2 — Linguagem\n• Python ou JavaScript (me diz qual prefere!)\n• Estruturas de dados\n• Orientação a objetos\n\n📌 Milestone 3 — Prática\n• Projetos reais\n• Portfólio no GitHub\n\nTempo estimado: 4-6 meses com 1h/dia 🎯\n\nPor onde quer começar?`;
  }

  if (msg.includes("concurso")) {
    return `Entendido! 📚 Concursos exigem método e consistência.\n\n**Plano para concursos:**\n\n📌 Fase 1 — Diagnóstico\n• Qual concurso você mira?\n• Quais matérias tem mais dificuldade?\n\n📌 Fase 2 — Base Teórica\n• Português e Raciocínio Lógico (sempre cobrados)\n• Matérias específicas do edital\n\n📌 Fase 3 — Prática intensa\n• Resolução de questões anteriores\n• Simulados cronometrados\n\nMe conta qual área (federal, estadual, área de TI, jurídica...) para personalizar mais! 🎯`;
  }

  if (msg.includes("financ") || msg.includes("dinheiro") || msg.includes("invest")) {
    return `Excelente! 💰 Educação financeira muda vidas.\n\n**Roadmap Financeiro:**\n\n📌 Módulo 1 — Base\n• Como o dinheiro funciona\n• Orçamento pessoal e controle de gastos\n• Dívidas: como sair e não voltar\n\n📌 Módulo 2 — Investimentos\n• Renda fixa (Tesouro Direto, CDB)\n• Renda variável (ações, FIIs)\n• Fundos e ETFs\n\n📌 Módulo 3 — Independência\n• Reserva de emergência\n• Construção de patrimônio\n• Aposentadoria antecipada (FIRE)\n\nQual é sua situação hoje? Endividado, zerado ou já investe? 😊`;
  }

  if (msg.includes("ux") || msg.includes("design") || msg.includes("ui")) {
    return `Design é arte + ciência! 🎨\n\n**Roadmap UX/UI Design:**\n\n📌 Fundamentos\n• Princípios de design visual\n• Tipografia e cor\n• Psicologia do usuário\n\n📌 Ferramentas\n• Figma (essencial!)\n• Prototipagem\n• Design system\n\n📌 Processo UX\n• Research e entrevistas\n• Wireframes e fluxos\n• Testes de usabilidade\n\n📌 Portfólio\n• 3 estudos de caso reais\n• Behance e LinkedIn ativos\n\nVocê já tem alguma experiência com design ou é do zero?`;
  }

  return `Entendi seu objetivo! 🎯 Vou criar um plano personalizado para você.\n\nPara montar o melhor roadmap possível, me conta:\n\n1️⃣ Qual é seu nível atual nesse assunto?\n   • Iniciante / Intermediário / Avançado\n\n2️⃣ Quanto tempo por dia você tem disponível?\n   • 30min / 1h / 2h ou mais\n\n3️⃣ Qual é o seu prazo ou objetivo final?\n\nCom essas informações, crio um plano sob medida pra você! 💪`;
}

export default function MentorIA({ navigation }) {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    setTimeout(() => scrollRef.current?.scrollToEnd({ animated: true }), 100);
  }, [messages, isTyping]);

  const sendMessage = (text) => {
    const userText = text || input.trim();
    if (!userText) return;

    const userMsg = { id: Date.now().toString(), from: "user", text: userText };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const aiText = getMentorResponse(userText);
      const aiMsg = { id: (Date.now() + 1).toString(), from: "ai", text: aiText };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1500);
  };

  const renderMessage = (msg) => {
    const isAI = msg.from === "ai";
    return (
      <View
        key={msg.id}
        style={[styles.msgRow, isAI ? styles.msgRowAI : styles.msgRowUser]}
      >
        {isAI && (
          <View style={styles.aiAvatar}>
            <Feather name="cpu" size={14} color="#38BDF8" />
          </View>
        )}
        <View style={[styles.bubble, isAI ? styles.bubbleAI : styles.bubbleUser]}>
          <Text style={[styles.bubbleText, isAI ? styles.bubbleTextAI : styles.bubbleTextUser]}>
            {msg.text}
          </Text>
        </View>
      </View>
    );
  };

  return (
    // ✅ backgroundColor aqui garante fundo escuro em toda a tela
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#060D1F" }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={90}
    >
      <Animated.View style={[styles.container, { opacity: fadeAnim }]}>

        <View style={styles.bgGlow1} />
        <View style={styles.bgGlow2} />

        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation?.goBack()} style={styles.backBtn}>
            <Feather name="arrow-left" size={20} color="#38BDF8" />
          </TouchableOpacity>
          <View style={styles.headerInfo}>
            <View style={styles.headerAvatar}>
              <Feather name="cpu" size={18} color="#38BDF8" />
            </View>
            <View>
              <Text style={styles.headerName}>Mentor IA</Text>
              <View style={styles.onlineRow}>
                <View style={styles.onlineDot} />
                <Text style={styles.onlineText}>online agora</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.headerAction}>
            <Feather name="more-vertical" size={20} color="#64748B" />
          </TouchableOpacity>
        </View>

        {/* Mensagens */}
        <ScrollView
          ref={scrollRef}
          style={styles.chat}
          contentContainerStyle={styles.chatContent}
          showsVerticalScrollIndicator={false}
        >
          {messages.map(renderMessage)}

          {isTyping && (
            <View style={[styles.msgRow, styles.msgRowAI]}>
              <View style={styles.aiAvatar}>
                <Feather name="cpu" size={14} color="#38BDF8" />
              </View>
              <View style={[styles.bubble, styles.bubbleAI, styles.typingBubble]}>
                <ActivityIndicator size="small" color="#38BDF8" />
                <Text style={styles.typingText}>Mentor pensando...</Text>
              </View>
            </View>
          )}

          {messages.length === 1 && !isTyping && (
            <View style={styles.suggestionsWrapper}>
              <Text style={styles.suggestionsLabel}>Sugestões para começar:</Text>
              {SUGGESTIONS.map((s, i) => (
                <TouchableOpacity
                  key={i}
                  style={styles.suggestionChip}
                  onPress={() => sendMessage(s)}
                >
                  <Feather name="zap" size={13} color="#38BDF8" style={{ marginRight: 8 }} />
                  <Text style={styles.suggestionText}>{s}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </ScrollView>

        {/* Input */}
        <View style={styles.inputArea}>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Pergunte ao seu mentor..."
              placeholderTextColor="#334155"
              value={input}
              onChangeText={setInput}
              multiline
              maxLength={500}
            />
            <TouchableOpacity
              style={[styles.sendBtn, !input.trim() && styles.sendBtnDisabled]}
              onPress={() => sendMessage()}
              disabled={!input.trim()}
            >
              <Feather name="send" size={18} color={input.trim() ? "#fff" : "#334155"} />
            </TouchableOpacity>
          </View>
        </View>

      </Animated.View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#060D1F",
  },

  bgGlow1: {
    position: "absolute",
    top: -40,
    right: -60,
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: "#1E3A8A",
    opacity: 0.18,
  },
  bgGlow2: {
    position: "absolute",
    bottom: 80,
    left: -60,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "#0369A1",
    opacity: 0.13,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 56,
    paddingBottom: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#0F1F3D",
  },
  backBtn: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: "#0F1F3D",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  headerInfo: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  headerAvatar: {
    width: 40,
    height: 40,
    borderRadius: 14,
    backgroundColor: "#0F1F3D",
    borderWidth: 1,
    borderColor: "#1E3A5F",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  headerName: {
    color: "#E2E8F0",
    fontWeight: "bold",
    fontSize: 16,
  },
  onlineRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
  },
  onlineDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: "#22C55E",
    marginRight: 5,
  },
  onlineText: {
    color: "#22C55E",
    fontSize: 12,
  },
  headerAction: {
    padding: 4,
  },

  chat: {
    flex: 1,
  },
  chatContent: {
    padding: 20,
    paddingBottom: 10,
  },

  msgRow: {
    flexDirection: "row",
    marginBottom: 16,
    alignItems: "flex-end",
  },
  msgRowAI: {
    justifyContent: "flex-start",
  },
  msgRowUser: {
    justifyContent: "flex-end",
  },
  aiAvatar: {
    width: 30,
    height: 30,
    borderRadius: 10,
    backgroundColor: "#0F1F3D",
    borderWidth: 1,
    borderColor: "#1E3A5F",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    marginBottom: 2,
  },
  bubble: {
    maxWidth: "78%",
    borderRadius: 18,
    padding: 14,
  },
  bubbleAI: {
    backgroundColor: "#0F1F3D",
    borderWidth: 1,
    borderColor: "#1E3A5F",
    borderBottomLeftRadius: 4,
  },
  bubbleUser: {
    backgroundColor: "#0EA5E9",
    borderBottomRightRadius: 4,
    shadowColor: "#0EA5E9",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 6,
  },
  bubbleText: {
    fontSize: 14,
    lineHeight: 21,
  },
  bubbleTextAI: {
    color: "#CBD5E1",
  },
  bubbleTextUser: {
    color: "#fff",
    fontWeight: "500",
  },

  typingBubble: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  typingText: {
    color: "#38BDF8",
    fontSize: 13,
    marginLeft: 8,
    fontStyle: "italic",
  },

  suggestionsWrapper: {
    marginTop: 8,
    marginBottom: 4,
  },
  suggestionsLabel: {
    color: "#475569",
    fontSize: 12,
    marginBottom: 10,
    marginLeft: 4,
  },
  suggestionChip: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0F1F3D",
    borderWidth: 1,
    borderColor: "#1E3A5F",
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 14,
    marginBottom: 8,
  },
  suggestionText: {
    color: "#94A3B8",
    fontSize: 13,
    flex: 1,
  },

  inputArea: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    paddingBottom: Platform.OS === "ios" ? 28 : 16,
    borderTopWidth: 1,
    borderTopColor: "#0F1F3D",
    backgroundColor: "#060D1F",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "flex-end",
    backgroundColor: "#0F1F3D",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#1E3A5F",
    paddingLeft: 16,
    paddingRight: 6,
    paddingVertical: 6,
  },
  input: {
    flex: 1,
    color: "#E2E8F0",
    fontSize: 15,
    maxHeight: 100,
    paddingVertical: 8,
  },
  sendBtn: {
    width: 40,
    height: 40,
    borderRadius: 13,
    backgroundColor: "#0EA5E9",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#0EA5E9",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 6,
  },
  sendBtnDisabled: {
    backgroundColor: "#0F1F3D",
    shadowOpacity: 0,
    elevation: 0,
  },
});