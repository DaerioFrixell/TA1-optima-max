/**  TYPES */
export enum CardActionTypes {
  GET_CARD_REQUEST = 'getCardRequest',
}

export type GetCardActionCreatorType = {
  type: CardActionTypes.GET_CARD_REQUEST
}

/** ACTION CREATOR */
export const GetCardActionCreator = () => (
  console.log('GetCardActionCreator'),
  {
    type: CardActionTypes.GET_CARD_REQUEST
  })