import React from 'react'

const SelectField = ({ field }) => {
  const {
    name,
    type,
    options,
    required,
    disabled,
    placeholder,
    initialValue
  } = field
  return (
    <select
      name={name}
      defaultValue={initialValue}
      required={required}
      disabled={disabled}
      multiple={type === 'multi-select'}
      placeholder={placeholder}
    >
      {options.map(option => (
        <option value={option} key={name + option}>
          {option}
        </option>
      ))}
    </select>
  )
}

export default SelectField
