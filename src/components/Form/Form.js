import React from 'react'
import './Form.css'
import GenericInputField from './Field/GenericInputField'
import RadioCheckboxField from './Field/RadioCheckboxField'
import SelectField from './Field/SelectField'
import TextAreaField from './Field/TextAreaField'
import Clock from '../Clock/'

const getFieldElement = field => {
  const similarTypes = ['text', 'number', 'date', 'password']
  const { type } = field
  if (similarTypes.includes(type)) {
    return <GenericInputField field={field} />
  } else if (type === 'radio' || type === 'checkbox') {
    return <RadioCheckboxField field={field} />
  } else if (type === 'select' || type === 'multi-select') {
    return <SelectField field={field} />
  } else if (type === 'text-area') {
    return <TextAreaField field={field} />
  } else {
    console.warn(`Invalid element type ${type}`)
    return <div />
  }
}

const renderField = (field, initialValues) => {
  const {
    name,
    label,
    classes: { groupClassName, labelClassName }
  } = field
  return (
    <div className={groupClassName} key={name}>
      <label className={labelClassName}>{label}</label>
      {getFieldElement(field, initialValues)}
    </div>
  )
}

export default function Form(props) {
  const { formData } = props
  const { title, onSubmit, initialValues, showTime, metaData } = formData
  metaData.forEach(field => {
    if (initialValues && initialValues[field.name]) {
      field.initialValue = initialValues[field.name]
    }
  })
  return (
    <form
      className="Form"
      onSubmit={e => {
        e.preventDefault()
        const data = new FormData(e.target)
        onSubmit && onSubmit(data)
      }}
    >
      <h1>{title}</h1>
      {showTime && <Clock />}
      {metaData.map(renderField)}
      <div className="submit-container">
        <input type="submit" />
      </div>
    </form>
  )
}
