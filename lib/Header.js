Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/Header.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _format=require('date-fns/format');var _format2=_interopRequireDefault(_format);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

Header=function(_PureComponent){_inherits(Header,_PureComponent);function Header(){_classCallCheck(this,Header);return _possibleConstructorReturn(this,(Header.__proto__||Object.getPrototypeOf(Header)).apply(this,arguments));}_createClass(Header,[{key:'render',value:function render()



{var
selectedDate=this.props.selectedDate;

return(
_react2.default.createElement(_reactNative.View,{style:styles.root,__source:{fileName:_jsxFileName,lineNumber:13}},
_react2.default.createElement(_reactNative.View,{style:styles.wrapper,__source:{fileName:_jsxFileName,lineNumber:14}},
_react2.default.createElement(_reactNative.Text,{style:styles.year,__source:{fileName:_jsxFileName,lineNumber:15}},selectedDate.getFullYear()),
_react2.default.createElement(_reactNative.Text,{style:styles.date,__source:{fileName:_jsxFileName,lineNumber:16}},(0,_format2.default)(selectedDate,'ddd, MMM Do'))),

_react2.default.createElement(_reactNative.View,{style:styles.weekdays,__source:{fileName:_jsxFileName,lineNumber:18}},
['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(function(weekday){return(
_react2.default.createElement(_reactNative.Text,{key:weekday,style:styles.weekday,__source:{fileName:_jsxFileName,lineNumber:20}},weekday));}))));




}}]);return Header;}(_react.PureComponent);Header.propTypes={selectedDate:_react.PropTypes.instanceOf(Date)};exports.default=Header;


var styles=_reactNative.StyleSheet.create({
root:{
backgroundColor:'#448aff',
borderTopLeftRadius:3,
borderTopRightRadius:3},

wrapper:{
padding:15},

year:{
color:'rgba(255, 255, 255, 0.5)'},

date:{
color:'#FFF',
fontSize:30},

weekdays:{
flexDirection:'row',
backgroundColor:'#559fff'},

weekday:{
flex:1,
textAlign:'center',
color:'#FFF',
lineHeight:40,
fontWeight:'600'}});