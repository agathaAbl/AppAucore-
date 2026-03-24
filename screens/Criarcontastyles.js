import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#060D1F",
  },

  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 56,
    paddingBottom: 40,
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
    marginBottom: 32,
  },

  backText: {
    color: "#7DD3FC",
    fontSize: 14,
    alignSelf: "flex-start",
    marginLeft: 7,
    fontWeight: "600",
  },

  card: {
    backgroundColor: "#0C1A30",
    borderRadius: 24,
    padding: 28,
    borderWidth: 1,
    borderColor: "#172B4A",
    shadowColor: "#0EA5E9",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 22,
    elevation: 15,
  },

  title: {
    color: "#F1F5F9",
    fontSize: 24,
    fontWeight: "800",
    marginBottom: 6,
    letterSpacing: 0.2,
  },

  subtitle: {
    color: "#4A7FA5",
    fontSize: 14,
    marginBottom: 24,
  },

  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0A1628",
    borderRadius: 14,
    marginBottom: 16,
    paddingHorizontal: 16,
    borderWidth: 1.5,
    borderColor: "#172B4A",
    minHeight: 56,
  },

  inputFocused: {
    borderColor: "#0EA5E9",
    shadowColor: "#0EA5E9",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },

  inputBlurred: {
    borderColor: "#172B4A",
  },

  inputIcon: {
    marginRight: 12,
  },

  input: {
    flex: 1,
    paddingVertical: 16,
    color: "#ffffff",
    fontSize: 15,
  },

  button: {
    backgroundColor: "#0EA5E9",
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 10,
    shadowColor: "#0EA5E9",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 14,
    elevation: 10,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 15,
    letterSpacing: 0.3,
  },

  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 28,
  },

  footerText: {
    color: "#4A7FA5",
    fontSize: 14,
    alignItems: "center",
    fontWeight: "800",
  },

  footerLink: {
    color: "#0EA5E9",
    fontSize: 14,
    fontWeight: "700",
  },

});

export default styles;