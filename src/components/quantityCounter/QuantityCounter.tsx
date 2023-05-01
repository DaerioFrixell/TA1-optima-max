import { useAppDispatch } from "../../hooks/redux.hook"
import { cardSlice } from "../../model/card/card.slice"
import { cartSlice } from "../../model/cart/cart.slice"
import { Button } from "../button/Button"
import "./quantityCounter.scss"
import { FC } from "react"

type QuantityCounterType = {
  id: number
  quantity: number
}

export const QuantityCounter: FC<QuantityCounterType> = ({ id, quantity }) => {
  const dispatch = useAppDispatch()
  const { decreaseCardQuantity, increaseCardQuantity } = cardSlice.actions
  const { increaseCartQuantity, decreaseCartQuantity } = cartSlice.actions

  const incrementFunc = (id: number) => {
    dispatch(increaseCardQuantity(id))
    dispatch(increaseCartQuantity(id))
  }
  const decrementFunc = (id: number) => {
    dispatch(decreaseCardQuantity(id))
    dispatch(decreaseCartQuantity(id))
  }
  return (
    <div className="quantity-counter-wrapper">
      <Button className={"quantity-counter-wrapper__btn-counter"} onClick={() => incrementFunc(id)} value="+" />
      <span className="quantity-counter-wrapper__quantity">{quantity}</span>
      <Button className={"quantity-counter-wrapper__btn-counter"} onClick={() => decrementFunc(id)} value="-" />
    </div>

  )
}