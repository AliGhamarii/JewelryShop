import { dataProducts } from "./../../data/allProducts";
// import axios from "axios";

// const client = axios.create({
//   baseURL: "http://localhost:8001",
// });

// export async function getProducts() {
//   const { data } = await client("/product");
//   return data;
// }

// export async function getproduct(id: string | number) {
//   const { data } = await client(`/product/${id}`);
//   return data;
// }

export function getProducts() {
  return dataProducts;
}

export function getProduct(id: string | number) {
  return dataProducts.find((item) => item.id === String(id));
}

// export async function login(username: string, password: string) {
//   const { data } = await client({
//     url: "/login",
//     method: "POST",
//     data: {
//       username,
//       password,
//     },
//   });
//   return data;
// }
