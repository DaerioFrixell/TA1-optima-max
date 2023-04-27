import "./cardItem.scss"
import { CardType } from "../../../dataTypes/Card";
import React, { FC } from 'react';
import { useAppDispatch } from "../../../hooks/redux.hook";
import { cardSlice } from "../../../model/card/card.slice";


type CardItemType = Pick<CardType, "id" | "title" | "price" | "image" | "quantity">
export const CardItem: FC<CardItemType> = React.memo(({
  title,
  price,
  image,
  id,
  quantity }
) => {
  const dispatch = useAppDispatch()
  const { increment, decrement, addInCart } = cardSlice.actions

  const addToCart = (id: number) => {
    dispatch(addInCart(id))
  }

  const incrementFunc = (id: number) => {
    dispatch(increment(id))
  }

  const decrementFunc = (id: number) => {
    dispatch(decrement(id))
  }

  return (
    <div className="card-item">
      <img
        className="card-item__img"
        src={image}
        alt=""
        width={"200"}
        height={"200"}
      />
      <div className="card-item__field card-item__field--col">
        <span className="card-item__field__title">name</span>
        <span className="card-item__field__value">{title}</span>
      </div>
      <div className="card-item__field">
        <span className="card-item__field__title">price</span>
        <span className="card-item__field__value">{price}</span>
      </div>
      {(!quantity)
        ? <button onClick={() => addToCart(id)}>add to cart</button>
        : <div className="">
          <button onClick={() => incrementFunc(id)}>+</button>
          <span>quantity: {quantity}</span>
          <button onClick={() => decrementFunc(id)}>-</button>
        </div>
      }
    </div>
  )
})