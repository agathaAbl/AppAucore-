import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import styles from "./LoginGooglestyles";

export default function LoginCard({ onClose }) {
  return (
    <View style={styles.card}>
      <View style={styles.handle} />

      {/* Logo */}
      <View style={styles.logoRow}>
        <View style={styles.logoIcon}>
          <Text style={styles.logoIconText}>⬡</Text>
        </View>
        <Text style={styles.logoText}>AUCORE</Text>
      </View>

      <Text style={styles.cardTitle}>Entrar na sua conta</Text>
      <Text style={styles.cardSub}>Acesse o painel Aucore</Text>

      {/* Campos */}
      <View style={styles.field}>
        <Text style={styles.label}>EMAIL</Text>
        <TextInput
          style={styles.input}
          placeholder="seu@email.com"
          placeholderTextColor="#555"
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>SENHA</Text>
        <TextInput
          style={styles.input}
          placeholder="••••••••"
          placeholderTextColor="#555"
          secureTextEntry
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgot}>Esqueceu a senha?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnPrimary} activeOpacity={0.85}>
        <Text style={styles.btnPrimaryText}>Entrar</Text>
      </TouchableOpacity>

      {/* Divider */}
      <View style={styles.divider}>
        <View style={styles.dividerLine} />
        <Text style={styles.dividerText}>ou continue com</Text>
        <View style={styles.dividerLine} />
      </View>

      {/* Sociais */}
      <View style={styles.socialRow}>
        <TouchableOpacity style={styles.btnSocial} activeOpacity={0.8}>
          <Text style={styles.socialIcon}>G</Text>
          <Text style={styles.btnSocialText}>Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnSocial} activeOpacity={0.8}>
          <Text style={styles.socialIcon}></Text>
          <Text style={styles.btnSocialText}>Apple</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={[styles.btnSocial, styles.btnSocialFull]} activeOpacity={0.8}>
        <Text style={styles.socialIconMs}>⊞</Text>
        <Text style={styles.btnSocialText}>Microsoft</Text>
      </TouchableOpacity>

      {/* Footer */}
      <View style={styles.footerRow}>
        <Text style={styles.footerText}>Não tem uma conta? </Text>
        <TouchableOpacity>
          <Text style={styles.footerLink}>Criar agora</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}