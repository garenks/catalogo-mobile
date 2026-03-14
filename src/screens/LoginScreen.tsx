import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../styles/LoginStyles";

interface Props {
  onLogin: () => void;
}

export default function LoginScreen({ onLogin }: Props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState("");
  const [senhaVisivel, setSenhaVisivel] = useState(false);

  const handleLogin = () => {
    setUsernameError("");
    setPasswordError("");
    setLoginError("");

    let hasError = false;

    if (username === "") {
      setUsernameError("Campo obrigatório.");
      hasError = true;
    }

    if (password === "") {
      setPasswordError("Campo obrigatório.");
      hasError = true;
    }

    if (hasError) return;

    if (username !== "admin" || password !== "123") {
      setLoginError("Username ou senha inválidos");
      return;
    }

    onLogin();
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.topo}>
        <Text style={styles.titulo}>Bem-vindo de volta!</Text>
        <Text style={styles.subtitulo}>
          Insira seus dados para entrar na sua conta.
        </Text>
      </View>

      <View style={styles.fundo}>
        <View style={styles.card}>
          <View style={styles.cardContent}>
            {loginError !== "" && (
              <Text style={styles.loginError}>{loginError}</Text>
            )}

            <Text style={styles.label}>Username</Text>
            <TextInput
              value={username}
              onChangeText={setUsername}
              autoCapitalize="none"
              style={[styles.input, usernameError ? styles.inputError : null]}
            />
            {usernameError !== "" && (
              <View style={styles.errorRow}>
                <Ionicons
                  name="alert-circle-outline"
                  size={13}
                  color="#e53935"
                />
                <Text style={styles.errorText}> {usernameError}</Text>
              </View>
            )}

            <Text style={styles.label}>Senha</Text>
            <View style={styles.senhaWrap}>
              <TextInput
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!senhaVisivel}
                style={[
                  styles.input,
                  styles.inputSenha,
                  passwordError ? styles.inputError : null,
                ]}
              />
              <TouchableOpacity
                style={styles.eyeBtn}
                onPress={() => setSenhaVisivel(!senhaVisivel)}
              >
                <Ionicons
                  name={senhaVisivel ? "eye-outline" : "eye-off-outline"}
                  size={20}
                  color="#888"
                />
              </TouchableOpacity>
            </View>
            {passwordError !== "" && (
              <View style={styles.errorRow}>
                <Ionicons
                  name="alert-circle-outline"
                  size={13}
                  color="#e53935"
                />
                <Text style={styles.errorText}> {passwordError}</Text>
              </View>
            )}

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
