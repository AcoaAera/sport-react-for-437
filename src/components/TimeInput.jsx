import React from 'react'

class NumberInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '00:00:05'
        }
    }

    componentDidMount() {
        this.setState({ value: this.props.value })
    }

    myInput = (event) => {
        this.setState({ value: event.target.value })
        this.props.updateData(event.target.value)
    }

    render() {
        return (
            <div className="form-group row">
                <label className="col-sm-2 col-form-label"><b>{this.props.nameField}</b></label>
                <div className="col-sm-10">
                    <input id={this.props.id} type="time" className="form-control" onChange={this.myInput} value={this.state.value} step="1" />
                    <div className="invalid-feedback">
                        {this.props.invalid}
                    </div>
                </div>
            </div>
        )
    }
}

export default NumberInput