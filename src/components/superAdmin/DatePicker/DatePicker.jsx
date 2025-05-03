/* eslint-disable */
import React, { Component } from 'react';
import calendar from 'calendar-month-array';
import './DatePicker.css';
import addIcon from "../../../static/superAdmin/add/add1.png"

// Images
import rightArrow from '../../../static/superAdmin/DatePicker/rightArrow.png'
import leftArrow from '../../../static/superAdmin/DatePicker/leftArrow.png'

class DatePicker extends Component {
  constructor(props) {
    super(props)
    this.rootRef = React.createRef()
    this.datePickerRef = React.createRef()

    const date = new Date();
    this.state = {
      data: calendar(date, {
        weekStartDay: 1,
        formatHeader: date => date.toString().slice(0, 3),
        formatDate: date => date.getDate(),
        formatSiblingMonthDate: () => '  '
      }),
      date: date,
      today: date,
      toggleOpen: false,
      selected: null,
    }
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.toggleOpen) {
      this.datePickerRef.current.className = "datepicker-root"
      this.scrollToRef(this.rootRef)
    }
    else
      this.datePickerRef.current.className = "datepicker-root none"

    if (this.state.didChange !== prevState.didChange)
      this.setData(this.state.date.getFullYear(), this.state.date.getMonth())

    else if (this.props.value !== prevProps.value) {
      this.setState({ selected: this.props.value })
    }
  }

  setData = (year, month) => {
    const date = new Date(year, month);
    this.setState({
      data: calendar(date, {
        weekStartDay: 1,
        formatHeader: date => date.toString().slice(0, 3),
        formatDate: date => date.getDate(),
        formatSiblingMonthDate: () => '  '
      }),
      date: date,
      didChange: false,
    })
  }

  scrollToRef = (ref) => ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })

  toggleOpen = (e) => {
    this.setState({ toggleOpen: !this.state.toggleOpen })
  }

  nextMonth = () => {
    this.setState({ date: new Date(this.state.date.getFullYear(), this.state.date.getMonth() + 1), didChange: true })
  }

  prevMonth = () => {
    this.setState({ date: new Date(this.state.date.getFullYear(), this.state.date.getMonth() - 1), didChange: true })
  }

  dateFormat = (date) => {
    let month = '' + date.getMonth() + 1;
    let day = '' + date.getDate();
    let year = '' + date.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return (year + "-" + month + "-" + day)
  }

  handleClick = (e) => {
    const date = new Date(this.state.date.getFullYear(), this.state.date.getMonth(), e.target.id)
    this.props.handleClick(this.dateFormat(date))
    this.setState({ selected: date, toggleOpen: !this.state.toggleOpen })
  }

  render() {
    // console.log(this.state.data)
    // console.log(this.state.date)
    return (
      <div className="rooty" ref={this.rootRef}>
        <div className="inputIcon">
          <h3 className="text">{this.props.label}</h3>
          <div className="datepicker-input-image">
            <input className="dateTimeBox"
              type="date"
              ref={this.dateInputRef}
              placeholder={this.props.placeholderText}
              value={this.state.selected}
              disabled
              required
            />
            <div className="icon">
              <img src={addIcon} onClick={(e) => this.toggleOpen(e)} />
            </div>
          </div>
        </div>
        <div className="datepicker-root none" ref={this.datePickerRef}>
          <div className="header">
            <div className="left">
              {this.state.date.toLocaleString('default', { 'month': 'long' }) + " " + this.state.date.getFullYear()}
            </div>
            <div className="right">
              <img src={leftArrow} onClick={() => this.prevMonth()} />
              <img src={rightArrow} onClick={() => this.nextMonth()} />
            </div>
          </div>
          <div className="divider">
            <hr />
          </div>
          <div className="content">
            {this.state ? this.state.data.map((item, index) => {
              return <div className="rows">
                {item.map((item, index) => {
                  let date = new Date(this.state.date.getFullYear(), this.state.date.getMonth(), item)
                  let today = this.state.today
                  today.setHours(0, 0, 0, 0)
                  // console.log(date.getTime() == today.getTime())
                  // console.log()
                  if (typeof item === 'string') {
                    return <div className="item" id={item}>{item}</div>
                  } else if (
                    date.getTime() >= today.getTime()
                  ) {
                    return <div className="item selectable" id={item} onClick={(e) => this.handleClick(e)}>{item}</div>
                  } else {
                    return <div className="item inactive" id={item}>{item}</div>
                  }
                })}
              </div>
            }) : <React.Fragment />}
          </div>
        </div>
      </div>
    );
  }
}

export default DatePicker;