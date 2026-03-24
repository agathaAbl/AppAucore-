import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#070F20",
  },

  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingVertical: 40,
    justifyContent: "center",
  },

  backButton: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    backgroundColor: "#0C1A30",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#172B4A",
  },

  backText: {
    color: "#7DD3FC",
    fontSize: 14,
    marginLeft: 7,
    fontWeight: "600",
  },

  title: {
    color: "#F1F5F9",
    fontSize: 26,
    fontWeight: "800",
    marginBottom: 28,
    letterSpacing: 0.2,
    textAlign: "center",
  },

  card: {
    backgroundColor: "#0C1A30",
    borderRadius: 24,
    padding: 24,
    borderWidth: 1.5,
    borderColor: "#38BDF8",
    shadowColor: "#38BDF8",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 12,
  },

  label: {
    color: "#4A7FA5",
    fontSize: 13,
    fontWeight: "600",
    marginBottom: 8,
    letterSpacing: 0.5,
    textTransform: "uppercase",
  },

  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0A1628",
    borderRadius: 14,
    marginBottom: 16,
    paddingHorizontal: 16,
    borderWidth: 1.5,
    borderColor: "#1E3A5F",
    minHeight: 56,
  },

  inputFocused: {
    borderColor: "#38BDF8",
    shadowColor: "#38BDF8",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 6,
  },

  inputBlurred: {
    borderColor: "#1E3A5F",
  },

  inputIcon: {
    marginRight: 12,
  },

  input: {
    flex: 1,
    paddingVertical: 16,
    color: "#E2E8F0",
    fontSize: 15,
  },

  continueButton: {
    backgroundColor: "#0EA5E9",
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 8,
    borderWidth: 1.5,
    borderColor: "#7DD3FC",
    shadowColor: "#0EA5E9",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.5,
    shadowRadius: 16,
    elevation: 10,
  },

  continueText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 15,
    letterSpacing: 0.3,
  },

  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 32,
  },

  footerText: {
    color: "#172B4A",
    fontSize: 11,
    marginHorizontal: 10,
    fontWeight: "500",
  },

});

export default styles;