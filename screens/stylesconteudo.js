import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  // Layout base
  root: { flex: 1 },
  scroll: { paddingHorizontal: 24, paddingTop: 56, paddingBottom: 48 },

  // Header
  header: { flexDirection: "row", alignItems: "center", marginBottom: 20, gap: 14 },
  backBtn: { width: 40, height: 40, borderRadius: 13, backgroundColor: "rgba(15,31,61,0.9)", borderWidth: 1, borderColor: "#1E3A5F", alignItems: "center", justifyContent: "center" },
  headerSub: { color: "#38BDF8", fontSize: 11, fontWeight: "700", letterSpacing: 1.5, marginBottom: 2 },
  headerTitle: { color: "#E2E8F0", fontSize: 20, fontWeight: "800" },
  premiumBadge: { flexDirection: "row", alignItems: "center", backgroundColor: "rgba(251,191,36,0.12)", borderRadius: 20, paddingHorizontal: 12, paddingVertical: 6, borderWidth: 1, borderColor: "rgba(251,191,36,0.3)", gap: 5 },
  premiumBadgeText: { color: "#FBBF24", fontSize: 12, fontWeight: "700" },

  // Free bar
  freeBar: { flexDirection: "row", alignItems: "center", backgroundColor: "rgba(11,18,40,0.85)", borderRadius: 14, padding: 14, marginBottom: 16, borderWidth: 1, borderColor: "#1E3A5F" },
  freeLabel: { color: "#64748B", fontSize: 12, marginBottom: 8 },
  freeDotsRow: { flexDirection: "row", gap: 6 },
  freeDot: { width: 28, height: 6, borderRadius: 3, backgroundColor: "#1E3A5F" },
  freeDotUsed: { backgroundColor: "#0EA5E9" },
  freeCount: { color: "#38BDF8", fontSize: 12, fontWeight: "700" },

  // Progresso
  progressCard: { backgroundColor: "rgba(11,18,40,0.85)", borderRadius: 18, padding: 18, marginBottom: 28, borderWidth: 1, borderColor: "#1E3A5F" },
  progressRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 10 },
  progressLabel: { color: "#94A3B8", fontSize: 13 },
  progressPct: { color: "#38BDF8", fontWeight: "bold", fontSize: 13 },
  progressBg: { height: 8, backgroundColor: "#162033", borderRadius: 4, overflow: "hidden", marginBottom: 10 },
  progressFill: { height: 8, backgroundColor: "#0EA5E9", borderRadius: 4 },
  progressSub: { color: "#475569", fontSize: 12 },

  sectionTitle: { color: "#94A3B8", fontSize: 12, fontWeight: "700", letterSpacing: 1, textTransform: "uppercase", marginBottom: 20 },

  // Roadmap
  roadmapContainer: { position: "relative", marginBottom: 32 },
  roadmapRow: { flexDirection: "row", alignItems: "center", marginBottom: 28, position: "relative" },
  linha: { position: "absolute", left: 19, top: 40, width: 2, height: 38, backgroundColor: "#1E3A5F", zIndex: 0 },
  no: { width: 40, height: 40, borderRadius: 20, backgroundColor: "#0C1A30", borderWidth: 2, borderColor: "#1E3A5F", alignItems: "center", justifyContent: "center", zIndex: 1, marginRight: 14, flexShrink: 0 },
  noFeito: { backgroundColor: "#0EA5E9", borderColor: "#7DD3FC" },
  noNum: { color: "#38BDF8", fontWeight: "700", fontSize: 14 },
  balao: { flex: 1, backgroundColor: "rgba(12,26,48,0.92)", borderRadius: 20, padding: 20, borderWidth: 1.5, borderColor: "#1E3A5F", shadowColor: "#0EA5E9", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 8, elevation: 4 },
  balaoDireita: { borderColor: "#1E3A5F" },
  balaoFeito: { borderColor: "#0EA5E9", opacity: 0.85 },
  balaoHeader: { flexDirection: "row", alignItems: "center", marginBottom: 6, gap: 8 },
  nivelDot: { width: 8, height: 8, borderRadius: 4 },
  balaoTitulo: { color: "#E2E8F0", fontWeight: "700", fontSize: 16, flex: 1 },
  balaoDesc: { color: "#64748B", fontSize: 13, lineHeight: 20, marginBottom: 12 },
  balaoFooter: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  balaoDuracao: { color: "#334155", fontSize: 11 },
  avalRow: { flexDirection: "row", gap: 8 },
  avalBtn: { padding: 4 },

  // Mentor
  mentorBtn: { flexDirection: "row", alignItems: "center", backgroundColor: "#0369A1", borderRadius: 18, padding: 18, marginBottom: 12, gap: 14, borderWidth: 1, borderColor: "#0EA5E9", shadowColor: "#0EA5E9", shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.3, shadowRadius: 14, elevation: 10 },
  mentorIcon: { width: 42, height: 42, borderRadius: 13, backgroundColor: "#0EA5E9", alignItems: "center", justifyContent: "center" },
  mentorTitle: { color: "#fff", fontWeight: "bold", fontSize: 15, marginBottom: 3 },
  mentorSub: { color: "#7DD3FC", fontSize: 12 },

  // Modal detalhe
  modalOverlay: { flex: 1, backgroundColor: "rgba(0,0,0,0.7)", justifyContent: "center", alignItems: "center", paddingHorizontal: 24 },
  modalCard: { backgroundColor: "#0C1A30", borderRadius: 24, padding: 24, width: "100%", borderWidth: 1.5, borderColor: "#1E3A5F" },
  modalHeader: { flexDirection: "row", alignItems: "center", marginBottom: 8, gap: 10 },
  modalTitulo: { color: "#E2E8F0", fontWeight: "800", fontSize: 18, flex: 1 },
  modalDuracao: { color: "#475569", fontSize: 12, marginBottom: 12 },
  modalDetalhe: { color: "#94A3B8", fontSize: 14, lineHeight: 22, marginBottom: 20 },
  modalRecursosLabel: { color: "#64748B", fontSize: 12, marginBottom: 10 },
  recursoRow: { flexDirection: "row", alignItems: "center", backgroundColor: "#162033", borderRadius: 10, padding: 10, marginBottom: 6 },
  recursoText: { color: "#38BDF8", fontSize: 13 },
  modalConcluirBtn: { flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: "#0EA5E9", borderRadius: 14, paddingVertical: 14, marginTop: 16, borderWidth: 1.5, borderColor: "#7DD3FC" },
  modalConcluirBtnFeito: { backgroundColor: "#334155", borderColor: "#475569" },
  modalConcluirText: { color: "#fff", fontWeight: "700", fontSize: 14 },

  // Modal Premium
  premiumCard: { backgroundColor: "#0C1A30", borderRadius: 28, padding: 28, width: "100%", borderWidth: 1.5, borderColor: "rgba(251,191,36,0.3)", alignItems: "center" },
  premiumIconWrap: { width: 72, height: 72, borderRadius: 22, backgroundColor: "rgba(251,191,36,0.12)", borderWidth: 2, borderColor: "rgba(251,191,36,0.3)", alignItems: "center", justifyContent: "center", marginBottom: 16 },
  premiumTitulo: { color: "#F1F5F9", fontSize: 22, fontWeight: "800", marginBottom: 10 },
  premiumSub: { color: "#64748B", fontSize: 14, textAlign: "center", lineHeight: 22, marginBottom: 20 },
  premiumBeneficios: { width: "100%", marginBottom: 24 },
  beneficioRow: { flexDirection: "row", alignItems: "center", marginBottom: 10 },
  beneficioText: { color: "#CBD5E1", fontSize: 14 },
  premiumBtn: { flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: "#FBBF24", borderRadius: 16, paddingVertical: 16, width: "100%", marginBottom: 12 },
  premiumBtnText: { color: "#000", fontWeight: "800", fontSize: 15 },
  premiumFechar: { paddingVertical: 8 },
  premiumFecharText: { color: "#475569", fontSize: 14 },
});