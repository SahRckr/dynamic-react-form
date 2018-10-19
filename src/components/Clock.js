import React from 'react'

const formatDate = date => {
  // DD/MM/YY hh:mm:ss
  let day, month, year, hour, minute, second
  day = date.getDay()
  month = date.getMonth()
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
    return <div>{this.state.time}</div>
  }
}
