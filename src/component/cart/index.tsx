import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { update } from "../../service";

export default function Index(props: any) {
  const [qtde, setQtde] = useState();
  const [total, setTotal] = useState<number>();

  function filterDesc(desc: any) {
    if (desc.length < 20) {
      return desc;
    }
    return `${desc.substring(0, 18)}...`;
  }

  async function handleMenos(dados: any, qtde: any, id: number) {
    let valor: any = (qtde = qtde - 1);
    setQtde(valor);
    await handleTotal();
    await update(dados, qtde, id);
  }
  async function handleMas(dados: any, qtde: any, id: number) {
    let valor: any = (qtde = qtde + 1);
    setQtde(valor);
    await handleTotal();
    await update(dados, qtde, id);
  }
  async function handleTotal() {
    let totalResult: any = 0;
    totalResult = qtde == undefined ? (totalResult = props.stock) : qtde;
    const total: number = (await props.price) * totalResult;
    setTotal(total);
  }
  useEffect(() => {
    setQtde(props.stock);
    handleTotal();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.img}>
        <Image source={{ uri: props.image }} style={styles.shoesimg} />
      </View>
      <View style={styles.title}>
        <Text style={styles.shoestext}>{filterDesc(props.children)}</Text>
        <Text style={styles.saldo}>
          {`R$ ${props.price}`} Total: {`R$ ${total}`}
        </Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => handleMenos(props, qtde, props.id)}
            style={styles.buttons}
          >
            <Text>-</Text>
          </TouchableOpacity>
          <Text style={styles.stock}>{qtde}</Text>
          <TouchableOpacity
            onPress={() => handleMas(props, qtde, props.id)}
            style={styles.buttons}
          >
            <Text>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingTop: 20,
  },
  shoestext: {
    fontSize: 16,
  },
  shoesimg: {
    width: 75,
    height: 75,
    borderRadius: 4,
  },

  img: { paddingLeft: 20 },
  title: {
    flexDirection: "column",
    paddingLeft: 20,
  },
  saldo: {
    paddingBottom: 10,
    paddingTop: 10,
    color: "red",
    fontWeight: "300",
  },
  stock: {
    width: "50px",
    height: "30px",
    opacity: 0.5,
    marginLeft: "22px",
    marginRight: "-22px",
    marginTop: "10px",
  },
  buttons: {
    color: "#000",
    width: "30px",
    height: "30px",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#fff",
    borderWidth: 1,

    borderColor: "#b4b4b4",
    fontSize: 30,
  },
});
