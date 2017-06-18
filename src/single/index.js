import React from 'react';
import PropTypes from 'prop-types';
import isBefore from 'date-fns/is_before';
import isAfter from 'date-fns/is_after';
import parse from 'date-fns/parse';
import startOfDay from 'date-fns/start_of_day';

import BaseCalendar from '../BaseCalendar';
import Header from './Header';
import Day from './Day';

export default class CalendarSingle extends React.PureComponent {
	static propTypes = {
    	min: PropTypes.instanceOf(Date),
    	minDate: PropTypes.instanceOf(Date),
    	max: PropTypes.instanceOf(Date),
    	maxDate: PropTypes.instanceOf(Date),
    	selectedDate: PropTypes.instanceOf(Date),
    };

  	static defaultProps = {
	    min: new Date(1980, 0, 1),
    	minDate: new Date(1980, 0, 1),
    	max: new Date(2050, 11, 31),
    	maxDate: new Date(2050, 11, 31),
    	selectedDate: new Date()
    };

	constructor(props) {
		super(props);

		this._init(props);

		this.state = {
		    selectedDate: this.parseSelectedDate(props.selectedDate)
		};
	}

	_init(props) {
	    this._min = parse(props.min);
    	this._max = parse(props.max);
    	this._minDate = parse(props.minDate);
    	this._maxDate = parse(props.maxDate);	
	}

  	parseSelectedDate(selectedDate) {
    	if (selectedDate)
      		selectedDate = parse(selectedDate);

      	// Selected Date should not be before min date or after max date
      	if (isBefore(selectedDate, this._minDate))
        	return this._minDate;
      	else if (isAfter(selectedDate, this._maxDate))
        	return this._maxDate;
    
    	return startOfDay(new Date(selectedDate));
  	}

	onDateSelected = selectedDate => {
		this.setState({selectedDate});
	}

	render() {
		const {min, minDate, max, maxDate} = this.props;

		return (
			<BaseCalendar
				min={min}
				max={max}
				HeaderComponent={Header}
				DayComponent={Day}
				onSelect={this.onDateSelected}
				selectedDate={this.state.selectedDate}
				initialDateFocus={this.state.selectedDate}
			/>
		);
	}
};