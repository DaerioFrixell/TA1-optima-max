import "./cardItem.scss"
import { CardType } from "../../../dataTypes/Card";
import { FC } from 'react';
import { useAppDispatch } from "../../../hooks/redux.hook";
import { cartSlice } from "../../../model/cart/cart.slice";


type CardItemType = Pick<CardType, "id" | "title" | "price" | "image">
export const CardItem: FC<CardItemType> = ({
  title,
  price,
  image,
  id }
) => {
  const dispatch = useAppDispatch()
  const { increment } = cartSlice.actions

  const addToCart = (id: number) => {
    dispatch(increment(1))
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
      <button onClick={() => addToCart(id)}>add to cart</button>
    </div>
  )
}