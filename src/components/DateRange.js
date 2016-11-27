import React, { Component } from 'react';
import moment from 'moment';
import DayPicker, { DateUtils } from 'react-day-picker';

import 'react-day-picker/lib/style.css';

export default class DateRange extends Component {
  handleDayClick = (e, day) => {
    const range = DateUtils.addDayToRange(day, this.props);
    this.props.onSelectDate(range);
  }
  render() {
    const { from, to } = this.props;
    return (
        <DayPicker
          numberOfMonths={ 1 }
          selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
          onDayClick={ this.handleDayClick }
          className="DateRange"
        />
    );
  }

  static defaultProps = {
    onSelectDate: () => null
  }
}
