import React, { useState, useEffect, useRef } from "react";
import {
  View, Text, TextInput, TouchableOpacity,
  Image, Alert, ScrollView, Animated, StyleSheet, Dimensions,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

export default function ForgotPassword({ navigation }) {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [focused, setFocused] = useState(null);

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;
  const codeRefs = useRef([]);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 1, duration: 800, useNativeDriver: true }),
      Animated.timing(slideAnim, { toValue: 0, duration: 700, useNativeDriver: true }),
    ]).start();
  }, []);

  const animateNext = () => {
    fadeAnim.setValue(0); slideAnim.setValue(20);
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 1, duration: 500, useNativeDriver: true }),
      Animated.timing(slideAnim, { toValue: 0, duration: 500, useNativeDriver: true }),
    ]).start();
  };

  const handleSendEmail = () => {
    if (!email) { Alert.alert("Atenção", "Informe seu email."); return; }
    animateNext(); setStep(2);
  };

  const handleVerifyCode = () => {
    if (code.join("").length < 6) { Alert.alert("Atenção", "Digite o código completo."); return; }
    animateNext(); setStep(3);
  };

  const handleResetPassword = () => {
    if (!newPassword || !confirmPassword) { Alert.alert("Atenção", "Preencha os campos."); return; }
    if (newPassword !== confirmPassword) { Alert.alert("Erro", "As senhas não coincidem."); return; }
    Alert.alert("Sucesso!", "Sua senha foi redefinida.", [
      { text: "Fazer login", onPress: () => navigation.replace("Login") },
    ]);
  };

  const handleCodeChange = (val, idx) => {
    const newCode = [...code];
    newCode[idx] = val.slice(-1);
    setCode(newCode);
    if (val && idx < 5) codeRefs.current[idx + 1]?.focus();
    if (!val && idx > 0) codeRefs.current[idx - 1]?.focus();
  };

  const stepTitles = ["", "Esqueceu a senha?", "Verifique seu email", "Nova senha"];
  const stepSubtitles = ["", "Informe o email cadastrado para receber o código de recuperação", `Enviamos um código de 6 dígitos para\n${email}`, "Crie uma senha forte para sua conta"];

  const inputStyle = (key) => ({
    flexDirection: "row", alignItems: "center",
    backgroundColor: "rgba(26,47,80,0.85)",
    borderRadius: 14, marginBottom: 20, paddingHorizontal: 18,
    borderWidth: 1.5,
    borderColor: focused === key ? "#38BDF8" : "#2A4A70",
    minHeight: 58,
  });

  const btnStyle = {
    backgroundColor: "#0EA5E9", paddingVertical: 18, borderRadius: 14, alignItems: "center",
    borderWidth: 1.5, borderColor: "#7DD3FC",
    shadowColor: "#0EA5E9", shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.45, shadowRadius: 14, elevation: 10,
  };

  return (
    <View style={{ flex: 1 }}>
      {/* BACKGROUND */}
      <View style={StyleSheet.absoluteFill} pointerEvents="none">
        <View style={{ ...StyleSheet.absoluteFillObject, backgroundColor: "#050C1E" }} />
        <View style={{ position: "absolute", width: width * 1.2, height: width * 1.2, borderRadius: width * 0.6, backgroundColor: "#0A2A6E", top: height * 0.15, left: -width * 0.1, opacity: 0.45 }} />
        <View style={{ position: "absolute", width: width * 0.9, height: width * 0.9, borderRadius: width * 0.45, backgroundColor: "#0369A1", bottom: -width * 0.3, left: width * 0.05, opacity: 0.18 }} />
        <View style={{ position: "absolute", width: 180, height: 180, borderRadius: 90, backgroundColor: "#0EA5E9", top: height * 0.08, right: -40, opacity: 0.08 }} />
        <View style={{ position: "absolute", width: 120, height: 120, borderRadius: 60, backgroundColor: "#38BDF8", bottom: height * 0.1, left: -30, opacity: 0.07 }} />
      </View>

      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 24, paddingTop: 60, paddingBottom: 40 }} showsVerticalScrollIndicator={false}>
        <View style={{ alignItems: "center", marginBottom: 28 }}>
          <Image source={require("../assets/logo-convertido.png")} style={{ width: 180, height: 140, resizeMode: "contain" }} />
        </View>

        <View style={{ flexDirection: "row", justifyContent: "center", gap: 8, marginBottom: 28 }}>
          {[1, 2, 3].map((s) => (
            <View key={s} style={{ height: 4, width: s === step ? 32 : 20, borderRadius: 2, backgroundColor: s <= step ? "#0EA5E9" : "#1E3A5F" }} />
          ))}
        </View>

        <Animated.View style={{ opacity: fadeAnim, transform: [{ translateY: slideAnim }], backgroundColor: "rgba(17,34,64,0.85)", borderRadius: 24, padding: 28, borderWidth: 1.5, borderColor: "#1E3A5F", shadowColor: "#0EA5E9", shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.2, shadowRadius: 20, elevation: 10 }}>
          <View style={{ alignItems: "center", marginBottom: 20 }}>
            <View style={{ width: 64, height: 64, borderRadius: 32, backgroundColor: "#0EA5E920", borderWidth: 2, borderColor: "#0EA5E9", alignItems: "center", justifyContent: "center" }}>
              <Feather name={step === 1 ? "mail" : step === 2 ? "shield" : "lock"} size={28} color="#0EA5E9" />
            </View>
          </View>

          <Text style={{ color: "#E2E8F0", fontSize: 22, fontWeight: "700", textAlign: "center", marginBottom: 8 }}>{stepTitles[step]}</Text>
          <Text style={{ color: "#7DD3FC", fontSize: 14, textAlign: "center", marginBottom: 28, lineHeight: 20 }}>{stepSubtitles[step]}</Text>

          {step === 1 && (
            <>
              <View style={inputStyle("email")}>
                <Feather name="mail" size={20} color="#7DD3FC" style={{ marginRight: 12 }} />
                <TextInput style={{ flex: 1, paddingVertical: 16, color: "#E2E8F0", fontSize: 16 }} placeholder="Seu email" placeholderTextColor="#4A7FA5" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" onFocus={() => setFocused("email")} onBlur={() => setFocused(null)} />
              </View>
              <TouchableOpacity onPress={handleSendEmail} activeOpacity={0.85} style={btnStyle}>
                <Text style={{ color: "#FFFFFF", fontWeight: "bold", fontSize: 17 }}>Enviar código</Text>
              </TouchableOpacity>
            </>
          )}

          {step === 2 && (
            <>
              <View style={{ flexDirection: "row", justifyContent: "center", gap: 10, marginBottom: 28 }}>
                {code.map((digit, idx) => (
                  <TextInput key={idx} ref={(r) => (codeRefs.current[idx] = r)} style={{ width: 46, height: 56, backgroundColor: "rgba(26,47,80,0.9)", borderRadius: 12, borderWidth: 2, borderColor: digit ? "#0EA5E9" : "#2A4A70", color: "#E2E8F0", fontSize: 22, fontWeight: "700", textAlign: "center" }} maxLength={1} keyboardType="number-pad" value={digit} onChangeText={(val) => handleCodeChange(val, idx)} />
                ))}
              </View>
              <TouchableOpacity onPress={handleVerifyCode} activeOpacity={0.85} style={{ ...btnStyle, marginBottom: 16 }}>
                <Text style={{ color: "#FFFFFF", fontWeight: "bold", fontSize: 17 }}>Verificar código</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ alignItems: "center" }}>
                <Text style={{ color: "#38BDF8", fontSize: 14 }}>Reenviar código</Text>
              </TouchableOpacity>
            </>
          )}

          {step === 3 && (
            <>
              <View style={inputStyle("new")}>
                <Feather name="lock" size={20} color="#7DD3FC" style={{ marginRight: 12 }} />
                <TextInput style={{ flex: 1, paddingVertical: 16, color: "#E2E8F0", fontSize: 16 }} placeholder="Nova senha" placeholderTextColor="#4A7FA5" secureTextEntry={!showNew} value={newPassword} onChangeText={setNewPassword} onFocus={() => setFocused("new")} onBlur={() => setFocused(null)} />
                <TouchableOpacity onPress={() => setShowNew(!showNew)}>
                  <Feather name={showNew ? "eye" : "eye-off"} size={20} color="#7DD3FC" />
                </TouchableOpacity>
              </View>
              <View style={inputStyle("confirm")}>
                <Feather name="check-circle" size={20} color="#7DD3FC" style={{ marginRight: 12 }} />
                <TextInput style={{ flex: 1, paddingVertical: 16, color: "#E2E8F0", fontSize: 16 }} placeholder="Confirmar nova senha" placeholderTextColor="#4A7FA5" secureTextEntry={!showConfirm} value={confirmPassword} onChangeText={setConfirmPassword} onFocus={() => setFocused("confirm")} onBlur={() => setFocused(null)} />
                <TouchableOpacity onPress={() => setShowConfirm(!showConfirm)}>
                  <Feather name={showConfirm ? "eye" : "eye-off"} size={20} color="#7DD3FC" />
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={handleResetPassword} activeOpacity={0.85} style={btnStyle}>
                <Text style={{ color: "#FFFFFF", fontWeight: "bold", fontSize: 17 }}>Redefinir senha</Text>
              </TouchableOpacity>
            </>
          )}

          <TouchableOpacity onPress={() => (step > 1 ? setStep(step - 1) : navigation.goBack())} style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 24, gap: 6 }}>
            <Feather name="arrow-left" size={16} color="#38BDF8" />
            <Text style={{ color: "#38BDF8", fontSize: 14 }}>Voltar</Text>
          </TouchableOpacity>
        </Animated.View>
      </ScrollView>
    </View>
  );
}