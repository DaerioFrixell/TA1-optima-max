import axios from "axios";

export const api = axios.create({
  baseURL: "https://fakestoreapi.com",
  headers: {
    "accept": "application/json",
    "content-type": "application/json"
  }
}
)