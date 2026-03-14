import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../App";
import { getProdutoPorId, Product } from "../services/api";
import { styles } from "../styles/ProductDetailStyles";
type Route = RouteProp<RootStackParamList, "ProductDetail">;

export default function ProductDetailScreen() {
  const navigation = useNavigation();

  const route = useRoute<Route>();
  const { productId } = route.params;
  const [produto, setProduto] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    const buscar = async () => {
      try {
        const data = await getProdutoPorId(productId);
        setProduto(data);
      } catch {
        setErro("Não foi possível carregar o produto.");
      } finally {
        setLoading(false);
      }
    };
    buscar();
  }, [productId]);

  if (loading) {
    return (
      <View style={styles.centro}>
        <ActivityIndicator size="large" color="#1565C0" />
      </View>
    );
  }
  if (erro || !produto) {
    return (
      <View style={styles.centro}>
        <Text style={{ color: "#e53935" }}>{erro}</Text>
      </View>
    );
  }

  const precoFinal = produto.price * (1 - produto.discountPercentage / 100);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.voltar}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.voltarTexto}>←</Text>
      </TouchableOpacity>

      <ScrollView>
        <Image
          source={{ uri: produto.images?.[0] ?? produto.thumbnail }}
          style={styles.imagem}
          resizeMode="contain"
        />

        <View style={styles.corpo}>
          <Text style={styles.nome}>{produto.title}</Text>
          <View style={styles.precoRow}>
            <Text style={styles.precoFinal}>
              R$ {precoFinal.toFixed(2).replace(".", ",")}
            </Text>
            <Text style={styles.precoOriginal}>
              R$ {produto.price.toFixed(2).replace(".", ",")}
            </Text>
          </View>
          <Text style={styles.descricao}>{produto.description}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
