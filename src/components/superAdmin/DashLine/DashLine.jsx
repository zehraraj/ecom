import React, { Component } from 'react';
import './DashLine.css';
import more from '../../../static/superAdmin/more.png'
class DashLine extends Component {
    state = {}

    getInstock = () => {
        if (this.props.product.product_in_stock) return "Yes"
        else return "No"
    }

    render() {
        return (
            <div className="Dashlne">
                <h3 className="prod-txt1">{this.props.id}</h3>
                <h3 className="prod-txt2">{this.props.product.product_name}</h3>
                <h3 className="prod-txt3">{this.props.product.category.category_name}</h3>
                <h3 className="prod-txt4">{this.props.product.product_price}</h3>
                <h3 className="prod-txt5">{this.props.product.collection ? this.props.product.collection.collection_name : '----'}</h3>
                {/* <h3 className="prod-txt6">{this.props.product.product_weight}</h3> */}
                <h3 className="prod-txt6">{this.getInstock()}</h3>
                <div className="more-icon prod-txt7" onClick={() => this.props.history.push(`/SuperAdmin/Products/${this.props.product.id}`)}>
                    <img src={more} alt={more} />
                </div>
            </div>
        );
    }
}

export default DashLine;