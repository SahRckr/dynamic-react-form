import React from 'react'
import './App.css'
import Form from './components/Form/Form'

const formData = {
  showTime: true,
  title: 'Dynamic React Form',
  onSubmit: data => {
    for (let [key, value] of data.entries()) {
      console.log(key, value)
    }
    console.log('Submitted')
  },
  initialValues: {
    name: 'Anakin',
    gender: 'male',
    likes: ['Pizza', 'Ice cream'],
    sports: 'Table Tennis'
  },
  metaData: [
    {
      name: 'name',
      type: 'text',
      label: 'Name:',
      placeholder: 'Enter your name',
      classes: {
        fieldClassName: 'name-field',
        labelClassName: 'name-label-field',
        groupClassName: 'name-group-field'
      },
      options: [],
      disabled: false,
      required: false
    },
    {
      name: 'password',
      type: 'password',
      label: 'Password:',
      placeholder: 'Enter your password',
      classes: {
        fieldClassName: 'password-field',
        labelClassName: 'password-label-field',
        groupClassName: 'password-group-field'
      },
      options: [],
      disabled: false,
      required: false
    },
    {
      name: 'date',
      type: 'date',
      label: 'Date:',
      classes: {
        fieldClassName: 'date-field',
        labelClassName: 'date-label-field',
        groupClassName: 'date-group-field'
      },
      options: [],
      disabled: false,
      required: false
    },
    {
      name: 'number',
      type: 'number',
      label: 'Number:',
      placeholder: 'Enter any digit',
      classes: {
        fieldClassName: 'number-field',
        labelClassName: 'number-label-field',
        groupClassName: 'number-group-field'
      },
      options: [],
      disabled: false,
      required: true
    },
    {
      name: 'gender',
      type: 'radio',
      label: 'Gender:',
      classes: {
        fieldClassName: 'gender-field',
        labelClassName: 'gender-label-field',
        groupClassName: 'gender-group-field'
      },
      options: ['male', 'female'],
      disabled: false,
      required: true
    },
    {
      name: 'sports',
      type: 'select',
      label: 'Favourite sports:',
      classes: {
        fieldClassName: 'sports-field',
        labelClassName: 'sports-label-field',
        groupClassName: 'sports-group-field'
      },
      options: ['Basketball', 'Football', 'Table Tennis'],
      disabled: false,
      required: true
    },
    {
      name: 'likes',
      type: 'multi-select',
      label: 'Likes:',
      classes: {
        fieldClassName: 'likes-field',
        labelClassName: 'likes-label-field',
        groupClassName: 'likes-group-field'
      },
      options: ['Ice cream', 'Pizza', 'Chocolate'],
      disabled: false,
      required: true
    },
    {
      name: 'about',
      type: 'text-area',
      label: 'About:',
      placeholder: "Type in text to your heart's content",
      classes: {
        fieldClassName: 'about-field',
        labelClassName: 'about-label-field',
        groupClassName: 'about-group-field'
      },
      options: ['Ice cream', 'Pizza', 'Chocolate'],
      disabled: false,
      required: true
    }
  ]
}

const App = () => (
  <div className="App">
    <Form formData={formData} className="Form" />
  </div>
)

export default App
