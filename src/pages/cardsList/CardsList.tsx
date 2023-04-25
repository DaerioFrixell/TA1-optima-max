import "./cardsList.scss"
import { CardItem } from "./cardItem/CardItem"
import { FC, useEffect } from 'react';
import { useAppSelector } from "../../hooks/redux.hook";
import { useDispatch } from "react-redux";
import { GetCardActionCreator } from "../../model/card/card.actionCreator";


export const CardList: FC = () => {
  const dispatch = useDispatch()
  const { isLoading, cards } = useAppSelector(state => state.card)

  useEffect(() => {
    dispatch(GetCardActionCreator())
  }, [])

  if (isLoading) return <h1>Loading...</h1>

  return (
    <div className="card-list">
      {(!!cards)
        ? cards.map((i: any) => {
          return (
            <CardItem
              key={i.id}
              id={i.id}
              title={i.title}
              price={i.price}
              image={i.image}
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
      />
    </div>
  )
}