import { QuantityCounter } from "../../components/quantityCounter/QuantityCounter"
import { useAppDispatch, useAppSelector } from "../../hooks/redux.hook"
import { cartSlice } from "../../model/cart/cart.slice"
import "./cart.scss"


export const Cart = () => {

  const dispatch = useAppDispatch()
  const { cart } = useAppSelector(state => state.cart)
  const { removeFromCart } = cartSlice.actions


  return (
    <section className="cart">
      <h2 className="cart__title">Shopping cart</h2>
      {(!!cart?.length)
        ? cart.map(i => {
          if (i.quantity === 0) dispatch(removeFromCart(i.id))
          return (
            <div className="cart__item" key={i.id}>
              <p> title: {i.title}</p>
              <p> price: {i.price}</p>
              <img src={i.image} alt="" width="200" height="200" />
              <QuantityCounter id={i.id} quantity={i.quantity} />
            </div>
          )
        }) : <h2 className="cart__title"><i>Here is empty</i></h2>}
    </section>
  )
}