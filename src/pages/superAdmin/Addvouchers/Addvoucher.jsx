/* eslint-disable */
import React, { Component } from 'react';
import './Addvouchers.css';
import cart1 from '../../../static/superAdmin/cart/Cart1.jpeg';
import Sidenav from '../../../components/superAdmin/SideNav/SideNav';
import Box2 from '../../../components/superAdmin/Box2/Box2';
import Disktexticoncont from '../../../components/superAdmin/Disktexticoncont/Distxtcont';
import Navbar from '../../../components/superAdmin/Navbar/Navbar';
import Loading from '../../../components/superAdmin/Loading/Loading';
import TextIcon from '../../../components/superAdmin/TextIcon/TextIcon';
import Addvoucherrect from '../../../components/superAdmin/Addvoucherrect/Addvoucherrect';
import Base from '../../../components/superAdmin/Base/Base'


import { connect } from 'react-redux'
import * as ACTION from '../../../middleware/actions/superAdminActions'
import config from '../../../middleware/config';

class Addvoucher extends Component {
    state = {
        discount_type: "",
        discount_type_error: '',
        discount_value: "",
        discount_value_error: '',
        name: "",
        name_error: "",
        code: "",
        code_error: "",
        limit: "",
        limit_error: "",
        start_date: "",
        end_date: "",
        min_spent: "",
        min_spent_error: '',

        value: "",

        update: false,
        url: config.baseUrl + config.coupons
    };

    componentDidMount = () => {
        if (isNaN(this.props.match.params.id)) {
            this.setState({ update: false })
        } else {
            this.setState({ update: true })
            this.props.getVoucher(this.state.url + `/${this.props.match.params.id}`)
        }
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.addDiscountResponse !== this.props.addDiscountResponse) {
            if (this.props.addDiscountResponse.success)
                this.state.update ?
                    this.props.updateVoucher(
                        this.props.match.params.id,
                        this.props.addDiscountResponse.data.id,
                        this.state.name,
                        this.state.code,
                        this.state.limit,
                        this.state.min_spent,
                        this.state.start_date,
                        this.state.end_date
                    ) :
                    this.props.addVoucher(
                        this.props.addDiscountResponse.data.id,
                        this.state.name,
                        this.state.code,
                        this.state.limit,
                        this.state.min_spent,
                        this.state.start_date,
                        this.state.end_date
                    )
        }

        else if (prevProps.voucherResponse !== this.props.voucherResponse) {
            if (this.props.voucherResponse.success) {
                this.props.history.push('/SuperAdmin/Vouchers')
            }
        }

        else if (prevProps.getVoucherResponse !== this.props.getVoucherResponse) {
            if (this.props.getVoucherResponse.success) {
                let data = this.props.getVoucherResponse.data
                this.setState({
                    name: data.coupon_name,
                    code: data.coupon_code,
                    limit: data.coupon_limits,
                    value: data.coupon_value,
                    min_spent: data.min_spent,
                    start_date: data.coupon_valid_from.substr(0, 10),
                    end_date: data.coupon_valid_to.substr(0, 10),

                    discount_type: { id: 1, value: data.discount.discount_type },
                    discount_value: data.discount.discount_value,
                })
                console.log(this.props.getVoucherResponse.data)
            }
        }
    }

    handleChange = (event, value) => {
        this.setState({ [event.target.name]: value.value, [event.target.name + "_error"]: value.error })
    }

    dropdownHandleChange = (name, data, error) => {
        this.setState({ [name]: data, [name + "_error"]: error })
    }

    startDateHandleChange = (date) => {
        this.setState({ start_date: date })
    }

    endDateHandleChange = (date) => {
        this.setState({ end_date: date })
    }

    handleSubmit = () => {
        console.log(
            this.state.code_error,
            this.state.discount_type_error,
            this.state.discount_value_error,
            this.state.name_error,
            this.state.limit_error,
            this.state.min_spent_error
        )
        if (
            this.state.code_error === "" &&
            this.state.discount_type_error === "" &&
            this.state.discount_value_error === "" &&
            this.state.name_error === "" &&
            this.state.limit_error === "" &&
            this.state.min_spent_error === ""
        )
            this.props.addDiscount(this.state.discount_type.value, this.state.discount_value)
    }

    render() {
        const content = (
            <div className="rot">
                {!(this.props.isLoading) ?
                    <div className="AC-contentContainer">
                        <div className="headerContainer">
                            <TextIcon text="DISCOUNTS" img={cart1} />
                            <div onClick={() => this.props.history.goBack()}>
                                <Box2 text="Back" />
                            </div>
                        </div>
                        <div className="innerContainer">
                            <Addvoucherrect
                                history={this.props.history}
                                dropdownHandleChange={this.dropdownHandleChange}
                                handleChange={this.handleChange}
                                handleSubmit={this.handleSubmit}
                                endDateHandleChange={this.endDateHandleChange}
                                startDateHandleChange={this.startDateHandleChange}
                                name={this.state.name}
                                name_error={this.state.name_error}
                                code={this.state.code}
                                code_error={this.state.code_error}
                                limit={this.state.limit}
                                limit_error={this.state.limit_error}
                                min_spent={this.state.min_spent}
                                min_spent_error={this.state.min_spent_error}
                                start_date={this.state.start_date}
                                end_date={this.state.end_date}
                                discount_type={this.state.discount_type}
                                discount_type_error={this.state.discount_type_error}
                                discount_value={this.state.discount_value}
                                discount_value_error={this.state.discount_value_error}
                            />
                        </div>
                    </div>
                    : <Loading />}
            </div>
        )
        return (
            <Base content={content} history={this.props.history} />
        );
    }
}

const mapStateToProps = state => ({
    isLoading: state.superAdminReducer.isLoading,
    addDiscountResponse: state.superAdminReducer.addDiscountResponse,
    voucherResponse: state.superAdminReducer.voucherResponse,
    getVoucherResponse: state.superAdminReducer.getVoucherResponse,
})

const mapDispatchToProps = dispatch => ({
    addVoucher: (discount, name, code, limit, min_spent, start_date, end_date) =>
        dispatch(ACTION.addVoucher({
            discount: discount, coupon_name: name,
            coupon_code: code, coupon_limits: limit,
            min_spent: min_spent,
            coupon_valid_from: start_date + "T00:00", coupon_valid_to: end_date + "T00:00"
        })),

    updateVoucher: (id, discount, name, code, limit, min_spent, start_date, end_date) =>
        dispatch(ACTION.updateVoucher({
            id: id,
            payload: {
                discount: discount, coupon_name: name,
                coupon_code: code, coupon_limits: limit,
                min_spent: min_spent,
                coupon_valid_from: start_date + "T00:00", coupon_valid_to: end_date + "T00:00"
            }
        })),

    getVoucher: (url) =>
        dispatch(ACTION.getVouchers({ url: url })),

    addDiscount: (discount_type, discount_value) =>
        dispatch(ACTION.addDiscount({
            discount_type: discount_type,
            discount_value: discount_value
        }))
})

export default connect(mapStateToProps, mapDispatchToProps)(Addvoucher);