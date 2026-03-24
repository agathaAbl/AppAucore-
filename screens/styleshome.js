import { StyleSheet, Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  // Layout base
  wrapper: { flex: 1, backgroundColor: "#060D1F" },
  container: { flex: 1 },
  content: { paddingHorizontal: 22, paddingTop: 60, paddingBottom: 30 },

  // Background glows
  bgGlow1: { position: "absolute", top: -80, right: -80, width: 300, height: 300, borderRadius: 150, backgroundColor: "#1E3A8A" },
  bgGlow2: { position: "absolute", bottom: 80, left: -80, width: 260, height: 260, borderRadius: 130, backgroundColor: "#0369A1" },
  bgGlow3: { position: "absolute", top: "45%", right: "20%", width: 180, height: 180, borderRadius: 90, backgroundColor: "#7C3AED", opacity: 0.05 },

  // Header
  header: { flexDirection: "row", alignItems: "center", marginBottom: 24 },
  greetingSmall: { color: "#64748B", fontSize: 13, marginBottom: 2 },
  greetingBig: { color: "#F1F5F9", fontSize: 24, fontWeight: "800" },
  avatarBtn: { width: 46, height: 46, borderRadius: 23, backgroundColor: "#0F1E3A", borderWidth: 1.5, borderColor: "#1E3A5F", alignItems: "center", justifyContent: "center" },
  avatarOnline: { position: "absolute", bottom: 2, right: 2, width: 10, height: 10, borderRadius: 5, backgroundColor: "#22C55E", borderWidth: 2, borderColor: "#060D1F" },

  // Mentor IA Banner
  mentorBanner: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: "#0C1E3A", borderRadius: 20, padding: 18, marginBottom: 24, borderWidth: 1.5, borderColor: "#0EA5E9", shadowColor: "#0EA5E9", shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.25, shadowRadius: 18, elevation: 10 },
  mentorLeft: { flexDirection: "row", alignItems: "center", gap: 14 },
  mentorIconBox: { width: 46, height: 46, borderRadius: 14, backgroundColor: "#0F1E3A", borderWidth: 1, borderColor: "#1E3A5F", alignItems: "center", justifyContent: "center" },
  mentorTitle: { color: "#F1F5F9", fontWeight: "700", fontSize: 16, marginBottom: 3 },
  mentorStatusRow: { flexDirection: "row", alignItems: "center", gap: 5 },
  onlineDot: { width: 7, height: 7, borderRadius: 4, backgroundColor: "#22C55E" },
  mentorStatus: { color: "#22C55E", fontSize: 12, fontWeight: "500" },
  mentorRight: { flexDirection: "row", alignItems: "center", gap: 6, backgroundColor: "#0EA5E9", paddingHorizontal: 14, paddingVertical: 9, borderRadius: 12, shadowColor: "#0EA5E9", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.4, shadowRadius: 10, elevation: 6 },
  mentorCta: { color: "#fff", fontWeight: "700", fontSize: 13 },

  // Campo de pesquisa
  searchBox: { flexDirection: "row", alignItems: "center", backgroundColor: "#0C1A30", borderRadius: 18, paddingHorizontal: 16, paddingVertical: 14, marginBottom: 24, borderWidth: 1.5, shadowColor: "#0EA5E9", shadowOffset: { width: 0, height: 4 }, shadowRadius: 16, elevation: 6 },
  searchInput: { flex: 1, color: "#E2E8F0", fontSize: 14, paddingVertical: 0 },
  searchSendBtn: { width: 32, height: 32, borderRadius: 10, backgroundColor: "#0EA5E9", alignItems: "center", justifyContent: "center", marginLeft: 8 },

  // Meta atual
  metaCard: { flexDirection: "row", alignItems: "center", backgroundColor: "#0D1B33", borderRadius: 20, padding: 18, marginBottom: 28, borderWidth: 1, borderColor: "#1A2F50", shadowColor: "#F59E0B", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.1, shadowRadius: 16, elevation: 6 },
  metaIconBox: { width: 44, height: 44, borderRadius: 13, backgroundColor: "#F59E0B18", alignItems: "center", justifyContent: "center", marginRight: 14, borderWidth: 1, borderColor: "#F59E0B30" },
  metaLabel: { color: "#64748B", fontSize: 11, fontWeight: "600", textTransform: "uppercase", letterSpacing: 0.8, marginBottom: 4 },
  metaTitle: { color: "#E2E8F0", fontWeight: "700", fontSize: 14 },
  metaArrow: { width: 32, height: 32, borderRadius: 10, backgroundColor: "#0F1E3A", alignItems: "center", justifyContent: "center", borderWidth: 1, borderColor: "#1E3A5F" },

  // Section title
  sectionTitle: { color: "#4A7FA5", fontSize: 11, fontWeight: "700", letterSpacing: 1.2, textTransform: "uppercase", marginBottom: 12 },

  // Progresso
  progressCard: { backgroundColor: "#0D1B33", borderRadius: 20, padding: 20, marginBottom: 28, borderWidth: 1, borderColor: "#1A2F50" },
  progressHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 12 },
  progressLabelRow: { flexDirection: "row", alignItems: "center", gap: 8 },
  progressDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: "#0EA5E9" },
  progressLabel: { color: "#CBD5E1", fontSize: 14, fontWeight: "600" },
  progressPercent: { color: "#38BDF8", fontWeight: "800", fontSize: 16 },
  progressBarBg: { height: 10, backgroundColor: "#0F1E3A", borderRadius: 6, overflow: "hidden", marginBottom: 10 },
  progressBarFill: { height: 10, backgroundColor: "#0EA5E9", borderRadius: 6, overflow: "hidden" },
  progressShine: { position: "absolute", top: 0, left: 0, right: 0, height: 4, backgroundColor: "rgba(255,255,255,0.2)", borderRadius: 6 },
  progressHint: { color: "#334155", fontSize: 12 },

  // Continuar
  continueCard: { flexDirection: "row", alignItems: "center", backgroundColor: "#0D1B33", borderRadius: 20, padding: 18, marginBottom: 16, borderWidth: 1, borderColor: "#1A2F50", shadowColor: "#0EA5E9", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.12, shadowRadius: 16, elevation: 6, gap: 14 },
  continuePlay: { width: 46, height: 46, borderRadius: 14, backgroundColor: "#0EA5E9", alignItems: "center", justifyContent: "center", shadowColor: "#0EA5E9", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.4, shadowRadius: 10, elevation: 6 },
  continueTitle: { color: "#F1F5F9", fontWeight: "700", fontSize: 14, marginBottom: 4 },
  continueSubtitle: { color: "#4A7FA5", fontSize: 12 },
  continueBadge: { backgroundColor: "#0EA5E918", borderRadius: 8, paddingHorizontal: 10, paddingVertical: 5, borderWidth: 1, borderColor: "#0EA5E930" },
  continueBadgeText: { color: "#38BDF8", fontSize: 11, fontWeight: "600" },

  // Bottom Tab Bar
  tabBar: { flexDirection: "row", backgroundColor: "#090F20", borderTopWidth: 1, borderTopColor: "#0F1E3A", paddingBottom: Platform.OS === "ios" ? 20 : 8, paddingTop: 10, paddingHorizontal: 8 },
  tabItem: { flex: 1, alignItems: "center", justifyContent: "center", paddingVertical: 4, position: "relative" },
  tabItemPremium: { backgroundColor: "#FBBF24", borderRadius: 14, marginHorizontal: 4, paddingVertical: 8 },
  tabLabel: { color: "#334155", fontSize: 10, fontWeight: "600", marginTop: 4 },
  tabActiveDot: { position: "absolute", bottom: -2, width: 4, height: 4, borderRadius: 2, backgroundColor: "#38BDF8" },

  // Títulos de página
  pageTitle: { color: "#F1F5F9", fontSize: 22, fontWeight: "800", marginBottom: 6, marginTop: 8 },
  pageSubtitle: { color: "#475569", fontSize: 13, marginBottom: 24 },

  // Histórico
  historicoCard: { flexDirection: "row", alignItems: "center", backgroundColor: "#0D1B33", borderRadius: 16, padding: 16, marginBottom: 10, borderWidth: 1, borderColor: "#1A2F50", gap: 12 },
  historicoIcon: { width: 36, height: 36, borderRadius: 10, backgroundColor: "#0F1E3A", alignItems: "center", justifyContent: "center", borderWidth: 1, borderColor: "#1E3A5F" },
  historicoQuery: { color: "#E2E8F0", fontSize: 13, fontWeight: "600", marginBottom: 3 },
  historicoData: { color: "#475569", fontSize: 11 },
  clearBtn: { flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: 16, paddingVertical: 12 },
  clearBtnText: { color: "#EF4444", fontSize: 13, fontWeight: "600" },

  // Desempenho / Gamificação
  xpCard: { flexDirection: "row", backgroundColor: "#0D1B33", borderRadius: 20, padding: 20, marginBottom: 14, borderWidth: 1, borderColor: "#1A2F50", alignItems: "center" },
  xpLeft: { flex: 1 },
  xpLabel: { color: "#475569", fontSize: 11, marginBottom: 4 },
  xpNivel: { color: "#F1F5F9", fontSize: 20, fontWeight: "800", marginBottom: 2 },
  xpSub: { color: "#38BDF8", fontSize: 12 },
  xpRight: { alignItems: "center" },
  xpPontos: { color: "#FBBF24", fontSize: 28, fontWeight: "900" },
  xpPontosLabel: { color: "#64748B", fontSize: 11 },
  xpBarCard: { backgroundColor: "#0D1B33", borderRadius: 16, padding: 16, marginBottom: 20, borderWidth: 1, borderColor: "#1A2F50" },
  xpBarRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 10 },
  xpBarLabel: { color: "#94A3B8", fontSize: 13 },
  xpBarPct: { color: "#38BDF8", fontWeight: "700" },
  xpBarBg: { height: 8, backgroundColor: "#0F1E3A", borderRadius: 4, overflow: "hidden", marginBottom: 8 },
  xpBarFill: { height: 8, backgroundColor: "#A78BFA", borderRadius: 4 },
  xpBarHint: { color: "#475569", fontSize: 11 },
  statsRow: { flexDirection: "row", gap: 10, marginBottom: 24 },
  statCard: { flex: 1, backgroundColor: "#0D1B33", borderRadius: 16, padding: 16, alignItems: "center", borderWidth: 1, borderColor: "#1A2F50" },
  statValor: { fontSize: 22, fontWeight: "900", marginBottom: 4 },
  statLabel: { color: "#475569", fontSize: 11, fontWeight: "600" },
  conquistaCard: { flexDirection: "row", alignItems: "center", backgroundColor: "#0D1B33", borderRadius: 16, padding: 14, marginBottom: 10, borderWidth: 1, borderColor: "#1A2F50", gap: 12 },
  conquistaEmoji: { fontSize: 28 },
  conquistaTitulo: { color: "#E2E8F0", fontSize: 13, fontWeight: "700", marginBottom: 2 },
  conquistaDesc: { color: "#475569", fontSize: 12 },
  conquistaBadge: { backgroundColor: "#10B98118", borderRadius: 8, paddingHorizontal: 10, paddingVertical: 5, borderWidth: 1, borderColor: "#10B98130" },
  conquistaBadgeText: { color: "#10B981", fontSize: 11, fontWeight: "600" },

  // Modal Perfil
  modalOverlay: { flex: 1, backgroundColor: "rgba(0,0,0,0.75)", justifyContent: "flex-end" },
  modalCard: { backgroundColor: "#0C1A30", borderTopLeftRadius: 28, borderTopRightRadius: 28, padding: 28, borderWidth: 1, borderColor: "#1E3A5F" },
  modalHandle: { width: 40, height: 4, borderRadius: 2, backgroundColor: "#1E3A5F", alignSelf: "center", marginBottom: 20 },
  modalTitulo: { color: "#F1F5F9", fontSize: 20, fontWeight: "800", marginBottom: 20, textAlign: "center" },
  avatarGrande: { width: 80, height: 80, borderRadius: 40, backgroundColor: "#0F1E3A", borderWidth: 2, borderColor: "#1E3A5F", alignItems: "center", justifyContent: "center", alignSelf: "center", marginBottom: 24 },
  inputLabel: { color: "#64748B", fontSize: 11, fontWeight: "700", letterSpacing: 1, textTransform: "uppercase", marginBottom: 8 },
  inputField: { backgroundColor: "#0F1E3A", borderRadius: 14, padding: 14, color: "#E2E8F0", fontSize: 14, borderWidth: 1, borderColor: "#1E3A5F", marginBottom: 16 },
  saveBtn: { flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: "#0EA5E9", borderRadius: 16, paddingVertical: 16, marginTop: 8, marginBottom: 10 },
  saveBtnText: { color: "#fff", fontWeight: "800", fontSize: 15 },
  cancelBtn: { alignItems: "center", paddingVertical: 10 },
  cancelBtnText: { color: "#475569", fontSize: 14 },

  // Modal Premium
  premiumCard: { backgroundColor: "#0C1A30", borderRadius: 28, padding: 28, marginHorizontal: 20, borderWidth: 1.5, borderColor: "rgba(251,191,36,0.3)", alignItems: "center" },
  premiumIconWrap: { width: 72, height: 72, borderRadius: 22, backgroundColor: "rgba(251,191,36,0.12)", borderWidth: 2, borderColor: "rgba(251,191,36,0.3)", alignItems: "center", justifyContent: "center", marginBottom: 16 },
  premiumTitulo: { color: "#F1F5F9", fontSize: 22, fontWeight: "800", marginBottom: 10 },
  premiumSub: { color: "#64748B", fontSize: 14, textAlign: "center", lineHeight: 22, marginBottom: 20 },
  premiumBeneficios: { width: "100%", marginBottom: 20 },
  beneficioRow: { flexDirection: "row", alignItems: "center", marginBottom: 10 },
  beneficioText: { color: "#CBD5E1", fontSize: 14 },
  premiumPrecos: { flexDirection: "row", gap: 10, width: "100%", marginBottom: 20 },
  precoCard: { flex: 1, backgroundColor: "#0F1E3A", borderRadius: 16, padding: 14, alignItems: "center", borderWidth: 1, borderColor: "#1E3A5F" },
  precoDestaque: { borderColor: "#FBBF24", backgroundColor: "rgba(251,191,36,0.08)" },
  precoPopular: { color: "#FBBF24", fontSize: 9, fontWeight: "700", letterSpacing: 0.5, marginBottom: 6 },
  precoEconomia: { color: "#10B981", fontSize: 9, fontWeight: "700", letterSpacing: 0.5, marginBottom: 6 },
  precoValor: { color: "#F1F5F9", fontSize: 20, fontWeight: "900" },
  precoPeriodo: { color: "#475569", fontSize: 11 },
  premiumBtn: { flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: "#FBBF24", borderRadius: 16, paddingVertical: 16, width: "100%", marginBottom: 12 },
  premiumBtnText: { color: "#000", fontWeight: "800", fontSize: 15 },
  premiumFechar: { paddingVertical: 8 },
  premiumFecharText: { color: "#475569", fontSize: 14 },
});

export default styles;