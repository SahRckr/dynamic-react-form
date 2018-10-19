import React from 'react'
import './Form.css'

const formData = {
  title: 'test',
  onSubmit: e => {
    console.log('Submitted', e)
    e.preventDefault()
  },
  initialValues: {},
  metaData: [
    {
      name: 'name',
      type: 'text', // text, password, date, number, text-area, checkbox, radio, multi-select
      label: '',
      classes: {
        fieldClassName: '',
        labelClassName: '',
        groupClassName: ''
      },
      options: [],
      disabled: false,
      required: false
    }
  ]
}

const getInputElement = field => {
  const similarTypes = ['text', 'number', 'date', 'password']
  const {
    type,
    name,
    classes: { fieldClassName },
    required,
    disabled
  } = field
  if (similarTypes.includes(field.type)) {
    return (
      <input
        type={type}
        name={name}
        className={fieldClassName}
        required={required}
        disabled={disabled}
      />
    )
  } else {
  }
}

const renderInputField = field => {
  const {
    name,
    label,
    classes: { groupClassName, labelClassName }
  } = field
  return (
    <div className={groupClassName} key={name}>
      <label className={labelClassName}>
        {label}
        {getInputElement(field)}
      </label>
    </div>
  )
}

const renderField = field => {
  const { type } = field
  switch (type) {
    case 'text':
    case 'password':
    case 'date':
    case 'number':
      return renderInputField(field)

    default:
      return ''
  }
}

export default function Form(props) {
  const { formData } = props
  return (
    <form className="Form" onSubmit={e => formData.onSubmit(e)}>
      <h1>{formData.title}</h1>
      {formData.metaData.map(field => renderField(field))}
      <input type="submit" />
    </form>
  )
}
