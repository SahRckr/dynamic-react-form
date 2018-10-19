import React from 'react'
import ReactDOM from 'react-dom'
import './Form.css'

const formData = {
  title: 'test',
  onSubmit: data => {
    console.log(data)
  },
  initialValues: {},
  metaData: [
    {
      name: 'name',
      type: 'text', // text done, password done, date done, number done, text-area, checkbox, radio, multi-select
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

const getInputElement = (field, initialValues) => {
  const similarTypes = ['text', 'number', 'date', 'password']
  const {
    type,
    name,
    classes: { fieldClassName },
    required,
    disabled,
    options
  } = field
  if (similarTypes.includes(type)) {
    return (
      <input
        type={type}
        name={name}
        className={fieldClassName}
        required={required}
        disabled={disabled}
        defaultValue={initialValues[name]}
      />
    )
  } else if (type === 'radio') {
    return (
      <React.Fragment>
        {options.map(option => (
          <React.Fragment key={option}>
            <input type="radio" name={name} value={option} />
            <label>{option}</label>
          </React.Fragment>
        ))}
      </React.Fragment>
    )
  } else if (type === 'checkbox') {
  }
}

const renderInputField = (field, initialValues) => {
  const {
    name,
    label,
    classes: { groupClassName, labelClassName }
  } = field
  return (
    <div className={groupClassName} key={name}>
      <label className={labelClassName}>
        {label}
        {getInputElement(field, initialValues)}
      </label>
    </div>
  )
}

const renderField = (field, initialValues) => {
  const { type } = field
  switch (type) {
    case 'text':
    case 'password':
    case 'date':
    case 'number':
    case 'radio':
    case 'checkbox':
      return renderInputField(field, initialValues)

    default:
      return ''
  }
}

export default function Form(props) {
  const { formData } = props
  const { title, onSubmit, initialValues } = formData
  return (
    <form
      className="Form"
      onSubmit={e => {
        e.preventDefault()
        const data = new FormData(e.target)
        onSubmit(data)
      }}
    >
      <h1>{formData.title}</h1>
      {formData.metaData.map(field => renderField(field, initialValues))}
      <input type="submit" />
    </form>
  )
}
