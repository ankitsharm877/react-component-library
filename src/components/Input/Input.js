import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ type, id, className, placeholder }) => (
    <input type={type} id={id} className={className} placeholder={placeholder} />
)

Input.propTypes = {
    type: PropTypes.string,
    id: PropTypes.string,
    className: PropTypes.string,
    value:PropTypes.string
}

export default Input
