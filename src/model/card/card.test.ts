import { cardSlice } from "./card.slice";
import { CardInitStateType } from "./card.types";

const { fetch, success, clearQuantityCards, increaseCardQuantity, decreaseCardQuantity } = cardSlice.actions
let testStateAddedInCart: CardInitStateType;

const testStateEmpty: CardInitStateType = {
  cards: null,
  isLoading: false,
  error: null
};;
const testStateIsLoading: CardInitStateType = {
  cards: null,
  isLoading: true,
  error: null
};

beforeEach(() => {
  testStateAddedInCart = {
    cards: [
      {
        id: 1,
        title: 'title 1',
        price: 100,
        image: 'image 1',
        quantity: 3,
        description: "some text",
        category: "some text",
        name: "name product",
        rating: {
          rate: 10,
          count: 10
        }
      },
      {
        id: 2,
        title: 'title 2',
        price: 200,
        image: 'image 2',
        quantity: 2,
        description: "some text",
        category: "some text",
        name: "name product",
        rating: {
          rate: 20,
          count: 20
        }
      },
    ],
    isLoading: false,
    error: null
  };
})


describe('card slice', () => {
  it("fetch card", () => {
    const newState = cardSlice.reducer(testStateEmpty, fetch)
    expect(newState.isLoading).toBeTruthy()
  })

  it("success card", () => {
    const newState = cardSlice.reducer(testStateIsLoading, success([
      {
        id: 1,
        title: 'title 1',
        price: 100,
        image: 'image 1',
        quantity: 0,
        description: "some text",
        category: "some text",
        name: "name product",
        rating: {
          rate: 10,
          count: 10
        }
      },
      {
        id: 2,
        title: 'title 2',
        price: 200,
        image: 'image 2',
        quantity: 0,
        description: "some text",
        category: "some text",
        name: "name product",
        rating: {
          rate: 20,
          count: 20
        }
      },
    ]))
    expect(newState).toEqual({
      cards: [
        {
          id: 1,
          title: 'title 1',
          price: 100,
          image: 'image 1',
          quantity: 0,
          description: "some text",
          category: "some text",
          name: "name product",
          rating: {
            rate: 10,
            count: 10
          }
        },
        {
          id: 2,
          title: 'title 2',
          price: 200,
          image: 'image 2',
          quantity: 0,
          description: "some text",
          category: "some text",
          name: "name product",
          rating: {
            rate: 20,
            count: 20
          }
        },
      ],
      isLoading: false,
      error: null
    })
  })

  it("clear quantity card", () => {
    const newState = cardSlice.reducer(testStateAddedInCart, clearQuantityCards)
    expect(newState.cards).toEqual([
      {
        id: 1,
        title: 'title 1',
        price: 100,
        image: 'image 1',
        quantity: 0,
        description: "some text",
        category: "some text",
        name: "name product",
        rating: {
          rate: 10,
          count: 10
        }
      },
      {
        id: 2,
        title: 'title 2',
        price: 200,
        image: 'image 2',
        quantity: 0,
        description: "some text",
        category: "some text",
        name: "name product",
        rating: {
          rate: 20,
          count: 20
        }
      },
    ])
  })

  it("increase card quantity", () => {
    const newState = cardSlice.reducer(testStateAddedInCart, increaseCardQuantity(2))
    expect(newState.cards).toEqual([
      {
        id: 1,
        title: 'title 1',
        price: 100,
        image: 'image 1',
        quantity: 3,
        description: "some text",
        category: "some text",
        name: "name product",
        rating: {
          rate: 10,
          count: 10
        }
      },
      {
        id: 2,
        title: 'title 2',
        price: 200,
        image: 'image 2',
        quantity: 3,
        description: "some text",
        category: "some text",
        name: "name product",
        rating: {
          rate: 20,
          count: 20
        }
      },
    ])
  })

  it("decrease card quantity", () => {
    const newState = cardSlice.reducer(testStateAddedInCart, decreaseCardQuantity(2))
    expect(newState.cards).toEqual([
      {
        id: 1,
        title: 'title 1',
        price: 100,
        image: 'image 1',
        quantity: 3,
        description: "some text",
        category: "some text",
        name: "name product",
        rating: {
          rate: 10,
          count: 10
        }
      },
      {
        id: 2,
        title: 'title 2',
        price: 200,
        image: 'image 2',
        quantity: 1,
        description: "some text",
        category: "some text",
        name: "name product",
        rating: {
          rate: 20,
          count: 20
        }
      }])
  })
});