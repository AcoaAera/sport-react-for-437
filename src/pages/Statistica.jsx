import { observer } from 'mobx-react'
import React from 'react'

import sport from '../storeMobx/sport'
import { getSport } from '../localStorage'
import { positions } from '../dictionary'

class Statistica extends React.Component {
    clear = () => {
        sport.setEmptySport();
    }

    getCurrentDay() {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();

        today = yyyy + '-' + mm + '-' + dd;
        return today
    }

    getRowData(el) {
        return positions.map((el2, i) =>
            !Boolean(el[el2.name]) ?
                <td key={el.date + el2.name + i}>0</td> :
                <td key={el.date + el2.name + el[el2.name]}>{el[el2.name]}</td>)
    }



    render() {
        let beforeHeader = positions.map(el => <h1 key={'cur' + el.name + sport.sport[el.name]}>{el.nameRus}: <span className="display-4">{!Boolean(sport.sport[el.name]) ? 0 : sport.sport[el.name]}</span></h1>)

        let header = positions.map((el) => <th key={el.name} scope="col">{el.nameRus}</th>)
        let body = !Boolean(getSport()) ? null : getSport().map((el) =>
            <tr key={el.date}>
                <td>{el.date}</td>
                {this.getRowData(el)}
            </tr>)

        return (
            <div className="container text-center">
                <blockquote className="blockquote">{this.getCurrentDay()}</blockquote>
                {beforeHeader}
                <hr />
                <div>
                    <button type="button" className="btn btn-secondary" onClick={this.clear}>Сбросить</button>
                </div>
                <hr />


                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Дата</th>
                            {header}
                        </tr>
                    </thead>
                    <tbody>
                        {body}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default observer(Statistica)
