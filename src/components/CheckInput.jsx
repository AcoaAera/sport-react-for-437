import React from 'react'

class CheckInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: false
        }
    }

    componentDidMount() {
        this.setState({ value: this.props.value })
    }

    myInput = (event) => {
        this.setState({ value: event.target.checked })
        this.props.updateData(event.target.checked)
    }

    render() {
        return (
            <div className="form-group row">
                <label className="col-sm-2 col-form-label"><b>{this.props.nameField}</b></label>
                <div className="col-sm-10">
                    <div className="form-check">
                        <input id={this.props.id} className="form-check-input" type="checkbox" checked={this.state.value} onChange={this.myInput} />
                        <label className="form-check-label" htmlFor="drivingLicence">Наличие прав</label>
                    </div>
                </div>
            </div>
        )
    }
}

export default CheckInput
