Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/Day.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _format=require('date-fns/format');var _format2=_interopRequireDefault(_format);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

Day=function(_PureComponent){_inherits(Day,_PureComponent);function Day(){var _ref;var _temp,_this,_ret;_classCallCheck(this,Day);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=Day.__proto__||Object.getPrototypeOf(Day)).call.apply(_ref,[this].concat(args))),_this),_this.









handlePress=function(){var _this$props=
_this.props,index=_this$props.index,onPress=_this$props.onPress,monthDate=_this$props.monthDate;

onPress(new Date(monthDate.setDate(index)));
},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(Day,[{key:'render',value:function render()
{var _props=
this.props,monthDate=_props.monthDate,index=_props.index,isFirstRow=_props.isFirstRow,isSelected=_props.isSelected,rowHeight=_props.rowHeight;
var isFirstDay=index===1;
var text=
_react2.default.createElement(_reactNative.Text,{
style:[
styles.day,
{width:rowHeight,lineHeight:rowHeight},
isFirstRow&&styles.firstRow,
isFirstDay&&styles.first,
isSelected&&styles.selectedText],

onPress:this.handlePress,
suppressHighlighting:true,__source:{fileName:_jsxFileName,lineNumber:24}},

isFirstDay?
_react2.default.createElement(_reactNative.Text,{__source:{fileName:_jsxFileName,lineNumber:36}},
_react2.default.createElement(_reactNative.Text,{style:styles.small,__source:{fileName:_jsxFileName,lineNumber:37}},(0,_format2.default)(monthDate,'MMM')),'\n'+
index):

index);




return!isSelected?
text:
_react2.default.createElement(_reactNative.View,{style:isFirstRow&&styles.firstRow,__source:{fileName:_jsxFileName,lineNumber:47}},
_react2.default.createElement(_reactNative.View,{style:[styles.selected,{borderRadius:rowHeight}],__source:{fileName:_jsxFileName,lineNumber:48}},
text));


}}]);return Day;}(_react.PureComponent);Day.propTypes={day:_react.PropTypes.number,rowHeight:_react.PropTypes.number,monthDate:_react.PropTypes.instanceOf(Date),index:_react.PropTypes.number,isFirstRow:_react.PropTypes.bool,isSelected:_react.PropTypes.bool,onPress:_react.PropTypes.func};exports.default=Day;


var styles=_reactNative.StyleSheet.create({
day:{
textAlign:'center',
backgroundColor:'transparent',
fontWeight:'300',
color:'#333'},

first:{
lineHeight:18},

small:{
fontSize:12},

firstRow:{
backgroundColor:'#FFF'},

selected:{
backgroundColor:'#559fff',
flex:1},

selectedText:{
color:'#FFF',
backgroundColor:'transparent',
fontWeight:'500'}});