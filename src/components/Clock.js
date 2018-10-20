import React from 'react'

const formatDateTime = date => {
  // DD/MM/YY hh:mm:ss
  let day, month, year, hours, minutes, seconds
  day = date.getDate()
  month = date.getMonth()
  year = date.getFullYear()
  hours = date.getHours()
  minutes = date.getMinutes()
  seconds = date.getSeconds()
  return (
    [day, month + 1, year].join('/') + ' ' + [hours, minutes, seconds].join(':')
  )
}

export default class Clock extends React.Component {
  state = {
    time: new Date()
  }
  tick = () => {
    this.setState({
      time: new Date()
    })
  }
  componentDidMount() {
    setInterval(this.tick, 1000)
  }
  render() {
    return <div>{formatDateTime(this.state.time)}</div>
  }
}
