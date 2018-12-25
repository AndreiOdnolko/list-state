import React, { Component } from 'react';

import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

class DayPickerFrom extends Component {

  state = this.getInitialState();

  getInitialState() {
    return {
      from: undefined,
      to: undefined,
    };
  }

  handleDayClick = (day) => {
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
  }

  handleResetClick = () => {
    this.setState(this.getInitialState())
  }

  render() {
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };
    return (
      <div className="RangeExample">
        <p>
          {!from && !to && 'Please select the first day.'}
          {from && !to && 'Please select the last day.'}
          {from &&
            to &&
            `Selected from ${from.toLocaleDateString()} to
                ${to.toLocaleDateString()}`}{' '}
          {from &&
            to && (
              <button className="link" onClick={this.handleResetClick}>
                Reset
              </button>
            )}
        </p>
        <DayPicker
          className="Selectable"
          selectedDays={[from, { from, to }]}
          modifiers={modifiers}
          onDayClick={this.handleDayClick}
        />        
      </div>
    )
  }
}

export default DayPickerFrom;