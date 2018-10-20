import React from 'react'

const TextAreaField = ({ field }) => {
  const { name, placeholder, initialValue, required, disabled } = field
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      defaultValue={initialValue}
      required={required}
      disabled={disabled}
    />
  )
}

export default TextAreaField
