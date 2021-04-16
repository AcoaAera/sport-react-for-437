import { observer } from 'mobx-react'
import React from 'react'

import sport from '../storeMobx/sport'
import { getSport } from '../localStorage'

class Statistica extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sport: {
                gym: 0,
                press: 0
            }
        }
    }

    componentDidMount() {
        this.setState({ sport: sport.getSport() })
    }

    clear = () => {
        this.setState({
            sport: {
                gym: 0,
                press: 0
            }
        })
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

    render() {

        let arr = !Boolean(getSport()) ? null : getSport().map((el) =>
            <tr key={el.date}>
                <td>{el.date}</td>
                <td>{el.gym}</td>
                <td>{el.press}</td>
            </tr>)

        return (
            <div className="container text-center">
                <blockquote className="blockquote">{this.getCurrentDay()}</blockquote>
                <h1>Анжуманя: <span className="display-4">{this.state.sport.gym}</span></h1>
                <h1>Пресс: <span className="display-4">{this.state.sport.press}</span></h1>
                <hr />
                <div>
                    <button type="button" className="btn btn-secondary" onClick={this.clear}>Сбросить</button>
                </div>
                <hr />
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Дата</th>
                            <th scope="col">Анжуманя</th>
                            <th scope="col">Пресс</th>
                        </tr>
                    </thead>
                    <tbody>
                        {arr}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default observer(Statistica)
