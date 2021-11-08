import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from "react-native";
import { Product } from "../../interfaces/product";
import { list } from "../../service";
import Cart from "../../component/cart";

export default function index() {
  let result: any;
  const [product, setProducts] = useState<Product[]>([]);
  const [total, setTotal] = useState();
  async function handleLoad() {
    const result = await list();
    setProducts(result);
  }

  useEffect(() => {
    handleLoad();
  }, []);
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.viewScroll}>
            {product?.map((item: Product) => (
              <Cart
                key={item.id}
                id={item.id}
                image={item.image}
                price={item.price}
                stock={item.stock}
              >
                {item.name}
              </Cart>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  viewScroll: {},
  total: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  titleValor: {
    alignSelf: "center",
  },
  valor: {
    alignSelf: "flex-end",
    color: "red",
  },
});
