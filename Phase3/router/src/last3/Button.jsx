import React from 'react'

const Button = ({
    children, varient="primary", onClick, disable = false, type="button",
}) => {
  return (
    <button
        type={type}
        className={`btn ${varient}`}
        onClick={onClick}
        disabled={disable}
    >
        {children}
    </button>
  )
}

export default Button
