import { observer } from 'mobx-react'
import React from 'react'

import sport from '../storeMobx/sport'
import { getNameRusByName } from '../dictionary'

import Button from '../components/Button.jsx'

class Uni extends React.Component {
    add = (val) => { sport.addByType(val, this.getLink()) }

    clear = () => { sport.setEmptyByType(this.getLink()) }

    getLink = () => { return (this.props.location.pathname).slice(1) }

    render() {
        let name = getNameRusByName(this.getLink())
        let count = sport.getSportByType(this.getLink())

        return (
            <div className="container text-center">
                <h1 className="">{name}</h1>
                <h1 className="display-4">{count}</h1>
                <div>
                    <div className="btn-group btn-group-lg" role="group" aria-label="Basic example">
                        <Button extraclass="btn-danger" onClick={() => this.add(10)} text="+10" />
                        <Button extraclass="btn-warning" onClick={() => this.add(20)} text="+20" />
                        <Button extraclass="btn-success" onClick={() => this.add(30)} text="+30" />
                        <Button extraclass="btn-info" onClick={() => this.add(40)} text="+40" />
                        <Button extraclass="btn-primary" onClick={() => this.add(50)} text="+50" />
                    </div>
                </div>
                <hr />
                <div>
                    <Button extraclass="btn-secondary" onClick={this.clear} text="Сбросить" />
                </div>
            </div>
        )
    }
}

export default observer(Uni)
