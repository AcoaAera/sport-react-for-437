import { observer } from 'mobx-react'
import React from 'react'

import sport from '../storeMobx/sport'
import { getNameRusByName } from '../dictionary'

class Uni extends React.Component {
    add = (val) => {
        sport.addByType(val, this.getLink())
    }

    clear = () => {
        sport.setEmptyByType(this.getLink());
    }

    getLink = () => {
        return (this.props.location.pathname).slice(1)
    }

    render() {
        let name = getNameRusByName(this.getLink())
        let count = sport.getSportByType(this.getLink())
        return (
            <div className="container text-center">
                <h1 className="">{name}</h1>
                <h1 className="display-4">{count}</h1>
                <div>
                    <button type="button" className="btn btn-danger btn-lg" onClick={el => this.add(10)}>+10</button>
                    <button type="button" className="btn btn-warning btn-lg" onClick={el => this.add(20)}>+20</button>
                    <button type="button" className="btn btn-success btn-lg" onClick={el => this.add(30)}>+30</button>
                    <button type="button" className="btn btn-info btn-lg" onClick={el => this.add(40)}>+40</button>
                    <button type="button" className="btn btn-primary btn-lg" onClick={el => this.add(50)}>+50</button>
                </div>
                <hr />
                <div>
                    <button type="button" className="btn btn-secondary" onClick={this.clear}>Сбросить</button>
                </div>
            </div>
        )
    }
}

export default observer(Uni)
