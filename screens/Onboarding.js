import React, { useEffect, useRef, useState } from "react";
import {
  View, Text, TouchableOpacity, Animated, ScrollView,
  TextInput, KeyboardAvoidingView, Platform, Image,
  StyleSheet, Dimensions,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import styles from "./OnboardingStyles";

const { width, height } = Dimensions.get("window");

const FEATURES = [
  { icon: "map", label: "Transforme suas ideias em um plano de estudos sob medida." },
  { icon: "navigation", label: "Seu próximo passo nos estudos, guiado por IA." },
  { icon: "trending-up", label: "Aprender fica mais fácil com um roadmap feito para você." },
  { icon: "compass", label: "Descubra o melhor caminho para aprender o que você quer." },
];

const LEVELS = [
  { value: 1, label: "Não sei nada sobre o assunto" },
  { value: 2, label: "Tenho uma breve noção" },
  { value: 3, label: "Conhecimentos intermediários" },
  { value: 4, label: "Consigo conversar sobre o tema" },
  { value: 5, label: "Entendo muito e quero me tornar especialista" },
];

function BG() {
  return (
    <View style={[StyleSheet.absoluteFill, { overflow: 'hidden' }]} pointerEvents="none">
      <View style={{ ...StyleSheet.absoluteFillObject, backgroundColor: "#050C1E" }} />
      <View style={{ position: "absolute", width: width * 0.9, height: width * 0.9, borderRadius: width * 0.45, backgroundColor: "#0A2A6E", top: height * 0.15, left: -width * 0.05, opacity: 0.45 }} />
      <View style={{ position: "absolute", width: width * 0.7, height: width * 0.7, borderRadius: width * 0.35, backgroundColor: "#0369A1", bottom: -width * 0.2, left: width * 0.05, opacity: 0.18 }} />
      <View style={{ position: "absolute", width: 150, height: 150, borderRadius: 75, backgroundColor: "#0EA5E9", top: height * 0.08, right: -30, opacity: 0.08 }} />
      <View style={{ position: "absolute", width: 100, height: 100, borderRadius: 50, backgroundColor: "#38BDF8", bottom: height * 0.1, left: -20, opacity: 0.07 }} />
    </View>
  );
}

function Mascote() {
  const floatAnim = useRef(new Animated.Value(0)).current;
  const shadowAnim = useRef(new Animated.Value(1)).current;
  useEffect(() => {
    Animated.loop(Animated.sequence([
      Animated.timing(floatAnim, { toValue: -14, duration: 1600, useNativeDriver: true }),
      Animated.timing(floatAnim, { toValue: 0, duration: 1600, useNativeDriver: true }),
    ])).start();
    Animated.loop(Animated.sequence([
      Animated.timing(shadowAnim, { toValue: 0.5, duration: 1600, useNativeDriver: true }),
      Animated.timing(shadowAnim, { toValue: 1, duration: 1600, useNativeDriver: true }),
    ])).start();
  }, []);
  return (
    <View style={{ alignItems: "center", marginBottom: 8 }}>
      <Animated.View style={{ width: 80, height: 14, borderRadius: 40, backgroundColor: "#0EA5E9", opacity: shadowAnim, marginBottom: -8, transform: [{ scaleX: shadowAnim }] }} />
      <Animated.Image source={require("../assets/mascote_convertido.png.png")} style={{ width: 250, height: 200, resizeMode: "contain", transform: [{ translateY: floatAnim }] }} />
    </View>
  );
}

export default function Onboarding({ navigation }) {
  const [step, setStep] = useState(0);
  const [area, setArea] = useState("");
  const [hasFormation, setHasFormation] = useState(null);
  const [level, setLevel] = useState(null);
  const [studyTime, setStudyTime] = useState("");
  const [goal, setGoal] = useState("");
  const [focused, setFocused] = useState(null);

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(40)).current;
  const stepFade = useRef(new Animated.Value(1)).current;
  const stepSlide = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 1, duration: 900, useNativeDriver: true }),
      Animated.timing(slideAnim, { toValue: 0, duration: 900, useNativeDriver: true }),
    ]).start();
  }, []);

  const animateStep = (direction, callback) => {
    Animated.parallel([
      Animated.timing(stepFade, { toValue: 0, duration: 140, useNativeDriver: true }),
      Animated.timing(stepSlide, { toValue: -28 * direction, duration: 140, useNativeDriver: true }),
    ]).start(() => {
      callback();
      stepSlide.setValue(28 * direction);
      Animated.parallel([
        Animated.timing(stepFade, { toValue: 1, duration: 180, useNativeDriver: true }),
        Animated.timing(stepSlide, { toValue: 0, duration: 180, useNativeDriver: true }),
      ]).start();
    });
  };

  const goNext = () => animateStep(1, () => setStep((s) => s + 1));
  const goBack = () => animateStep(-1, () => setStep((s) => s - 1));

  const canAdvance = () => {
    if (step === 1) return area.trim().length > 0;
    if (step === 2) return hasFormation !== null;
    if (step === 3) return level !== null;
    if (step === 4) return studyTime.trim().length > 0;
    if (step === 5) return goal.trim().length > 0;
    return false;
  };

  if (step === 0) {
    return (
      <View style={{ flex: 1, backgroundColor: '#050C1E', overflow: 'hidden' }}>
        <BG />
        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
          <Animated.View style={[styles.content, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}>
            <Mascote />
            <Text style={styles.title}>Transforme seu tempo de estudo em resultado real.</Text>
            <Text style={styles.subtitle}>Pare de estudar sem rumo, deixe a IA traçar seu caminho.</Text>
            <View style={styles.featuresWrapper}>
              <View style={styles.cornerTL} /><View style={styles.cornerTR} />
              <View style={styles.cornerBL} /><View style={styles.cornerBR} />
              {FEATURES.map((f, i) => (
                <View key={i} style={styles.featureRow}>
                  <View style={styles.featureIcon}><Feather name={f.icon} size={26} color="#0EA5E9" /></View>
                  <Text style={styles.featureText}>{f.label}</Text>
                </View>
              ))}
            </View>
            <TouchableOpacity style={styles.button} onPress={goNext} activeOpacity={0.85}>
              <Text style={styles.buttonText}>Começar Agora</Text>
              <Feather name="zap" size={22} color="#fff" style={{ marginLeft: 8 }} />
            </TouchableOpacity>
          </Animated.View>
        </ScrollView>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <BG />
      <ScrollView contentContainerStyle={styles.qContainer} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
        <View style={styles.qInner}>
          <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 26 }}>
            {step > 0 && <TouchableOpacity onPress={goBack}><Ionicons name="chevron-back" size={29} color="#fff" /></TouchableOpacity>}
          </View>
          <View style={{ alignItems: "center", marginBottom: 24 }}>
            <Image source={require("../assets/logo-convertido.png")} style={{ width: 180, height: 120, resizeMode: "contain" }} />
          </View>
          <Text style={styles.qHeading}>Vamos entender seu perfil</Text>
          <Animated.View style={[styles.qCard, { opacity: stepFade, transform: [{ translateY: stepSlide }] }]}>
            {step === 1 && (
              <>
                <Text style={styles.stepQuestion}>Qual área você quer desenvolver?</Text>
                <TextInput style={[styles.textInput, focused === "area" && styles.textInputFocused]} placeholder="Ex: programação, design..." placeholderTextColor="#4A7FA5" value={area} onChangeText={setArea} onFocus={() => setFocused("area")} onBlur={() => setFocused(null)} />
              </>
            )}
            {step === 2 && (
              <>
                <Text style={styles.stepQuestion}>Você tem formação na área?</Text>
                <View style={styles.ynRow}>
                  <TouchableOpacity style={[styles.ynBtn, hasFormation === true && styles.ynBtnSelected]} onPress={() => setHasFormation(true)}><Text style={[styles.ynBtnText, hasFormation === true && styles.ynBtnTextSelected]}>Sim</Text></TouchableOpacity>
                  <TouchableOpacity style={[styles.ynBtn, hasFormation === false && styles.ynBtnSelected]} onPress={() => setHasFormation(false)}><Text style={[styles.ynBtnText, hasFormation === false && styles.ynBtnTextSelected]}>Não</Text></TouchableOpacity>
                </View>
              </>
            )}
            {step === 3 && (
              <>
                <Text style={styles.stepQuestion}>Qual é o seu nível atual?</Text>
                <View style={styles.levelList}>
                  {LEVELS.map((l) => (
                    <TouchableOpacity key={l.value} style={[styles.levelRow, level === l.value && styles.levelRowSelected]} onPress={() => setLevel(l.value)}>
                      <View style={[styles.levelBadge, level === l.value && styles.levelBadgeSelected]}><Text style={[styles.levelBadgeText, level === l.value && styles.levelBadgeTextSelected]}>{l.value}</Text></View>
                      <Text style={[styles.levelLabel, level === l.value && styles.levelLabelSelected]}>{l.label}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </>
            )}
            {step === 4 && (
              <>
                <Text style={styles.stepQuestion}>Quantas horas por dia você consegue estudar?</Text>
                <TextInput style={[styles.textInput, focused === "hours" && styles.textInputFocused]} placeholder="Ex: 2 horas" placeholderTextColor="#4A7FA5" value={studyTime} onChangeText={setStudyTime} keyboardType="numeric" onFocus={() => setFocused("hours")} onBlur={() => setFocused(null)} />
              </>
            )}
            {step === 5 && (
              <>
                <Text style={styles.stepQuestion}>Qual é o seu objetivo?</Text>
                <TextInput style={[styles.textInput, { minHeight: 130, textAlignVertical: "top" }, focused === "goal" && styles.textInputFocused]} placeholder="Ex: conseguir um emprego, criar um app" placeholderTextColor="#4A7FA5" value={goal} onChangeText={setGoal} multiline onFocus={() => setFocused("goal")} onBlur={() => setFocused(null)} />
              </>
            )}
          </Animated.View>
          <View style={styles.navRow}>
            <TouchableOpacity style={[styles.nextBtn, !canAdvance() && styles.nextBtnDisabled]} onPress={step < 5 ? goNext : () => navigation.replace("Home")} disabled={!canAdvance()} activeOpacity={0.85}>
              <Text style={styles.nextBtnText}>{step < 5 ? "Continuar" : "Gerar meu roadmap"}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}