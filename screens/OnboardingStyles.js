import { StyleSheet, Platform, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({

  // SPLASH 
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 28,
    paddingTop: Platform.OS === "ios" ? 60 : 40,
    paddingBottom: 40,
    overflow: 'hidden',
  },
  content: {
    width: "100%",
    alignItems: "center",
  },
  title: {
    color: "#F1F5F9",
    fontSize: 28,
    fontWeight: "900",
    textAlign: "center",
    lineHeight: 36,
    marginBottom: 12,
    letterSpacing: -0.5,
  },
  subtitle: {
    color: "#4A7FA5",
    fontSize: 15,
    textAlign: "center",
    lineHeight: 23,
    marginBottom: 36,
    fontWeight: "500",
  },

  
  featuresWrapper: {
    width: "100%",
    backgroundColor: "rgba(12, 26, 48, 0.85)",
    borderRadius: 24,
    padding: 22,
    marginBottom: 36,
    borderWidth: 1,
    borderColor: "rgba(14, 165, 233, 0.15)",
    position: "relative",
  },
  cornerTL: { position: "absolute", top: -1, left: -1, width: 18, height: 18, borderTopWidth: 2, borderLeftWidth: 2, borderColor: "#0EA5E9", borderTopLeftRadius: 24 },
  cornerTR: { position: "absolute", top: -1, right: -1, width: 18, height: 18, borderTopWidth: 2, borderRightWidth: 2, borderColor: "#0EA5E9", borderTopRightRadius: 24 },
  cornerBL: { position: "absolute", bottom: -1, left: -1, width: 18, height: 18, borderBottomWidth: 2, borderLeftWidth: 2, borderColor: "#0EA5E9", borderBottomLeftRadius: 24 },
  cornerBR: { position: "absolute", bottom: -1, right: -1, width: 18, height: 18, borderBottomWidth: 2, borderRightWidth: 2, borderColor: "#0EA5E9", borderBottomRightRadius: 24 },

  featureRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
    gap: 14,
  },
  featureIcon: {
    width: 46,
    height: 46,
    borderRadius: 14,
    backgroundColor: "rgba(14, 165, 233, 0.1)",
    borderWidth: 1,
    borderColor: "rgba(14, 165, 233, 0.2)",
    alignItems: "center",
    justifyContent: "center",
  },
  featureText: {
    flex: 1,
    color: "#94A3B8",
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "500",
  },

  
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0EA5E9",
    borderRadius: 20,
    paddingVertical: 18,
    paddingHorizontal: 40,
    width: "100%",
    shadowColor: "#0EA5E9",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.45,
    shadowRadius: 20,
    elevation: 12,
  },
  buttonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "800",
    letterSpacing: 0.3,
  },

  
  qContainer: {
    flexGrow: 1,
    paddingBottom: 40,
  },
  qInner: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Platform.OS === "ios" ? 56 : 36,
  },
  qHeading: {
    color: "#38BDF8",
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 2,
    textTransform: "uppercase",
    marginBottom: 20,
  },

  
  qCard: {
    backgroundColor: "rgba(12, 26, 48, 0.9)",
    borderRadius: 28,
    padding: 24,
    borderWidth: 1.5,
    borderColor: "rgba(14, 165, 233, 0.18)",
    marginBottom: 28,
    shadowColor: "#0EA5E9",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 8,
  },
  stepQuestion: {
    color: "#F1F5F9",
    fontSize: 20,
    fontWeight: "800",
    lineHeight: 28,
    marginBottom: 22,
    letterSpacing: -0.3,
  },

  // Input de texto
  textInput: {
    backgroundColor: "#060D1F",
    borderRadius: 16,
    paddingHorizontal: 18,
    paddingVertical: 16,
    color: "#E2E8F0",
    fontSize: 15,
    borderWidth: 1.5,
    borderColor: "#1E3A5F",
    fontWeight: "500",
  },
  textInputFocused: {
    borderColor: "#0EA5E9",
    backgroundColor: "#080F22",
    shadowColor: "#0EA5E9",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 4,
  },

  // Sim / Não
  ynRow: {
    flexDirection: "row",
    gap: 14,
  },
  ynBtn: {
    flex: 1,
    paddingVertical: 20,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#060D1F",
    borderWidth: 1.5,
    borderColor: "#1E3A5F",
  },
  ynBtnSelected: {
    backgroundColor: "rgba(14, 165, 233, 0.15)",
    borderColor: "#0EA5E9",
    shadowColor: "#0EA5E9",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 6,
  },
  ynBtnText: {
    color: "#475569",
    fontSize: 17,
    fontWeight: "700",
  },
  ynBtnTextSelected: {
    color: "#38BDF8",
  },

  // Níveis
  levelList: {
    gap: 10,
  },
  levelRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#060D1F",
    borderRadius: 16,
    padding: 14,
    borderWidth: 1.5,
    borderColor: "#1E3A5F",
    gap: 14,
  },
  levelRowSelected: {
    backgroundColor: "rgba(14, 165, 233, 0.1)",
    borderColor: "#0EA5E9",
    shadowColor: "#0EA5E9",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  levelBadge: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: "#0F1E3A",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#1E3A5F",
  },
  levelBadgeSelected: {
    backgroundColor: "#0EA5E9",
    borderColor: "#0EA5E9",
  },
  levelBadgeText: {
    color: "#4A7FA5",
    fontSize: 14,
    fontWeight: "800",
  },
  levelBadgeTextSelected: {
    color: "#fff",
  },
  levelLabel: {
    flex: 1,
    color: "#475569",
    fontSize: 13,
    fontWeight: "500",
    lineHeight: 19,
  },
  levelLabelSelected: {
    color: "#CBD5E1",
    fontWeight: "600",
  },

  // Botão continuar
  navRow: {
    marginTop: 4,
  },
  nextBtn: {
    backgroundColor: "#0EA5E9",
    borderRadius: 20,
    paddingVertical: 18,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#0EA5E9",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 18,
    elevation: 10,
  },
  nextBtnDisabled: {
    backgroundColor: "#0F1E3A",
    shadowOpacity: 0,
    elevation: 0,
    opacity: 0.5,
  },
  nextBtnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "800",
    letterSpacing: 0.3,
  },
});

export default styles;