import "./cart.scss"
import { memo } from "react"
import { Link } from "react-router-dom"
import { QuantityCounter } from "../../components/quantityCounter/QuantityCounter"
import { useAppDispatch, useAppSelector } from "../../hooks/redux.hook"
import { cartSlice } from "../../model/cart/cart.slice"
import { cardSlice } from "../../model/card/card.slice"


export const Cart = memo(() => {
  const dispatch = useAppDispatch()
  const { cart } = useAppSelector(state => state.cart)
  const { removeFromCart, clearCart } = cartSlice.actions
  const { clearQuantityCards } = cardSlice.actions
  const clearAll = () => {
    dispatch(clearCart())
    dispatch(clearQuantityCards())
  }

  const totalSum = cart.reduce((prev: number, current) => { return prev + (current.price * current.quantity) }, 0)
  const totalCount = cart.reduce((prev: number, current) => { return prev + current.quantity }, 0)
  return (
    <section className="cart">
      <div className="cart-wrapper">
        <div className="cart__info">
          <h2 className="cart__info__title">Shopping cart</h2>
          <span className="cart__info__count">0 ITEMS IN CART</span>
          <p className="cart__info__links">
            <Link to="/" ><u>Continue Shopping</u></Link>
            <span>or </span>
            <Link to="/"><u>Save Cart</u></Link>
          </p>
        </div>
        <div className="cart__product__wrapper">
          <ul className="cart__product__wrapper__list-items">
            {(!!cart?.length)
              ? cart.map(i => {
                if (i.quantity === 0) dispatch(removeFromCart(i.id))
                return (
                  <li className="cart__product__wrapper__list-items__item" key={i.id}>
                    <div className="cart__product__wrapper__list-items__item__image">
                      <img src={i.image} alt="" width="200" height="200" />
                    </div>
                    <div className="cart__product__wrapper__list-items__item__info">
                      <div className="cart__product__wrapper__list-items__item__info__quantity">
                        <span className="cart__product__wrapper__list-items__item__info__quantity__title">
                          <b>Quantity: </b>
                        </span>
                        <QuantityCounter id={i.id} quantity={i.quantity} />
                      </div>
                      <p><b>Title: </b>{i.title}</p>
                      <p><b>Price: </b>{i.price}$</p>
                    </div>
                  </li>
                )
              }) : <h2 className="cart__info__title"><i>Here is empty</i></h2>}
          </ul>

          <div className="cart__product__wrapper__sidabar">
            <button onClick={clearAll}>CLEAR ALL CART BUTTON</button>
            <div className="cart__product__wrapper__sidabar__discount">
              <input placeholder="coupon / store credit" />
              <button>APPLY</button>
            </div>
            <div className="cart__product__wrapper__sidabar__info">
              <p><b>Grand total: </b>{totalSum}$</p>
              <p><b>Total count product: </b>{totalCount}</p>
            </div>
            <button className="cart__product__wrapper__sidabar__buy">BUY NOW</button>
          </div>

        </div>
      </div>
    </section>
  )
})