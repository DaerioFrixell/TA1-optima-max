import { CardType } from "../../dataTypes/Card"

export type itemInCartType = Pick<CardType,
  "title"
  | "price"
  | "image"
  | "id"
  | "quantity">

export type ArrItemsinCartType = itemInCartType[]

export type CartInitStateType = {
  cart: ArrItemsinCartType
}
