export type CardType = {
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