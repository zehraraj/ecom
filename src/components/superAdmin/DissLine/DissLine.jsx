import React, { Component } from 'react';
import './DissLine.css';
import more from '../../../static/superAdmin/more.png'

class DissLine extends Component {
    state = {}
    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.value !== this.props.value) {
            this.setState({ value: this.props.value })
        }
    }
    render() {
        return (
            <div className="Dissline">
                <h3 className="sale-text-1">{this.props.id}</h3>
                <h3 className="sale-text-2">{this.props.sale.start_date}</h3>
                <h3 className="sale-text-3">{this.props.sale.end_date}</h3>
                <h3 className="sale-text-4">{this.props.sale.value}</h3>
                <div className="more-icon sale-5" onClick={() => this.props.history.push(`/SuperAdmin/Sales/${this.props.sale.id}`)}>
                    <img src={more} alt={more} />
                </div>
            </div>
        );
    }
}

export default DissLine;