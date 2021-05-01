import React from 'react'
import NumberInput from './NumberInput.jsx'
import TimeInput from './TimeInput.jsx'
import Button from './Button.jsx'


import audio from '../sounds/pic-pic.mp3'

class Timer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            staticInterval: "00:00:20",
            staticPause: "00:00:10",
            staticCount: 10,
            staticTimeBeforeTheStart: "00:00:05",
            curInterval: "00:00:20",
            curPause: "00:00:10",
            curCount: 10,
            curTimeBeforeTheStart: "00:00:05",
            isStopTimer: true,
            currentTimer: "00:00:00"

        }
    }

    getValueFields = (val, id, curId) => {
        console.log(val);
        this.setState({ [id]: val })
        this.setState({ [curId]: val })
    }

    start = () => {
        this.setState({
            curCount: this.state.curCount === this.state.staticCount ? 1 : this.state.curCount,
            isStopTimer: false,
            currentTimer: this.state.curInterval
        })
        var self = this
        setTimeout(function tick() {
            if (!self.state.isStopTimer && self.state.curCount <= self.state.staticCount) {
                if (self.state.curInterval !== "00:00:00") {
                    let time = self.secondsToTime(self.timeToSeconds(self.state.curInterval) - 1);
                    self.setState({
                        curInterval: time,
                        currentTimer: time
                    })
                    if (self.state.curInterval === "00:00:00") new Audio(audio).play();
                } else if (self.state.curPause !== "00:00:00") {
                    let time = self.secondsToTime(self.timeToSeconds(self.state.curPause) - 1)
                    self.setState({
                        curPause: time,
                        currentTimer: time
                    })
                    if (self.state.curPause === "00:00:00") new Audio(audio).play();
                } else {
                    self.setState({
                        curInterval: self.state.staticInterval,
                        curPause: self.state.staticPause,
                        curCount: self.state.curCount + 1,
                        currentTimer: self.state.staticInterval
                    })
                }
                setTimeout(tick, 1000, self);
            }
        }, 1000, self);
    }

    stop() {
        this.setState({ isStopTimer: true })
    }

    playSounds() {
        new Audio(audio).play();
    }

    clear() {
        this.setState({
            isStopTimer: true,
            curInterval: this.state.staticInterval,
            curPause: this.state.staticPause,
            curCount: this.state.staticCount,
            curTimeBeforeTheStart: this.state.staticTimeBeforeTheStart,
            currentTimer: "00:00:00"
        })
    }

    secondsToTime(second) {
        return new Date(second * 1000).toISOString().substr(11, 8);
    }

    timeToSeconds(time) {
        const arr = time.split(":");
        return arr[0] * 3600 + arr[1] * 60 + (+arr[2]);
    }

    render() {
        return (
            <div>
                <div>
                    <TimeInput nameField="Интервал, сек." updateData={(el) => this.getValueFields(el, 'staticInterval', "curInterval")} value={this.state.staticInterval} />
                    <TimeInput nameField="Пауза, сек." updateData={(el) => this.getValueFields(el, 'staticPause', "curPause")} value={this.state.staticPause} />
                    <NumberInput nameField="Количество повторений" updateData={(el) => this.getValueFields(el, 'staticCount', "curCount")} value={this.state.staticCount} />
                </div>

                <div className="container">
                    <div className="text-center timer-result">
                        <span className="mx-1 timer-interval">{this.state.curInterval}</span>
                        <span className="mx-1 timer-count">{this.state.curCount}/{this.state.staticCount}</span>
                        <span className="mx-1 timer-pause">{this.state.curPause}</span>
                    </div>
                    <div className="text-center timer-timer">{this.state.currentTimer}</div>
                </div>
                <div className="text-center">
                    {this.state.isStopTimer ?
                        <Button text="Старт" extraclass="btn-success" onClick={() => this.start()} /> :
                        <Button text="Пауза" extraclass="btn-warning" onClick={() => this.stop()} />}
                    <Button text="Очистить" extraclass="btn-danger" onClick={() => this.clear()} />
                </div>
            </div>
        )
    }
}

export default Timer