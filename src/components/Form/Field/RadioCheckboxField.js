import React from 'react'

const RadioCheckboxField = ({ field }) => {
  const { type, name, options, required, disabled, initialValue } = field
  return (
    <React.Fragment>
      {options.map(option => (
        <React.Fragment key={name + option}>
          <input
            type={type}
            name={name}
            value={option}
            required={required}
            disabled={disabled}
            defaultChecked={
              type === 'radio'
                ? initialValue === option
                : initialValue.includes(option)
            }
          />
          <label>{option}</label>
        </React.Fragment>
      ))}
    </React.Fragment>
  )
}

export default RadioCheckboxField
