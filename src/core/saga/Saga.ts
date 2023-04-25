import { all } from "redux-saga/effects"
import watchCard from "../../model/card/card.saga"

export default function* rootSaga() {
  yield all([watchCard()])
}