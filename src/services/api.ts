import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:8001",
});

export async function getProducts() {
  const { data } = await client("/product");
  return data;
}

export async function getproduct(id: string | number) {
  const { data } = await client(`/product/${id}`);
  return data;
}
