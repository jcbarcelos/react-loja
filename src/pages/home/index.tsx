import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

import Shoes from "../../component/shoes";
import { api } from "../../core/api/Api";
import { Product } from "../../interfaces/product";

export default function Index(props: any) {
  const [product, setProducts] = useState<Product[]>([]);

  async function handleLoad() {
    const result = await api.get("product");
    setProducts(result.data);
  }

  function handlePress(item: Product) {
    props.navigation.navigate("Details", {
      item: item,
    });
  }
  function handleCart() {
    props.navigation.navigate("Cart");
  }
  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Produtos</Text>
        <TouchableOpacity
          style={{
            paddingLeft: "100%",
          }}
          testID="car"
        >
          <MaterialIcons
            name="shopping-cart"
            size={24}
            color="#000"
            onPress={() => handleCart()}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.line} />
      <Text style={styles.text}>LANÇAMENTOS</Text>
      <ScrollView>
        <View style={styles.viewScroll}>
          {product.map((r: Product) => (
            <Shoes
              key={r.id}
              img={r.image}
              text={`"R$ ${r.price}"`}
              onClick={() => handlePress(r)}
            >
              {r.name}
            </Shoes>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    marginBottom: 8,
  },
  image: {
    width: "100%",

    height: 100,
  },
  textContainer: {
    flexDirection: "row",
    marginVertical: "1%",
  },
  text: {
    fontFamily: "Anton_400Regular",
    fontSize: 26,
    marginHorizontal: "5%",
  },
  line: {
    borderBottomColor: "#d8d8d8",
    borderBottomWidth: 2,
  },
  viewScroll: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
});
