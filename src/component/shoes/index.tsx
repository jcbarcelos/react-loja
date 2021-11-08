import React from "react";
import { Text, StyleSheet, View, TouchableOpacity, Image } from "react-native";

export default function Index(props: any) {
  function filterDesc(desc: any) {
    if (desc.length < 20) {
      return desc;
    }
    return `${desc.substring(0, 18)}...`;
  }
  return (
    <TouchableOpacity style={styles.container} onPress={props.onClick}>
      <Image source={{ uri: props.img }} style={styles.shoesimg} />
      <Text style={styles.shoestext}>{filterDesc(props.children)}</Text>
      <View style={{ opacity: 0.4 }}>
        <Text style={styles.shoestext}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: "2%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  shoestext: {
    fontSize: 16,
  },
  shoesimg: {
    borderRadius: 20,

    width: 150,
    height: 150,
  },
});
