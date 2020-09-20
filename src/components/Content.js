import React from 'react'
import PropTypes from 'prop-types'

export const HTMLContent = ({ content, className }) => {
  const replacedString = content.replaceAll('<a ', '<a target="_blank" ')
  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: replacedString }}
    />
  )
}

const Content = ({ content, className }) => (
  <div className={className}>{content}</div>
)

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
}

HTMLContent.propTypes = Content.propTypes

export default Content
