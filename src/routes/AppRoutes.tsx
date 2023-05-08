import { Route, Routes } from "react-router-dom"
import { MainPage } from "../pages/mainPage/MainPage"
import { CardList } from "../pages/cardsList/CardsList"
import { Cart } from "../pages/cart/Cart"

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/TA-9-optima-max" element={<MainPage />} />
      <Route path="/TA-9-optima-max/cards-list" element={<CardList />} />
      <Route path="/TA-9-optima-max/cart" element={<Cart />} />
    </Routes>
  )
}