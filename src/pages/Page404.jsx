import React from 'react'

class CheckInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <div className="mt-2">
                <div className="alert alert-danger ">
                    <div className="text-center">Страница не найдена</div>
                </div>
            </div>
        )
    }
}

export default CheckInput
