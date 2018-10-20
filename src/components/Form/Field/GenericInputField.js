import React from 'react'

const GenericInputField = ({ field }) => {
  const {
    type,
    name,
    classes: { fieldClassName },
    required,
    disabled,
    placeholder,
    initialValue
  } = field
  return (
    <input
      type={type}
      name={name}
      className={fieldClassName}
      required={required}
      disabled={disabled}
      placeholder={placeholder}
      defaultValue={initialValue}
    />
  )
}

export default GenericInputField
