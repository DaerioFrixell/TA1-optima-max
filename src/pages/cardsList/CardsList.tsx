import "./cardsList.scss"
import { CardItem } from "./cardItem/CardItem"
import { FC, memo } from 'react';
import { useAppSelector } from "../../hooks/redux.hook";


export const CardList: FC = memo(() => {
  const { isLoading, cards } = useAppSelector(state => state.cards)
  if (isLoading) return <h1>Loading...</h1>

  return (
    <div className="card-list">
      {(!!cards)
        ? cards.map(i => {
          return (
            <CardItem
              key={i.id}
              id={i.id}
              title={i.title}
              price={i.price}
              image={i.image}
              quantity={i.quantity}
            />
          )
        })
        : <p>no any cards</p>
      }
    </div>
  )
})