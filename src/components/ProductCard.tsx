import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Product } from "../services/api";
import { styles } from "../styles/ProductCardStyles";

interface Props {
  produto: Product;
  onPress: () => void;
}

export default function ProductCard({ produto, onPress }: Props) {
  const precoFinal = produto.price * (1 - produto.discountPercentage / 100);
  const temDesconto = produto.discountPercentage > 0;

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image
        source={{ uri: produto.thumbnail }}
        style={styles.imagem}
        resizeMode="contain"
      />
      <View style={styles.corpo}>
        <Text style={styles.titulo} numberOfLines={1}>
          {produto.title}
        </Text>
        <Text style={styles.descricao} numberOfLines={3}>
          {produto.description}
        </Text>
        <View style={styles.precoRow}>
          <Text style={styles.preco}>
            R$ {precoFinal.toFixed(2).replace(".", ",")}
          </Text>
          {temDesconto && (
            <Text style={styles.precoOriginal}>
              R$ {produto.price.toFixed(2).replace(".", ",")}
            </Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}
