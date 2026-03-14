import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },

  texto: {
    fontSize: 16,
    color: "#555",
    marginBottom: 32,
  },

  btnSair: {
    width: "100%",
    backgroundColor: "#e53935",
    borderRadius: 8,
    padding: 14,
    alignItems: "center",
  },

  btnSairTexto: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 15,
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },

  modal: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    width: "100%",
  },

  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },

  modalTitulo: {
    fontSize: 15,
    fontWeight: "700",
    color: "#222",
  },

  modalFechar: {
    fontSize: 16,
    color: "#888",
  },

  modalTexto: {
    fontSize: 13,
    color: "#555",
    marginBottom: 20,
  },

  modalBotoes: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 10,
  },

  btnCancelar: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 20,
  },

  btnCancelarTexto: {
    fontSize: 13,
    color: "#555",
  },

  btnConfirmar: {
    backgroundColor: "#e53935",
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 20,
  },

  btnConfirmarTexto: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 13,
  },
});
