import "./cardsList.scss"
import { CardItem } from "./cardItem/CardItem"
import { FC, memo } from 'react';
import { useAppSelector } from "../../hooks/redux.hook";
import { cardApi } from "../../model/card/card.service";


export const CardList: FC = memo(() => {
  const { data: cards } = cardApi.useFetchCardsQuery(7)
  const { isLoading } = useAppSelector(state => state.card)


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
      <CardItem
        title={"add"}
        price={0}
        image={"a"}
        id={123}
        quantity={0}
      />
    </div>
  )
})