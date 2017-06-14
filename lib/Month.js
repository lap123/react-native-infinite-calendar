Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/Month.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _utils=require('./utils');
var _format=require('date-fns/format');var _format2=_interopRequireDefault(_format);
var _is_same_month=require('date-fns/is_same_month');var _is_same_month2=_interopRequireDefault(_is_same_month);
var _Day=require('./Day');var _Day2=_interopRequireDefault(_Day);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

Month=function(_PureComponent){_inherits(Month,_PureComponent);function Month(){var _ref;var _temp,_this,_ret;_classCallCheck(this,Month);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=Month.__proto__||Object.getPrototypeOf(Month)).call.apply(_ref,[this].concat(args))),_this),_this.




opacity=new _reactNative.Animated.Value(Number(_this.props.isScrolling)),_temp),_possibleConstructorReturn(_this,_ret);}_createClass(Month,[{key:'componentWillReceiveProps',value:function componentWillReceiveProps(
nextProps){
if(nextProps.isScrolling!==this.props.isScrolling){
_reactNative.Animated.timing(this.opacity,{
toValue:Number(nextProps.isScrolling)}).
start();
}
}},{key:'render',value:function render()
{var _props=
this.props,item=_props.item,rowHeight=_props.rowHeight,onSelect=_props.onSelect,selectedDate=_props.selectedDate;var
year=item.year,month=item.month,layout=item.layout;var _getMonth=
(0,_utils.getMonth)(year,month),rows=_getMonth.rows,date=_getMonth.date;
var monthRows=[];
var day=0;
var row=void 0,days=void 0;
var isSelectedMonth=(0,_is_same_month2.default)(selectedDate,date);
var selectedDay=isSelectedMonth?selectedDate.getDate():null;


for(var i=0,len=rows.length;i<len;i++){
row=rows[i];
days=[];
var isFirstRow=Boolean(i===0);
var isPartialFirstRow=Boolean(isFirstRow&&row.length!==7);

for(var k=0,_len2=row.length;k<_len2;k++){
day=row[k];

days[k]=
_react2.default.createElement(_Day2.default,{
key:day,
index:day,
monthDate:date,
isFirstRow:isFirstRow,
rowHeight:rowHeight,
onPress:onSelect,
isSelected:
isSelectedMonth&&selectedDay!==null&&selectedDay===day,__source:{fileName:_jsxFileName,lineNumber:42}});



}

monthRows[i]=
_react2.default.createElement(_reactNative.View,{
style:[
styles.row,
isFirstRow&&styles.firstRow,
isPartialFirstRow&&styles.partialFirstRow,
{height:rowHeight}],

key:'Row-'+i,
pointerEvents:'box-none',__source:{fileName:_jsxFileName,lineNumber:57}},

days);


}

return(
_react2.default.createElement(_reactNative.View,{
style:[
styles.root,
{top:layout.offset,height:monthRows*rowHeight}],

pointerEvents:'box-none',__source:{fileName:_jsxFileName,lineNumber:73}},

_react2.default.createElement(_reactNative.Image,{
source:require('./assets/gradient.png'),
style:[
styles.gradient,
{
top:rowHeight,
width:7*rowHeight,
height:monthRows*rowHeight}],


pointerEvents:'none',
shouldRasterizeIOS:true,__source:{fileName:_jsxFileName,lineNumber:80}}),

monthRows,
_react2.default.createElement(_reactNative.Animated.View,{
style:[styles.overlay,{opacity:this.opacity}],
pointerEvents:'none',
shouldRasterizeIOS:true,__source:{fileName:_jsxFileName,lineNumber:94}},

_react2.default.createElement(_reactNative.Text,{style:styles.overlayText,__source:{fileName:_jsxFileName,lineNumber:99}},(0,_format2.default)(date,'MMMM YYYY')))));



}}]);return Month;}(_react.PureComponent);Month.propTypes={item:_react.PropTypes.object,isScrolling:_react.PropTypes.bool};exports.default=Month;


var styles=_reactNative.StyleSheet.create({
root:{
flex:1,
position:'absolute',
left:0,
right:0,
zIndex:1},

row:{
flex:1,
flexDirection:'row'},

firstRow:{
justifyContent:'flex-end'},

gradient:{
position:'absolute',
left:0,
right:0,
bottom:0,
resizeMode:'stretch'},

overlay:{
position:'absolute',
top:0,
bottom:0,
left:0,
right:0,
backgroundColor:'rgba(255,255,255,0.7)',
alignItems:'center',
justifyContent:'center'},

overlayText:{
fontSize:26}});