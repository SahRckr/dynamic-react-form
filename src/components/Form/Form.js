import React from 'react'
import './Form.css'
import GenericInputField from './Field/GenericInputField'
import RadioCheckboxField from './Field/RadioCheckboxField'
import SelectField from './Field/SelectField'
import TextAreaField from './Field/TextAreaField'
import Clock from '../Clock/'

const fieldMap = (field) => ({
    'text': <GenericInputField field={field} />,
    'number': <GenericInputField field={field} />,
    'date': <GenericInputField field={field} />,
    'password': <GenericInputField field={field} />,
    'radio': <RadioCheckboxField field={field} />,
    'checkbox': <RadioCheckboxField field={field} />,
    'select': <SelectField field={field} />,
    'multi-select': <SelectField field={field} />,
    'text-area': <TextAreaField field={field} />
})

const getFieldElement = (field) => fieldMap(field) ? fieldMap(field)[ field.type ] : null

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

const handleFormSubmit = (e, onSubmit) => {
    e.preventDefault()
    const data = new FormData(e.target)
    onSubmit && onSubmit(data)
}

export default function Form(props) {
    const { formData } = props
    const { title, onSubmit, initialValues = {}, showTime, metaData } = formData
    const formMetaData = metaData.map(field => initialValues.hasOwnProperty(field.name) ? ({ ...field, initialValue: initialValues[ field.name ] }) : field)
    return (
        <form
            className="Form"
            onSubmit={e => handleFormSubmit(e, onSubmit)}
        >
            <h1>{title}</h1>
            {showTime ? <Clock /> : null}
            {formMetaData.map(renderField)}
            <div className="submit-container">
                <input type="submit" />
            </div>
        </form>
    )
}
