import { cartSlice } from "./cart.slice";
import { CartInitStateType } from "./cart.types";

const { addInCart, clearCart, removeFromCart, increaseCartQuantity, decreaseCartQuantity } = cartSlice.actions
let testState: CartInitStateType;

beforeEach(() => {
  testState = {
    cart: [
      {
        id: 1,
        title: 'title 1',
        price: 100,
        image: 'image 1',
        quantity: 1
      },
      {
        id: 2,
        title: 'title 2',
        price: 200,
        image: 'image 2',
        quantity: 2
      },
    ]
  }
})


describe('cart slice', () => {
  it("add in cart", () => {
    const newState = cartSlice.reducer(testState, addInCart({
      id: 3,
      image: "image 3",
      price: 300,
      quantity: 0,
      title: "title 3"
    }))
    expect(newState.cart).toEqual([
      {
        id: 1,
        title: 'title 1',
        price: 100,
        image: 'image 1',
        quantity: 1
      },
      {
        id: 2,
        title: 'title 2',
        price: 200,
        image: 'image 2',
        quantity: 2
      },
      {
        id: 3,
        title: 'title 3',
        price: 300,
        image: 'image 3',
        quantity: 1
      },
    ])
  })

  it("remove from cart", () => {
    const newState = cartSlice.reducer(testState, removeFromCart(2))
    expect(newState.cart).toEqual([
      {
        id: 1,
        title: 'title 1',
        price: 100,
        image: 'image 1',
        quantity: 1
      }
    ])
  })

  it("clear cart", () => {
    const newState = cartSlice.reducer(testState, clearCart)
    expect(newState.cart).toEqual([])
  })

  it("increase cart quantity", () => {
    const newState = cartSlice.reducer(testState, increaseCartQuantity(2))
    expect(newState.cart).toEqual([
      {
        id: 1,
        title: 'title 1',
        price: 100,
        image: 'image 1',
        quantity: 1
      },
      {
        id: 2,
        title: 'title 2',
        price: 200,
        image: 'image 2',
        quantity: 3
      },
    ])
  })

  it("decrease cart quantity", () => {
    const newState = cartSlice.reducer(testState, decreaseCartQuantity(2))
    expect(newState.cart).toEqual([
      {
        id: 1,
        title: 'title 1',
        price: 100,
        image: 'image 1',
        quantity: 1
      },
      {
        id: 2,
        title: 'title 2',
        price: 200,
        image: 'image 2',
        quantity: 1
      },
    ])
  })
});