import { call, put, takeEvery } from "redux-saga/effects";
import { getCard as getCardService } from "./card.service";
import { AxiosResponse } from "axios";
import { CardsType } from "../../dataTypes/CardsList";
import { cardSlice } from "./card.slice";
import { CardActionTypes } from "./card.types";


const { error, fetch, success } = cardSlice.actions

export function* getCard() {
  try {
    yield put(fetch())
    const { data, }: AxiosResponse<CardsType> = yield call(getCardService)
    data.map(i => i.quantity = 0)
    yield put(success(data))
  } catch (e) {
    console.log(e)
    yield put(error('err'))
  }
}

export default function* watchCard() {
  yield takeEvery(CardActionTypes.GET_CARD_REQUEST, getCard)
}