import { api } from "../../core/api/api"

// export const getCard = async () => api.get<getCardResponse, AxiosResponse<getCardResponse>>("/products?limit=7")
export const getCard = async () => api.get("/products?limit=7")