import { Product } from "../interfaces/product";

import AsyncStorage from "@react-native-async-storage/async-storage";

const state: any = {
  products: [],
  status: "",
  items: [],
};

async function validation(params: Product) {
  const result = await list();
  console.log(result);

  for (let index = 0; index < result?.length; index++) {
    if (result[index].id == params.id) {
      state.status = "true";
      error("Produto ja esta no carinho");
      return state.status;
    } else {
      state.status = "false";
      success("Produto add no carinho");
      return state.status;
    }
  }
}

export async function list() {
  try {
    state.products = await AsyncStorage.getItem("car");
    return JSON.parse(state.products);
  } catch (e) {
    // error reading value
  }

  return state.products;
}
export async function update(params: any, stack: string, id: number) {
  let add = {
    id: id,
    name: params.children,
    price: params.price,
    image: params.image,
    stock: parseInt(stack),
  };
  const result = await list();
  let product: any;
  result == null ? (product = []) : (product = result);
  try {
    let filterProd = product.filter((item: any) => item.id !== id);

    filterProd.push(add);
    const jsonValue = JSON.stringify(filterProd);
    await AsyncStorage.setItem("car", jsonValue);
    return state.status;
  } catch (error) {
    console.error(error);
  }
}

export async function add(params: Product) {
  let validate: any = await validation(params);
  if (validate == "true") return;
  const result = await list();
  let product: any;
  result == null ? (product = []) : (product = result);
  let add = {
    id: params.id,
    name: params.name,
    price: params.price,
    image: params.image,
    stock: 1,
  };
  product.splice(0, 0, add);
  try {
  } catch (error) {
    console.log(error);
  }

  if (params.id === null) {
    return false;
  }

  try {
    const jsonValue = JSON.stringify(product);
    await AsyncStorage.setItem("car", jsonValue);
  } catch (e) {
    console.log(e);
  }
  list();
}
function error(msg: String) {
  console.log(msg);
}
function success(msg: String) {}
