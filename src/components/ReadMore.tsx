import { useState } from "react"

import { classNames } from "../helpers/classNameHelper"

export interface ReadMoreProps {
  text: string
  borderless?: boolean
  limit?: number
}

export const ReadMore = (props: ReadMoreProps) => {
  const { text, borderless = false, limit = 200 } = props

  if (text === undefined) return <div>'No information found...'</div>

  const displayButton = text.length > limit
  const [isOpen, setIsOpen] = useState(false)

  const renderText = () => {
    if (isOpen || text.length < limit) return text

    return `${text.substring(0, limit)}...`
  }

  return (
    <div
      className={classNames({
        'read-more': true,
        'read-more--borderless': borderless,
      })}
      data-is-open={isOpen}
      data-has-button={displayButton}
    >
      {renderText()}
      {displayButton && (
        <a className="read-more__button" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? 'Show less' : 'Show more'}
        </a>
      )}
    </div>
  )
}
