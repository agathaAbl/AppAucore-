import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from "react-native";

const MAX_FREE_SEARCHES = 5;

// Dados de exemplo do roadmap
const ROADMAP_ITEMS = [
  { id: 1, label: "Lógica de Programação", done: true },
  { id: 2, label: "Estruturas de Dados", done: false },
  { id: 3, label: "APIs REST", done: false },
  { id: 4, label: "Banco de Dados", done: false },
  { id: 5, label: "Autenticação JWT", done: false },
];

export default function Conteudo({ route, navigation }) {
  const query = route?.params?.query || "Nada pesquisado";

  const [searchCount, setSearchCount] = useState(1); // Contador de pesquisas
  const [likes, setLikes] = useState({}); // Guarda curtir/não curtir
  const [items] = useState(ROADMAP_ITEMS);

  const handleBalloonPress = (item) => {
    Alert.alert("Detalhes do item", `Você clicou em "${item.label}"`);
  };

  const handleLike = (id, value) => {
    setLikes({ ...likes, [id]: value });
  };

  const handleNewSearch = () => {
    if (searchCount >= MAX_FREE_SEARCHES) {
      Alert.alert(
        "Limite atingido",
        "Você atingiu o limite de pesquisas gratuitas. Assine o Premium para continuar.",
        [
          {
            text: "Assinar Premium",
            onPress: () => navigation.navigate("Premium"),
          },
          { text: "Cancelar", style: "cancel" },
        ]
      );
      return;
    }
    setSearchCount(searchCount + 1);
    Alert.alert("Nova pesquisa", "Aqui você faria uma nova pesquisa.");
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 50 }}>
      <Text style={styles.title}>Resultado da Pesquisa:</Text>
      <Text style={styles.queryText}>{query}</Text>

      <Text style={styles.sectionTitle}>Mapa de Aprendizado</Text>

      <View style={styles.roadmap}>
        {items.map((item) => (
          <View key={item.id} style={styles.balloonContainer}>
            <TouchableOpacity
              style={styles.balloon}
              onPress={() => handleBalloonPress(item)}
            >
              <Text style={styles.balloonText}>
                {item.label.length > 20
                  ? item.label.slice(0, 17) + "..."
                  : item.label}
              </Text>
            </TouchableOpacity>

            <View style={styles.likeRow}>
              <TouchableOpacity
                style={[
                  styles.likeBtn,
                  likes[item.id] === "like" && styles.liked,
                ]}
                onPress={() => handleLike(item.id, "like")}
              >
                <Text style={styles.likeText}>👍</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.likeBtn,
                  likes[item.id] === "dislike" && styles.disliked,
                ]}
                onPress={() => handleLike(item.id, "dislike")}
              >
                <Text style={styles.likeText}>👎</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>

      <TouchableOpacity style={styles.searchBtn} onPress={handleNewSearch}>
        <Text style={styles.searchBtnText}>Nova Pesquisa</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A0F1F",
    padding: 20,
  },
  title: {
    color: "#fff",
    fontSize: 22,
    marginBottom: 8,
  },
  queryText: {
    color: "#00BFFF",
    fontSize: 18,
    marginBottom: 20,
  },
  sectionTitle: {
    color: "#38BDF8",
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 12,
  },
  roadmap: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  balloonContainer: {
    width: "48%",
    marginBottom: 16,
    alignItems: "center",
  },
  balloon: {
    backgroundColor: "#1E2A47",
    paddingVertical: 14,
    paddingHorizontal: 10,
    borderRadius: 16,
    minHeight: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  balloonText: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
  },
  likeRow: {
    flexDirection: "row",
    marginTop: 6,
    gap: 8,
  },
  likeBtn: {
    padding: 6,
    borderRadius: 8,
    backgroundColor: "#2A3B59",
  },
  liked: {
    backgroundColor: "#34D399",
  },
  disliked: {
    backgroundColor: "#F87171",
  },
  likeText: {
    fontSize: 16,
  },
  searchBtn: {
    marginTop: 20,
    backgroundColor: "#0EA5E9",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  searchBtnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});