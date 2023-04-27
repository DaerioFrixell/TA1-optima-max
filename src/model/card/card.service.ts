import { api } from "../../core/api/api"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
import { CardsType } from "../../dataTypes/CardsList"

//** ЗАЧЕМ ЭТА ТИПИЗАЦИЯ??? */
// export const getCard = async () => api.get<getCardResponse, AxiosResponse<getCardResponse>>("/products?limit=7")
export const getCard = async () => api.get("/products?limit=7")

export const cardApi = createApi({
  reducerPath: "cardApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
  endpoints: (build) => ({
    fetchCards: build.query<CardsType, number>({
      query: (limit) => ({
        url: "/products",
        params: {
          limit: limit
        }
      })
    })
  })
})