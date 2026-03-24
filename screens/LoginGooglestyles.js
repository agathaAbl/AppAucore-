import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#070F20",
  },

  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 56,
    paddingBottom: 48,
  },

  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 48,
    alignSelf: "flex-start",
    backgroundColor: "#0C1A30",
    paddingHorizontal: 16,
    paddingVertical: 9,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: "#172B4A",
  },

  backText: {
    color: "#7DD3FC",
    fontSize: 14,
    marginLeft: 7,
    fontWeight: "600",
  },

  logoWrapper: {
    alignItems: "center",
    marginBottom: 36,
  },

  logoBox: {
    width: 72,
    height: 72,
    borderRadius: 22,
    backgroundColor: "#0C1A30",
    borderWidth: 1,
    borderColor: "#172B4A",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    shadowColor: "#4285F4",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 8,
  },

  logoImage: {
    width: 42,
    height: 42,
    resizeMode: "contain",
  },

  title: {
    color: "#F1F5F9",
    fontSize: 24,
    fontWeight: "800",
    marginBottom: 6,
    letterSpacing: 0.2,
    textAlign: "center",
  },

  subtitle: {
    color: "#3D5A7A",
    fontSize: 14,
    textAlign: "center",
  },

  card: {
    backgroundColor: "#0C1A30",
    borderRadius: 24,
    padding: 24,
    borderWidth: 1,
    borderColor: "#172B4A",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.35,
    shadowRadius: 20,
    elevation: 12,
  },

  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0A1628",
    borderRadius: 14,
    marginBottom: 12,
    paddingHorizontal: 16,
    borderWidth: 1.5,          
    borderColor: "#1E3A5F",    
    minHeight: 56,
  },

  inputFocused: {
    borderColor: "#4285F4",    
    shadowColor: "#4285F4",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
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
    fontSize: 18,
  },

  hint: {
    color: "#2A3F5A",
    fontSize: 12,
    marginBottom: 24,
    lineHeight: 18,
  },

  row: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  linkText: {
    color: "#4285F4",
    fontSize: 14,
    fontWeight: "600",
  },

  nextButton: {
    backgroundColor: "#4285F4",
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 14,
    shadowColor: "#4285F4",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 14,
    elevation: 10,
  },

  nextButtonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 15,
    letterSpacing: 0.3,
  },

  chipWrapper: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#0A1628",
    borderRadius: 24,
    paddingHorizontal: 14,
    paddingVertical: 8,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: "#172B4A",
  },

  chipAvatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#4285F4",
    alignItems: "center",
    justifyContent: "center",
  },

  chipAvatarText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "700",
  },

  chipEmail: {
    color: "#CBD5E1",
    fontSize: 13,
    marginHorizontal: 10,
    fontWeight: "500",
  },

  forgotText: {
    color: "#4285F4",
    fontSize: 13,
    fontWeight: "600",
    marginBottom: 22,
  },

  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 32,
    flexWrap: "wrap",
    gap: 4,
  },

  footerText: {
    color: "#172B4A",
    fontSize: 11,
    marginHorizontal: 8,
    fontWeight: "500",
  },

});

export default styles;