import { observer } from 'mobx-react'
import React from 'react'

import sport from '../storeMobx/sport'
import { getSport } from '../localStorage'
import { positions } from '../dictionary'
import { getCurrentDay } from '../different'

import Table from '../components/Table.jsx'
import Button from '../components/Button.jsx'
import Carousel from '../components/Carousel.jsx'
import Timer from '../components/Timer.jsx'
import fonCarousel from '../img/tekstura-tekstury-fon-linii.jpg'

class Statistica extends React.Component {
    clear = () => { sport.setEmptySport() }

    createHeader = () => {
        let array = ['Дата']
        positions.map(el => array.push(el.nameRus))
        return array
    }

    createBody = () => {
        let array = []
        if (!Boolean(getSport())) return array
        getSport().forEach(el => {
            let row = positions.map(pos => !Boolean(el[pos.name]) ? 0 : el[pos.name])
            row.unshift(el.date)
            array.push(row)
        })
        return array
    }

    render() {

        return (
            <div className="container text-center">
                <blockquote className="blockquote">{getCurrentDay()}</blockquote>
                <Carousel fon={fonCarousel} list1={sport.getListCurrentSportName()} list2={sport.getListCurrentSportValue()} dataInterval="10000" id="carousel"></Carousel>
                <hr />
                <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">Интервальный таймер</button>
                <div className="collapse" id="collapseExample">
                    <div className="card card-body">
                        <Timer />
                    </div>
                </div>
                <hr />
                <div>
                    <Button extraclass="btn-secondary" onClick={this.clear} text="Сбросить" />
                </div>
                <hr />
                <Table headers={this.createHeader()} body={this.createBody()} />
            </div>
        )
    }
}

export default observer(Statistica)
