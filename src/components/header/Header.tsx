import "./header.scss"
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux.hook";

export const Header = () => {
  const { cart } = useAppSelector(state => state.cart)
  const totalCount = cart.reduce((prev: number, current) => { return prev + current.quantity }, 0)

  return (
    <div className="wrapper-header">
      <header className="header">
        <span className="header__logo">any-LOGO</span>
        <nav className="header__nav">
          <ul className="header__nav__list">
            <li className="header__nav__list__item">
              <Link to="/">main-page</Link>
            </li>
            <li className="header__nav__list__item">
              <Link to="cards-list">cards-list</Link>
            </li>
          </ul>
        </nav>

        <div className="header__input-wrapper">
          <img className="header__input-wrapper__icon" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTMgN0E2IDYgMCAxMTEgN2E2IDYgMCAwMTEyIDB6IiBzdHJva2U9IiMzQTQ4NTAiIHN0cm9rZS13aWR0aD0iMS41Ii8+PHBhdGggZD0iTTEyLjUgMTEuNUwxNiAxNSIgc3Ryb2tlPSIjM0E0ODUwIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PC9zdmc+"
            alt=""
            width="17"
            height="17"
          />
          <input className="header__input-wrapper__my-input" placeholder="I'm Searching For..." />
        </div>
        <button className="header__icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 22" width="22" height="22">
            <path fill="none" stroke="#89959C" d="M12 21c1.987-1.153 11.81-6.572 11.493-13.974C23.175-.375 13.453-.936 12 5.218 10.548-.936.825-.375.508 7.026.19 14.428 10.013 19.847 12 21z"></path>
          </svg>
        </button>
        <button className="header__icon">
          <Link to="cart" className="header__icon__link">
            <div className="header__icon__link__counter">{totalCount}</div>
            <img alt="" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjNEQ0RDREIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxjaXJjbGUgY3g9IjkuODEiIGN5PSIyMC41OSIgcj0iLjk1IiBmaWxsPSIjRDhEOEQ4IiBzdHJva2Utd2lkdGg9IjIiLz48Y2lyY2xlIGN4PSIxOC40IiBjeT0iMjAuNTkiIHI9Ii45NSIgZmlsbD0iI0Q4RDhEOCIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0iTTEuNyAxLjk4aDMuMTdMNy43IDE0LjA5YTIuMTIgMi4xMiAwIDAwMi4xMSAxLjczaDguMTNjMS4wMi4wMiAxLjktLjcgMi4xLTEuNzNsMS43LTcuOEg2LjU2IiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+" />
          </Link>
        </button>
      </header >
    </div>
  )
}