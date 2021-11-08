import React, { useEffect } from "react";
import { Text, StyleSheet, View, Image, Button } from "react-native";

import { Product } from "../../interfaces/product";
import { add } from "../../service";

export default function Index(props: any) {
  const { name, id, image, price, stock } = props.route.params.item;

  async function handleCar(params: Product) {
    await add(params);
  }
  useEffect(() => {
    props.navigation.setOptions({
      headerTitle: name,
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ flex: 2 }}>
        <Image
          source={{ uri: image }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={{ flex: 2, justifyContent: "center" }}>
        <View>
          <Text style={styles.price}>{`R$ ${price}`}</Text>
        </View>
        <View>
          <Text style={styles.name}>{name}</Text>
        </View>
        <View>
          <Text style={styles.stock}>Quantidade: {stock}</Text>
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: "column-reverse" }}>
        <Button
          onPress={() => handleCar(props.route.params.item)}
          title="Adicionar"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 300,
    paddingTop: 50,
  },
  price: {
    fontSize: 24,
    marginHorizontal: "1%",
  },
  name: {
    fontFamily: "Anton_400Regular",
    fontSize: 20,
    marginHorizontal: "1%",
    opacity: 0.4,
  },
  stock: {
    fontFamily: "Anton_400Regular",
    fontSize: 15,
    paddingHorizontal: "1%",
    opacity: 0.4,
  },
  butons: {
    height: "40px",
    alignSelf: "center",
  },
});
