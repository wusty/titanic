import React from 'react'
import PropTypes from 'prop-types'

const replaceAll = ''.replaceAll
  ? (str, find, rep) => str.replaceAll(find, rep)
  : (str, find, rep) => str.split(find).join(rep)

export const HTMLContent = ({ content, className }) => {
  const replacedString = replaceAll(content, '<a ', '<a target="_blank" ')
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
