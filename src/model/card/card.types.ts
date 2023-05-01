
import { CardsType } from "../../dataTypes/CardsList"

export enum CardActionTypes {
  GET_CARD_REQUEST = 'getCardRequest',
}

export type GetCardActionCreatorType = {
  type: CardActionTypes.GET_CARD_REQUEST
}

export type getCardResponse = {
  data: {
    cards: CardsType
  }
}

export type CardInitStateType = {
  cards: CardsType | null
  isLoading: boolean,
  error: string | null
}