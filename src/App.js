import React, { Component } from 'react'
import './App.css'
import Form from './components/Form/Form'

const formData = {
  title: 'Test form',
  onSubmit: () => {
    console.log('Submitted')
  },
  initialValues: {},
  metaData: [
    {
      name: 'name',
      type: 'text', // text, password, date, number, text-area, checkbox, radio, multi-select
      label: 'name',
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
      label: 'password',
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
      label: 'date',
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
      label: 'number',
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
      label: 'number',
      classes: {
        fieldClassName: 'numberClass',
        labelClassName: '',
        groupClassName: ''
      },
      options: ['male', 'female'],
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
