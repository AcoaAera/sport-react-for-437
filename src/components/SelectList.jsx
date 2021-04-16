import React from 'react'

class SelectList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 0
        }
    }

    componentDidMount() {
        this.setState({ value: this.props.value })
    }

    listOisitions = this.props.positions.map((el) => <option key={el.id} value={el.id}>{el.name}</option>)

    myInput = (event) => {
        this.setState({ value: event.target.value })
        this.props.updateData(Number(event.target.value))
    }

    render() {
        return (
            <div className="form-group row">
                <label className="col-sm-2 col-form-label"><b>{this.props.nameField}</b></label>
                <div className="col-sm-10">
                    <select id={this.props.id} className="custom-select" value={this.state.value} onChange={this.myInput} >
                        <option value="0" disabled >Выберите один из вариантов</option>
                        {this.listOisitions}
                    </select>
                    <div className="invalid-feedback">
                        {this.props.invalid}
                    </div>
                </div>

            </div >
        )
    }
}

export default SelectList