import { Route, Routes } from "react-router-dom"
import { MainPage } from "../pages/mainPage/MainPage"
import { CardList } from "../pages/cardsList/CardsList"
import { Cart } from "../pages/cart/Cart"

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/cards-list" element={<CardList />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  )
}