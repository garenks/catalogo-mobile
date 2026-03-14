import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
    flex: 1,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 4,
  },
  imagem: {
    width: "100%",
    height: 100,
    backgroundColor: "#f9f9f9",
  },
  corpo: {
    padding: 8,
  },
  titulo: {
    fontSize: 13,
    fontWeight: "700",
    color: "#222",
    marginBottom: 4,
  },
  descricao: {
    fontSize: 11,
    color: "#888",
    lineHeight: 16,
    marginBottom: 6,
  },
  precoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  preco: {
    fontSize: 13,
    fontWeight: "700",
    color: "#222",
  },
  precoOriginal: {
    fontSize: 11,
    color: "#aaa",
    textDecorationLine: "line-through",
  },
});
