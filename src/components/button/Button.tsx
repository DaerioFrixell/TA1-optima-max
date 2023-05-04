import "./button.scss"
import { FC } from "react"

type ButtonType = {
  className: string
  onClick?: () => void
  value?: string
  children?: JSX.Element | JSX.Element[]
}

export const Button: FC<ButtonType> = ({ className, onClick, value, children }) => {
  return (
    <button
      className={`button ${className}`}
      onClick={onClick}
    >
      {value || children}
    </button>

  )
}