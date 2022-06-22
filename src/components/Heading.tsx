import { ComponentProps, PropsWithChildren } from "react"

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export interface HeadingProps extends ComponentProps<HeadingTag> {
  el?: HeadingTag
  size?: 'm' | 'l' | 'xl' | 'xxl' | 'xxxl' | 'xxxxl'
}

export const Heading = (props: PropsWithChildren<HeadingProps>) => {
  const { el = 'h1', size = 'm', className = '', children, ...rest } = props
  const _className = `heading ${className}`

  const HeadingElement = el

  return (
    <HeadingElement className={_className} data-size={size} {...rest}>
      {children}
    </HeadingElement>
  )
}
