import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View} from 'react-native';
import format from 'date-fns/format';
import isSameMonth from 'date-fns/is_same_month';

export default class Day extends PureComponent {
  static propTypes = {
    day: PropTypes.number.isRequired,
    rowHeight: PropTypes.number.isRequired,
    monthDate: PropTypes.instanceOf(Date).isRequired,
    isFirstRow: PropTypes.bool.isRequired,
    onSelect: PropTypes.func.isRequired,
    selectedDate: PropTypes.instanceOf(Date).isRequired
  };

  handlePress = e => {
    const {day, onSelect, monthDate} = this.props;

    onSelect(new Date(monthDate.setDate(day)));
  };

  render() {
    const {day, monthDate, isFirstRow, rowHeight, selectedDate} = this.props;

    const isSelectedMonth = isSameMonth(selectedDate, monthDate);
    const selectedDay = isSelectedMonth ? selectedDate.getDate() : null;
    const isSelected = isSelectedMonth && selectedDay !== null && selectedDay === day;

    const isFirstDay = day === 1;

    const text = (
      <Text
        style={[
          styles.day,
          {width: rowHeight, lineHeight: rowHeight},
          isFirstRow && styles.firstRow,
          isFirstDay && styles.first,
          isSelected && styles.selectedText
        ]}
        onPress={this.handlePress}
        suppressHighlighting={true}
      >
        {isFirstDay
          ? <Text>
              <Text style={styles.small}>{format(monthDate, 'MMM')}</Text>
              {`\n${day}`}
            </Text>
          : day
        }
      </Text>
    );

    return !isSelected
      ? text
      : <View style={isFirstRow && styles.firstRow}>
          <View style={[styles.selected, {borderRadius: rowHeight}]}>
            {text}
          </View>
        </View>;
  }
}

const styles = StyleSheet.create({
  day: {
    textAlign: 'center',
    backgroundColor: 'transparent',
    fontWeight: '300',
    color: '#333'
  },
  first: {
    lineHeight: 18
  },
  small: {
    fontSize: 12
  },
  firstRow: {
    backgroundColor: '#FFF'
  },
  selected: {
    backgroundColor: '#559fff',
    flex: 1
  },
  selectedText: {
    color: '#FFF',
    backgroundColor: 'transparent',
    fontWeight: '500'
  }
});
