import { ComponentPropsWithoutRef } from "react"

import { classNames } from "../helpers/classNameHelper"

export interface ButtonProps
  extends Omit<ComponentPropsWithoutRef<'button'>, 'aria-busy'> {
  text: string
  appereance: 'primary' | 'secondary' | 'tertiary'
}

export const Button = (props: ButtonProps) => {
  const { text, appereance, className, ...rest } = props

  return (
    <button
      className={classNames({ button: true, className: className !== '' })}
      data-appereance={appereance}
      {...rest}
    >
      {text}
    </button>
  )
}
