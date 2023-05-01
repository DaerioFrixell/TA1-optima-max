import "./button.scss"
import { FC } from "react"

type ButtonType = {
  className: string
  onClick: () => void
  value: string
}

export const Button: FC<ButtonType> = ({ className, onClick, value }) => {
  return (
    <button
      className={`button ${className}`}
      onClick={onClick}
    >
      {value}
    </button>

  )
}