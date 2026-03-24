import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,      // ← estava faltando esse import
} from "react-native";
import styles from "./LoginGooglestyles";
import LoginCard from "./LoginCard";

export default function LoginGoogle() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.accessButton}
        onPress={() => setModalVisible(true)}
        activeOpacity={0.85}
      >
        <Text style={styles.accessButtonText}>Acessar sua conta</Text>
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <KeyboardAvoidingView
          style={{ flex: 1, justifyContent: "flex-end" }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <Pressable
            style={{ ...StyleSheet.absoluteFillObject, backgroundColor: "rgba(0,0,0,0.6)" }}
            onPress={() => setModalVisible(false)}
          />
          <LoginCard onClose={() => setModalVisible(false)} />
        </KeyboardAvoidingView>
      </Modal>
    </View>
  );
}