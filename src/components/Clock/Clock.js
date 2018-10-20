import React from 'react'
import './Clock.css'
import { formatDateTime } from '../../utils/Time'

export default class Clock extends React.PureComponent {
  state = {
    time: new Date()
  }
  tick = () => {
    this.setState({
      time: new Date()
    })
  }
  componentDidMount() {
    this.interval = setInterval(this.tick, 1000)
  }
  render() {
    return <div className="Clock">{formatDateTime(this.state.time)}</div>
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }
}
