Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/index.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _Month=require('./Month');var _Month2=_interopRequireDefault(_Month);
var _Header=require('./Header');var _Header2=_interopRequireDefault(_Header);

var _utils=require('./utils');
var _difference_in_weeks=require('date-fns/difference_in_weeks');var _difference_in_weeks2=_interopRequireDefault(_difference_in_weeks);
var _difference_in_months=require('date-fns/difference_in_months');var _difference_in_months2=_interopRequireDefault(_difference_in_months);
var _is_before=require('date-fns/is_before');var _is_before2=_interopRequireDefault(_is_before);
var _is_after=require('date-fns/is_after');var _is_after2=_interopRequireDefault(_is_after);
var _parse=require('date-fns/parse');var _parse2=_interopRequireDefault(_parse);
var _start_of_month=require('date-fns/start_of_month');var _start_of_month2=_interopRequireDefault(_start_of_month);
var _start_of_day=require('date-fns/start_of_day');var _start_of_day2=_interopRequireDefault(_start_of_day);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

Calendar=function(_Component){_inherits(Calendar,_Component);




















function Calendar(props){_classCallCheck(this,Calendar);var _this=_possibleConstructorReturn(this,(Calendar.__proto__||Object.getPrototypeOf(Calendar)).call(this,
props));_this.






















































getDateOffset=function(date){var
rowHeight=_this.props.rowHeight;
var weeks=Math.abs((0,_difference_in_weeks2.default)(
(0,_start_of_month2.default)(date),
(0,_start_of_month2.default)(_this._min)));


return weeks*rowHeight;
};_this.






getItemLayout=function(items,index){var
layout=items[index].layout;

return layout;
};_this.
handleScroll=function(){
if(!_this.state.isScrolling){
_this.setState({
isScrolling:true});

}
};_this.
handleScrollEnd=function(){
_this.setState({
isScrolling:false});

};_this.
handleSelect=function(selectedDate){
_this.setState({selectedDate:selectedDate});
};_this.
_getComponent=function(item,index){var
rowHeight=_this.props.rowHeight;var _this$state=
_this.state,isScrolling=_this$state.isScrolling,selectedDate=_this$state.selectedDate;

return(
_react2.default.createElement(_Month2.default,{
item:item,
index:index,
rowHeight:rowHeight,
onSelect:_this.handleSelect,
isScrolling:isScrolling,
selectedDate:selectedDate,__source:{fileName:_jsxFileName,lineNumber:132}}));


};_this.updateYears(props);_this.state={isScrolling:false,selectedDate:_this.parseSelectedDate(props.selectedDate)};return _this;}_createClass(Calendar,[{key:'updateYears',value:function updateYears(){var props=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this.props;this._min=(0,_parse2.default)(props.min);this._max=(0,_parse2.default)(props.max);this._minDate=(0,_parse2.default)(props.minDate);this._maxDate=(0,_parse2.default)(props.maxDate);var min=this._min.getFullYear();var max=this._max.getFullYear();var months=[];var i=0;var previousOffset=0;for(var year=min;year<=max;year++){for(var month=0;month<12;month++){var date=new Date(year,month,1);var height=(0,_utils.getWeeksInMonth)(month,year)*props.rowHeight;var layout={length:height,offset:previousOffset,index:i};previousOffset+=height;months.push({year:year,month:month,date:date,layout:layout});i++;}}this.months=months;}},{key:'parseSelectedDate',value:function parseSelectedDate(selectedDate){if(selectedDate){selectedDate=(0,_parse2.default)(selectedDate);if((0,_is_before2.default)(selectedDate,this._minDate)){return this._minDate;}else if((0,_is_after2.default)(selectedDate,this._maxDate)){return this._maxDate;}}return(0,_start_of_day2.default)(new Date(selectedDate));}},{key:'getDateIndex',value:function getDateIndex(date){return Math.abs((0,_difference_in_months2.default)((0,_start_of_month2.default)(date),(0,_start_of_month2.default)(this._min)));}},{key:'render',value:function render()
{var _this2=this;var
rowHeight=this.props.rowHeight;var _state=
this.state,isScrolling=_state.isScrolling,selectedDate=_state.selectedDate;

return(
_react2.default.createElement(_reactNative.View,{style:styles.root,__source:{fileName:_jsxFileName,lineNumber:147}},
_react2.default.createElement(_Header2.default,{selectedDate:selectedDate,__source:{fileName:_jsxFileName,lineNumber:148}}),
_react2.default.createElement(_reactNative.FlatList,{
ref:function ref(instance){
_this2._list=instance;
},
contentContainerStyle:{width:7*rowHeight},
data:this.months,
renderItem:this._getComponent,
getItemLayout:this.getItemLayout,
shouldItemUpdate:function shouldItemUpdate(_ref,_ref2){var parentProps=_ref.parentProps;var nextParentProps=_ref2.parentProps;return(
parentProps.isScrolling!==nextParentProps.isScrolling||
parentProps.selectedDate!==nextParentProps.selectedDate);},

keyExtractor:function keyExtractor(_ref3){var year=_ref3.year,month=_ref3.month;return year+':'+month;},
initialNumToRender:3,
windowSize:3,
onEndReachedThreshold:1,
onScroll:this.handleScroll,
onMomentumScrollEnd:this.handleScrollEnd,
isScrolling:isScrolling,
canCancelContentTouches:true,
selectedDate:+selectedDate,__source:{fileName:_jsxFileName,lineNumber:149}})));



}}]);return Calendar;}(_react.Component);Calendar.propTypes={min:_react.PropTypes.instanceOf(Date),minDate:_react.PropTypes.instanceOf(Date),max:_react.PropTypes.instanceOf(Date),maxDate:_react.PropTypes.instanceOf(Date),selectedDate:_react.PropTypes.instanceOf(Date),rowHeight:_react.PropTypes.number,displayOptions:_react.PropTypes.object};Calendar.defaultProps={min:new Date(1980,0,1),minDate:new Date(1980,0,1),max:new Date(2050,11,31),maxDate:new Date(2050,11,31),selectedDate:new Date(),rowHeight:50,displayOptions:{showOverlay:true}};exports.default=Calendar;


var styles=_reactNative.StyleSheet.create({
root:{
marginVertical:45,
marginHorizontal:0,
backgroundColor:'#FFF'}});