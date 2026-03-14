import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1565C0",
  },
  topo: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 28,
    paddingBottom: 40,
  },
  fundo: {
    flex: 1,
    backgroundColor: "#f0f4f8",
  },
  titulo: {
    fontSize: 26,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 14,
    color: "rgba(255,255,255,0.85)",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#eee",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
    margin: 24,
    marginTop: -30,
  },
  cardContent: {
    padding: 24,
  },
  loginError: {
    color: "#e53935",
    fontWeight: "600",
    fontSize: 13,
    marginBottom: 16,
    textAlign: "center",
  },
  label: {
    fontSize: 13,
    fontWeight: "500",
    color: "#333",
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    padding: 10,
    fontSize: 14,
    color: "#333",
    marginBottom: 4,
  },
  inputError: {
    borderColor: "#e53935",
  },
  errorRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  errorText: {
    color: "#e53935",
    fontSize: 12,
  },
  senhaWrap: {
    position: "relative",
  },
  inputSenha: {
    paddingRight: 40,
  },
  eyeBtn: {
    position: "absolute",
    right: 10,
    top: 10,
  },
  button: {
    backgroundColor: "#1565C0",
    borderRadius: 8,
    padding: 14,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 15,
  },
});
