import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {FlatList, StyleSheet, View} from 'react-native';
import Month from './Month';

import {getWeeksInMonth} from './utils';
import differenceInWeeks from 'date-fns/difference_in_weeks';
import differenceInMonths from 'date-fns/difference_in_months';
import isBefore from 'date-fns/is_before';
import isAfter from 'date-fns/is_after';
import parse from 'date-fns/parse';
import startOfMonth from 'date-fns/start_of_month';
import startOfDay from 'date-fns/start_of_day';

export default class BaseCalendar extends PureComponent {
  static propTypes = {
    min: PropTypes.instanceOf(Date),
    max: PropTypes.instanceOf(Date),
    rowHeight: PropTypes.number,
    displayOptions: PropTypes.object,
    onSelect: PropTypes.func,
    HeaderComponent: PropTypes.func.isRequired,
    DayComponent: PropTypes.func.isRequired,
    initialDateFocus: PropTypes.instanceOf(Date)
  };

  static defaultProps = {
    min: new Date(1980, 0, 1),
    max: new Date(2050, 11, 31),
    rowHeight: 50,
    displayOptions: {
      showOverlay: true
    }
  };

  constructor(props) {
    super(props);

    this.updateYears(props);

    this.state = {
        isScrolling: false
    };

    const {min, max, rowHeight, displayOptions, HeaderComponent, DayComponent, initialDateFocus, ...extraProps} = props;
    this.extraProps = extraProps;
  }

  updateYears(props = this.props) {
    const {min, minDate, max, maxDate, rowHeight} = props;

    this._min = parse(min);
    this._max = parse(max);

    const yearMin = this._min.getFullYear();
    const yearMax = this._max.getFullYear();

    const months = [];
    let i = 0;
    let previousOffset = 0;

    for (let year = yearMin; year <= yearMax; year++) {
      for (let month = 0; month < 12; month++) {
        const date = new Date(year, month, 1);
        const height = getWeeksInMonth(month, year) * rowHeight;

        const layout = {
          length: height,
          offset: previousOffset,
          index: i
        };
        previousOffset += height;

        months.push({year, month, date, layout});
        i++;
      }
    }

    this.months = months;
  }

  componentWillReceiveProps(nextProps) {
      const {min, max, rowHeight, displayOptions, HeaderComponent, DayComponent, initialDateFocus, ...extraProps} = nextProps;
      this.extraProps = extraProps;
  }

  getDateOffset = (date) => {
    const {rowHeight} = this.props;
    const weeks = Math.abs(differenceInWeeks(
      startOfMonth(date),
      startOfMonth(this._min)
    ));

    return weeks * rowHeight;
  }

  getDateIndex(date) {
    const index = Math.abs(differenceInMonths(
      startOfMonth(date),
      startOfMonth(this._min)
    ));

    return index >= 0 ? index : 0;
  }

  getItemLayout = (items, index) => {
    const {layout} = items[index];

    return layout;
  }

  handleScroll = () => {
    if (!this.state.isScrolling) {
      this.setState({
        isScrolling: true
      });
    }
  }

  handleScrollEnd = () => {
    this.setState({
      isScrolling: false
    });
  }

  _getComponent = ({item, index}) => {
    const {rowHeight, onSelect, DayComponent} = this.props;
    const {isScrolling} = this.state;

    return (
      <Month
        DayComponent={DayComponent}
        item={item}
        index={index}
        rowHeight={rowHeight}
        onSelect={onSelect}
        isScrolling={isScrolling}
        {...this.extraProps}
      />
    );
  };

  render() {
    const {rowHeight, HeaderComponent, initialDateFocus} = this.props;
    const {isScrolling} = this.state;

    return (
      <View style={styles.root}>
        <HeaderComponent {...this.extraProps} />
        <FlatList
          ref={instance => this._list = instance}
          contentContainerStyle={{width: 7 * rowHeight}}
          data={this.months}
          renderItem={this._getComponent}
          getItemLayout={this.getItemLayout}
          keyExtractor={({year, month}) => `${year}:${month}`}
          initialNumToRender={3}
          windowSize={3}
          onEndReachedThreshold={1}
          onScroll={this.handleScroll}
          onMomentumScrollEnd={this.handleScrollEnd}
          onScrollEndDrag={this.handleScrollEnd}
          canCancelContentTouches={true}
          // initialScrollIndex={this.getDateIndex(initialDateFocus)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    marginVertical: 45,
    marginHorizontal: 0,
    backgroundColor: '#FFF'
  }
});
