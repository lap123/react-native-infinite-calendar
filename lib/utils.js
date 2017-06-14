Object.defineProperty(exports,"__esModule",{value:true});exports.


getMonth=getMonth;exports.




































getWeeksInMonth=getWeeksInMonth;var _get_days_in_month=require('date-fns/get_days_in_month');var _get_days_in_month2=_interopRequireDefault(_get_days_in_month);var _get_day=require('date-fns/get_day');var _get_day2=_interopRequireDefault(_get_day);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function getMonth(year,month){var weekStartsOn=arguments.length>2&&arguments[2]!==undefined?arguments[2]:0;var rows=[];var monthDate=new Date(year,month,1);var daysInMonth=(0,_get_days_in_month2.default)(monthDate);var dow=(0,_get_day2.default)(new Date(year,month,1));var weekEndsOn=weekStartsOn===1?0:6;var week=0;for(var day=1;day<=daysInMonth;day++){if(!rows[week]){rows[week]=[];}rows[week].push(day);if(dow===weekEndsOn){week++;}dow=dow<6?dow+1:0;}return{date:monthDate,rows:rows};}function getWeek(year,date,weekStartsOn){var yearStart=new Date(year,0,1);return Math.ceil(((date-yearStart)/86400000+yearStart.getDay()+1-weekStartsOn)/7);}function getWeeksInMonth(
month)


{var year=arguments.length>1&&arguments[1]!==undefined?arguments[1]:new Date().getFullYear();var weekStartsOn=arguments.length>2&&arguments[2]!==undefined?arguments[2]:0;
var weekEndsOn=weekStartsOn===1?0:6;

var first_day_of_month=new Date(year,month,1);
var first_week_number=getWeek(year,first_day_of_month,weekStartsOn);

var last_day_of_month=new Date(year,month+1,0);
var last_week_number=getWeek(year,last_day_of_month,weekStartsOn);

var rowCount=last_week_number-first_week_number;


if(last_day_of_month.getDay()===weekEndsOn){
rowCount++;
}

return rowCount;
}