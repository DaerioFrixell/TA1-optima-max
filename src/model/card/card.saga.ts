import { call, put, takeEvery } from "redux-saga/effects";
import {
  CardActionTypes
} from "./card.actionCreator";
import { getCard as getCardService } from "./card.service";
import { AxiosResponse } from "axios";
import { CardsType } from "../../dataTypes/CardsList";
import { cardSlice } from "./card.slice";


const { error, fetch, success } = cardSlice.actions
export function* getCard() {
  try {
    yield put(fetch())
    const { data, }: AxiosResponse<CardsType> = yield call(getCardService)
    yield put(success(data))
  } catch (e) {
    //* ТИПИЗИРОВАТЬ ОШИБКУ */
    console.log(e)
    yield put(error('err'))
  }
}

export default function* watchCard() {
  yield takeEvery(CardActionTypes.GET_CARD_REQUEST, getCard)
}