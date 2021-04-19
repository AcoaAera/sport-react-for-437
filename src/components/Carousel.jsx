import '../App.css'
import React from 'react'

class Carousel extends React.Component {
    printIndicator = () => {
        return this.props.list1
            .map((el, i) =>
                i === 0 ?
                    <li key={`#${this.props.id}_${i}`} data-target={`#${this.props.id}`} data-slide-to={i} className="active"></li> :
                    <li key={`#${this.props.id}_${i}`} data-target={`#${this.props.id}`} data-slide-to={i}></li>)
    }

    printCarousel = () => {
        return this.props.list1.map((el, i) =>
            <div key={`carousel-item_${el}_${this.props.list2[i]}`} className={`carousel-item${i === 0 ? " active" : ''}`} data-interval={this.props.dataInterval}>
                <div style={{ background: `url(${this.props.fon})` }} className='test'>
                    <div className="carousel-caption">
                        <h1>{el}</h1>
                        <span className="display-4">{this.props.list2[i]}</span>
                    </div>
                </div>
            </div >)
    }

    render() {
        return (
            <div id={this.props.id} className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    {this.printIndicator()}
                </ol>
                <div className="carousel-inner">
                    {this.printCarousel()}
                </div>
                <a className="carousel-control-prev" href={`#${this.props.id}`} role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href={`#${this.props.id}`} role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        )
    }
}

export default Carousel
