import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  abas: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderBottomWidth: 2,
    borderBottomColor: "#1565C0",
    paddingTop: 50,
  },

  aba: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
    borderBottomWidth: 3,
    borderBottomColor: "transparent",
    marginBottom: -2,
  },

  abaAtiva: {
    borderBottomColor: "#1565C0",
  },

  abaTexto: {
    fontSize: 13,
    fontWeight: "600",
    color: "#888",
  },

  abaTextoAtivo: {
    color: "#1565C0",
  },

  grid: {
    padding: 10,
  },

  row: {
    gap: 10,
    marginBottom: 10,
  },

  cardWrap: {
    flex: 1,
  },

  erroBox: {
    alignItems: "center",
    marginTop: 40,
  },

  erroTexto: {
    color: "#e53935",
    marginBottom: 12,
  },

  retentar: {
    color: "#1565C0",
    fontWeight: "600",
  },

  vazio: {
    textAlign: "center",
    color: "#aaa",
    marginTop: 40,
  },
});
