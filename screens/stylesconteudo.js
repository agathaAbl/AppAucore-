import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#060D1F", padding: 20 },
  title: { color: "#E2E8F0", fontSize: 20, fontWeight: "bold", marginBottom: 20 },
  balloon: {
    backgroundColor: "#0F1F3D",
    borderRadius: 20,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#1E3A5F",
  },
  balloonText: { color: "#E2E8F0", fontSize: 15, marginBottom: 10 },
  actions: { flexDirection: "row", gap: 12 },
  limitText: {
    color: "#94A3B8",
    fontSize: 13,
    marginTop: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#0EA5E9",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: { color: "#fff", fontWeight: "bold" },
  premiumButton: {
    backgroundColor: "#22C55E",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 12,
  },
  premiumText: { color: "#fff", fontWeight: "bold" },
});

export default styles;
