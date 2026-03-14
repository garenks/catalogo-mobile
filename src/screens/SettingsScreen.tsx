import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Modal,
} from "react-native";
import { styles } from "../styles/SettingsStyles";

interface Props {
  onLogout: () => void;
}

export default function SettingsScreen({ onLogout }: Props) {
  const [modalVisivel, setModalVisivel] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.texto}>Deseja sair da conta?</Text>

      <TouchableOpacity
        style={styles.btnSair}
        onPress={() => setModalVisivel(true)}
      >
        <Text style={styles.btnSairTexto}>Sair da conta</Text>
      </TouchableOpacity>

      <Modal
        visible={modalVisivel}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisivel(false)}
      >
        <View style={styles.overlay}>
          <View style={styles.modal}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitulo}>Sair da conta</Text>
              <TouchableOpacity onPress={() => setModalVisivel(false)}>
                <Text style={styles.modalFechar}>✕</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.modalTexto}>
              Você tem certeza que deseja sair da conta?
            </Text>

            <View style={styles.modalBotoes}>
              <TouchableOpacity
                style={styles.btnCancelar}
                onPress={() => setModalVisivel(false)}
              >
                <Text style={styles.btnCancelarTexto}>Cancelar</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.btnConfirmar} onPress={onLogout}>
                <Text style={styles.btnConfirmarTexto}>Sair</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
