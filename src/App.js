import React, { Component } from 'react'
import './App.css'
import Form from './components/Form/Form'

const formData = {
  showTime: true,
  title: 'Dynamic React Form',
  onSubmit: () => {
    console.log('Submitted')
  },
  initialValues: {
    name: 'Arjun',
    gender: 'male',
    likes: ['Pizza', 'Ice cream'],
    sports: 'Table Tennis'
  },
  metaData: [
    {
      name: 'name',
      type: 'text', // text, password, date, number, text-area, checkbox, radio, multi-select
      label: 'Name:',
      placeholder: 'Enter your name',
      classes: {
        fieldClassName: '',
        labelClassName: '',
        groupClassName: ''
      },
      options: [],
      disabled: false,
      required: false
    },
    {
      name: 'password',
      type: 'password', // text, password, date, number, text-area, checkbox, radio, multi-select
      label: 'Password:',
      placeholder: 'Enter your password',
      classes: {
        fieldClassName: '',
        labelClassName: '',
        groupClassName: ''
      },
      options: [],
      disabled: false,
      required: false
    },
    {
      name: 'date',
      type: 'date', // text, password, date, number, text-area, checkbox, radio, multi-select
      label: 'Date:',
      classes: {
        fieldClassName: '',
        labelClassName: '',
        groupClassName: ''
      },
      options: [],
      disabled: false,
      required: false
    },
    {
      name: 'number',
      type: 'number', // text, password, date, number, text-area, checkbox, radio, multi-select
      label: 'Number:',
      placeholder: 'Enter any digit',
      classes: {
        fieldClassName: 'numberClass',
        labelClassName: '',
        groupClassName: ''
      },
      options: [],
      disabled: false,
      required: true
    },
    {
      name: 'gender',
      type: 'radio', // text, password, date, number, text-area, checkbox, radio, multi-select
      label: 'Gender:',
      classes: {
        fieldClassName: 'numberClass',
        labelClassName: '',
        groupClassName: ''
      },
      options: ['male', 'female'],
      disabled: false,
      required: true
    },
    {
      name: 'sports',
      type: 'select', // text, password, date, number, text-area, checkbox, radio, multi-select
      label: 'Favourite sports:',
      classes: {
        fieldClassName: 'numberClass',
        labelClassName: '',
        groupClassName: ''
      },
      options: ['Basketball', 'Football', 'Table Tennis'],
      disabled: false,
      required: true
    },
    {
      name: 'likes',
      type: 'multi-select', // text, password, date, number, text-area, checkbox, radio, multi-select
      label: 'Likes:',
      classes: {
        fieldClassName: 'numberClass',
        labelClassName: '',
        groupClassName: ''
      },
      options: ['Ice cream', 'Pizza', 'Chocolate'],
      disabled: false,
      required: true
    },
    {
      name: 'likes',
      type: 'text-area', // text, password, date, number, text-area, checkbox, radio, multi-select
      label: 'Likes:',
      placeholder: "Type in text to your heart's content",
      classes: {
        fieldClassName: 'numberClass',
        labelClassName: '',
        groupClassName: ''
      },
      options: ['Ice cream', 'Pizza', 'Chocolate'],
      disabled: false,
      required: true
    }
  ]
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form formData={formData} className="Form" />
      </div>
    )
  }
}

export default App
