import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";
import {
  getProdutosPorCategoria,
  CATEGORIAS_MASCULINAS,
  CATEGORIAS_FEMININAS,
  Product,
} from "../services/api";
import ProductCard from "../components/ProductCard";
import { styles } from "../styles/ProductListStyles";

type Nav = StackNavigationProp<RootStackParamList>;

type Aba = "masculino" | "feminino";

export default function ProductListScreen() {
  const navigation = useNavigation<Nav>();

  const [abaAtiva, setAbaAtiva] = useState<Aba>("masculino");

  const [produtos, setProdutos] = useState<Product[]>([]);

  const [loading, setLoading] = useState(false);

  const [erro, setErro] = useState<string | null>(null);

  const buscarProdutos = useCallback(async (aba: Aba) => {
    setLoading(true);
    setErro(null);
    setProdutos([]);

    const categorias =
      aba === "masculino" ? CATEGORIAS_MASCULINAS : CATEGORIAS_FEMININAS;

    try {
      const resultados = await Promise.all(
        categorias.map((cat) => getProdutosPorCategoria(cat)),
      );

      setProdutos(resultados.flat());
    } catch {
      setErro("Erro ao carregar produtos. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    buscarProdutos(abaAtiva);
  }, [abaAtiva]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.abas}>
        {(["masculino", "feminino"] as Aba[]).map((aba) => (
          <TouchableOpacity
            key={aba}
            style={[styles.aba, abaAtiva === aba && styles.abaAtiva]}
            onPress={() => setAbaAtiva(aba)}
          >
            <Text
              style={[
                styles.abaTexto,
                abaAtiva === aba && styles.abaTextoAtivo,
              ]}
            >
              Produtos {aba === "masculino" ? "Masculinos" : "Femininos"}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {loading && (
        <ActivityIndicator
          size="large"
          color="#1565C0"
          style={{ marginTop: 40 }}
        />
      )}

      {erro && !loading && (
        <View style={styles.erroBox}>
          <Text style={styles.erroTexto}>{erro}</Text>
          <TouchableOpacity onPress={() => buscarProdutos(abaAtiva)}>
            <Text style={styles.retentar}>Tentar novamente</Text>
          </TouchableOpacity>
        </View>
      )}

      {!loading && !erro && (
        <FlatList
          data={produtos}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.grid}
          renderItem={({ item }) => (
            <View style={styles.cardWrap}>
              <ProductCard
                produto={item}
                onPress={() =>
                  navigation.navigate("ProductDetail", {
                    productId: item.id,
                  })
                }
              />
            </View>
          )}
          ListEmptyComponent={
            <Text style={styles.vazio}>Nenhum produto encontrado.</Text>
          }
        />
      )}
    </SafeAreaView>
  );
}
