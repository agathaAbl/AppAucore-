import { StyleSheet } from "react-native";
import colors from "../screens/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  arrow: {
    alignSelf: "flex-start",
    marginBottom: 12,
    padding: 8,
    borderRadius: 10,
    backgroundColor: colors.backgroundDark,
    borderWidth: 1,
    borderColor: colors.border,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: colors.textPrimary,
  },
  button: {
    backgroundColor: colors.primary,  
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: colors.textLight,           
    fontWeight: "bold",
  },
  premiumButton: {
    backgroundColor: colors.success,   
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 12,
  },
  premiumText: {
    color: colors.textLight,
    fontWeight: "bold",
  },
  limitText: {
    color: colors.textSecondary,
    fontSize: 13,
    marginTop: 20,
    textAlign: "center",
  },
  balloon: {
    backgroundColor: colors.backgroundDark,
    borderRadius: 20,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  balloonText: {
    color: colors.textPrimary,
    fontSize: 15,
    marginBottom: 10,
  },
  actions: {
    flexDirection: "row",
    gap: 12,
  },
  
  bgGlow1: {
    position: "absolute",
    top: -60,
    right: -80,
    width: 280,
    height: 280,
    borderRadius: 140,
    backgroundColor: colors.primary,
    opacity: 0.2,
  },
  bgGlow2: {
    position: "absolute",
    bottom: 100,
    left: -80,
    width: 240,
    height: 240,
    borderRadius: 120,
    backgroundColor: colors.success,
    opacity: 0.15,
  },
  bgGlow3: {
    position: "absolute",
    top: 120,
    left: -40,
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: colors.error,
    opacity: 0.08,
  },
  bgGlow4: {
    position: "absolute",
    bottom: 60,
    right: -30,
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: colors.textSecondary,
    opacity: 0.07,
  },
});

export default styles;
