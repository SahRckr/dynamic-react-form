import React from 'react'
import './Clock.css'
import { formatDateTime } from '../../utils/Time'

export default class Clock extends React.PureComponent {
    state = { time: new Date() }

    tick = (time = new Date()) => this.setState({time})

    componentDidMount() {
        this.interval = setInterval(this.tick, 1000)
    }
    
    render = () => <div className="Clock">{formatDateTime(this.state.time)}</div>

    componentWillUnmount() {
        clearInterval(this.interval)
    }
}
