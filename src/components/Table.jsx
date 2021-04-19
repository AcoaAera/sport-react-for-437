import React from 'react'

class Table extends React.Component {

    printHeader = () => {
        return <tr>{this.props.headers.map(el => <th key={el} scope="col">{el}</th>)}</tr>
    }

    printRowBody = (row, index) => {
        return row.map((el, i) => <td key={`rowbody_${index}_${i}_${el}`} > {el}</td >)
    }

    printBody = () => {
        return this.props.body.map((el, i) => <tr key={`row_ ${i}`}>{this.printRowBody(el, i)}</tr>)
    }

    render() {
        return (
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        {this.printHeader()}
                    </thead>
                    <tbody>
                        {this.printBody()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table
