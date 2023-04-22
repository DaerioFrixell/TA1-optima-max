import "./cardsList.scss"
import { CardItem } from "./cardItem/CardItem"
import { FC, useEffect, useState } from 'react';
import axios from "axios";


export type OneItemType = {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  name: string
  quantity: number
  rating: {
    rate: number
    count: number
  }
}

export type CardsType = OneItemType[]


export const CardList: FC = () => {
  const [data, setData] = useState<CardsType>([])

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products?limit=7')
      .then(res => setData(res.data))
  }, [])


  return (
    <div className="card-list">
      {(!data)
        ? <p>loading...</p>
        : data.map((i: any) => {
          return (
            <CardItem
              key={i.id}
              title={i.title}
              price={i.price}
              image={i.image}
            />
          )
        })
      }
      <CardItem
        title={"add"}
        price={0}
        image={"a"}
      />
    </div>
  )
}