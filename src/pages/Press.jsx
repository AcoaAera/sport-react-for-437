import { observer } from 'mobx-react'
import React from 'react'

import sport from '../storeMobx/sport'

class Press extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 0
        }
    }

    add10 = () => {
        let val = 10;
        this.setState({ value: Number(this.state.value) + val });
        sport.addPress(val)
    }
    add20 = () => {
        let val = 20;
        this.setState({ value: Number(this.state.value) + val });
        sport.addPress(val)
    }
    add30 = () => {
        let val = 30;
        this.setState({ value: Number(this.state.value) + val });
        sport.addPress(val)
    }
    add40 = () => {
        let val = 40;
        this.setState({ value: Number(this.state.value) + val });
        sport.addPress(val)
    }
    add50 = () => {
        let val = 50;
        this.setState({ value: Number(this.state.value) + val });
        sport.addPress(val)
    }

    clear = () => {
        this.setState({ value: 0 })
        sport.setEmptyPress();
    }

    componentDidMount() {
        this.setState({ value: sport.getPress() })
    }

    render() {

        return (
            <div className="container text-center">
                <h1>Пресс</h1>
                <h1 className="display-4">{this.state.value}</h1>
                <div>
                    <button type="button" className="btn btn-danger btn-lg" onClick={this.add10}>+10</button>
                    <button type="button" className="btn btn-warning btn-lg" onClick={this.add20}>+20</button>
                    <button type="button" className="btn btn-success btn-lg" onClick={this.add30}>+30</button>
                    <button type="button" className="btn btn-info btn-lg" onClick={this.add40}>+40</button>
                    <button type="button" className="btn btn-primary btn-lg" onClick={this.add50}>+50</button>
                </div>
                <hr />
                <div>
                    <button type="button" className="btn btn-secondary" onClick={this.clear}>Сбросить</button>
                </div>
            </div>
        )
    }
}

export default observer(Press)
