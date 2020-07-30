import './Button.css';
import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ className, id, children, onClick }) => (
    <button className={className} id={id} onClick={onClick}>
      {children}
    </button>
)

Button.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func
}

export default Button
