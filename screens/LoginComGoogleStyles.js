import { StyleSheet } from "react-native";
import colors from "./colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: colors.background,
  },

  title: {
    color: colors.textPrimary,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },

  subtitle: {
    color: colors.textSecondary,
    marginBottom: 15,
  },

  list: {
    marginBottom: 30,
  },

  item: {
    color: colors.textSecondary,
    marginBottom: 5,
  },

  button: {
    backgroundColor: colors.accent,
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },

  buttonText: {
    color: colors.textPrimary,
    fontWeight: "bold",
  },

  buttonOutline: {
    borderWidth: 1,
    borderColor: colors.accent,
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },

  buttonOutlineText: {
    color: colors.textSecondary,
    fontWeight: "bold",
  },

  footer: {
    marginTop: 30,
    alignItems: "center",
  },

  responsavel: {
    color: colors.textSecondary,
  },

  nome: {
    color: colors.accent,
    fontWeight: "bold",
  },
});

export default styles;
