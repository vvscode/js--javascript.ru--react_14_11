import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import { connect } from 'react-redux'
import { setFilterDate } from '../AC/filter'

import 'react-day-picker/lib/style.css'

class DateRange extends Component {
    handleDayClick = (e, day) => {
        const range = DateUtils.addDayToRange(day, this.props)
        this.props.setFilterDate(range)
    }

    render() {
        const { from, to } = this.props;
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
        return (
            <div className="date-range">
                <DayPicker
                    ref="daypicker"
                    selectedDays={ day => DateUtils.isDayInRange(day, this.props) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
            </div>
        );
    }

}

export default connect(
    ({filter}) => filter, 
    { setFilterDate }
    )(DateRange)