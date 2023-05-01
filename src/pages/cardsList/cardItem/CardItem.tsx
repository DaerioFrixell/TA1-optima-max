import "./cardItem.scss"
import { CardType } from "../../../dataTypes/Card";
import React, { FC } from 'react';
import { useAppDispatch, useAppSelector } from "../../../hooks/redux.hook";
import { cardSlice } from "../../../model/card/card.slice";
import { cartSlice } from "../../../model/cart/cart.slice";
import { Button } from "../../../components/button/Button";
import { QuantityCounter } from "../../../components/quantityCounter/QuantityCounter";


type CardItemType = Pick<CardType, "id" | "title" | "price" | "image" | "quantity">

export const CardItem: FC<CardItemType> = React.memo(({
  title,
  price,
  image,
  id,
  quantity
}) => {
  const dispatch = useAppDispatch()
  const { increaseCardQuantity } = cardSlice.actions
  const { addInCart } = cartSlice.actions

  const addToCart = (
    title: string,
    price: number,
    image: string,
    id: number,
    quantity: number
  ) => {
    let newItem = { title, price, image, id, quantity }
    dispatch(addInCart(newItem))
    dispatch(increaseCardQuantity(id))
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
      <span className="card-item__value">{title}</span>
      <span className="card-item__value">{price}$</span>

      {(!quantity)
        ? <Button
          className={"card-item__button"}
          onClick={() => addToCart(
            title,
            price,
            image,
            id,
            quantity
          )}
          value={"add to cart"}
        />
        :
        <QuantityCounter id={id} quantity={quantity} />
      }
    </div>
  )
})