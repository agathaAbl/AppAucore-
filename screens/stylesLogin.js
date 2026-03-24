import { StyleSheet, Platform, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({

  // ScrollView
  scroll: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: Platform.OS === "ios" ? 60 : 44,
    paddingBottom: 40,
  },

  // Logo
  logoContainer: {
    alignItems: "center",
    marginBottom: 36,
    overflow: 'hidden',
  },
  logo: {
    width: 180,
    height: 120,
    resizeMode: "contain",
  },

  // Card do formulário
  card: {
    backgroundColor: "rgba(12, 26, 48, 0.9)",
    borderRadius: 28,
    padding: 24,
    borderWidth: 1.5,
    borderColor: "rgba(14, 165, 233, 0.15)",
    marginBottom: 28,
    shadowColor: "#0EA5E9",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 8,
  },

  // Inputs
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#060D1F",
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderWidth: 1.5,
    borderColor: "#1E3A5F",
  },
  inputFocused: {
    borderColor: "#0EA5E9",
    backgroundColor: "#080F22",
    shadowColor: "#0EA5E9",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 4,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: "#E2E8F0",
    fontSize: 15,
    fontWeight: "500",
    paddingVertical: 0,
  },

  // Esqueceu a senha
  forgotText: {
    color: "#38BDF8",
    fontSize: 13,
    fontWeight: "600",
  },

  // Botão entrar
  button: {
    backgroundColor: "#0EA5E9",
    borderRadius: 18,
    paddingVertical: 17,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#0EA5E9",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.45,
    shadowRadius: 18,
    elevation: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "800",
    letterSpacing: 0.3,
  },

  // Divisor "ou"
  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    gap: 12,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#1E3A5F",
  },
  dividerText: {
    color: "#334155",
    fontSize: 13,
    fontWeight: "600",
  },

  // Botões sociais
  socialButtonWrapper: {
    marginBottom: 12,
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(12, 26, 48, 0.9)",
    borderRadius: 18,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderWidth: 1.5,
    borderColor: "#1E3A5F",
  },
  socialText: {
    color: "#CBD5E1",
    fontSize: 15,
    fontWeight: "600",
  },

  // Criar conta
  registerRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },
  registerText: {
    color: "#475569",
    fontSize: 14,
  },
  registerLink: {
    color: "#38BDF8",
    fontSize: 14,
    fontWeight: "700",
  },
});

export default styles;