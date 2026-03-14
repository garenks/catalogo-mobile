import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  centro: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  voltar: {
    padding: 16,
  },

  voltarTexto: {
    fontSize: 22,
    color: "#222",
  },

  imagem: {
    width: "100%",
    height: 220,
    backgroundColor: "#f9f9f9",
  },

  corpo: {
    padding: 20,
  },
  nome: {
    fontSize: 18,
    fontWeight: "700",
    color: "#222",
    marginBottom: 10,
    lineHeight: 24,
  },

  precoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 14,
  },

  precoFinal: {
    fontSize: 18,
    fontWeight: "700",
    color: "#e53935",
  },

  precoOriginal: {
    fontSize: 14,
    color: "#aaa",
    textDecorationLine: "line-through",
  },

  descricao: {
    fontSize: 13,
    color: "#555",
    lineHeight: 20,
  },
});
