import React from 'react'
import PropTypes from 'prop-types'

const Icon = ({ className, id, children }) => (
    <i className={className} id={id}>
      {children}
    </i>
)

Icon.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.node
}

export default Icon
