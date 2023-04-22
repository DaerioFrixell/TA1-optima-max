import "./cardItem.scss"
import { FC } from 'react';


type CardItemType = {
  price: number
  title: string
  image: string
}

export const CardItem: FC<CardItemType> = ({
  title,
  price,
  image }
) => {

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
      <button>add to cart</button>
    </div>
  )
}