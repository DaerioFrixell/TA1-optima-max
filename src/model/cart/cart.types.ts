import { CardType } from "../../dataTypes/Card"

export type itemInCartType = Pick<CardType,
  "id"
  | "title"
  | "price"
  | "image"
  | "quantity"
>
export type ArrItemsinCartType = itemInCartType[]
export type CartInitStateType = {
  cart: ArrItemsinCartType
}
