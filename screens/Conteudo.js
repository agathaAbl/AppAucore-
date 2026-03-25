import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, Alert } from "react-native";
import { Feather } from "@expo/vector-icons";
import styles from "./stylesconteudo";

const roadmap = [
  { id: "1", title: "Lógica de Programação" },
  { id: "2", title: "Estruturas de Dados" },
  { id: "3", title: "APIs REST" },
  { id: "4", title: "Banco de Dados" },
  { id: "5", title: "Autenticação JWT" },
];

export default function Conteudo() {
  const [likes, setLikes] = useState({});
  const [pesquisas, setPesquisas] = useState(0);

  const handleLike = (id, value) => {
    setLikes({ ...likes, [id]: value });
  };

  const handleNovaPesquisa = () => {
    if (pesquisas >= 5) {
      Alert.alert(
        "Limite atingido",
        "Você atingiu o limite de 5 pesquisas no modo Free. Assine o Premium para continuar!"
      );
    } else {
      setPesquisas(pesquisas + 1);
      Alert.alert("Nova Pesquisa", "Sua pesquisa foi iniciada!");
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.balloon}
      onPress={() => Alert.alert(item.title, "Detalhes do conteúdo")}
    >
      <Text style={styles.balloonText}>
        {item.title.length > 20 ? item.title.slice(0, 20) + "..." : item.title}
      </Text>
      <View style={styles.actions}>
        <TouchableOpacity onPress={() => handleLike(item.id, "like")}>
          <Feather
            name="thumbs-up"
            size={20}
            color={likes[item.id] === "like" ? "#22C55E" : "#94A3B8"}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleLike(item.id, "dislike")}>
          <Feather
            name="thumbs-down"
            size={20}
            color={likes[item.id] === "dislike" ? "#EF4444" : "#94A3B8"}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mapa de Aprendizado</Text>
      <FlatList
        data={roadmap}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

      <Text style={styles.limitText}>
        Pesquisas realizadas: {pesquisas}/5 (modo Free)
      </Text>

      {pesquisas >= 5 && (
        <TouchableOpacity
          style={styles.premiumButton}
          onPress={() =>
            Alert.alert("Premium", "Assine para liberar pesquisas ilimitadas!")
          }
        >
          <Text style={styles.premiumText}>Assinar Premium</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity style={styles.button} onPress={handleNovaPesquisa}>
        <Text style={styles.buttonText}>Nova Pesquisa</Text>
      </TouchableOpacity>
    </View>
  );
}
