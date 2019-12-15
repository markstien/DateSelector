//接口
//import {DateSelector} from "./js/DateSelector";
//exports.DateSelector=DateSelector;

/*
//开发
import {DateSelector} from "./js/DateSelector";

window.addEventListener("load",function () {
    const ds1=new DateSelector();
    ds1.getSelectedDate(function (date) {
        console.log(date);
    });
});*/

//使用
const {DataSelector}=require('./DataSelector');
window.addEventListener("load",function () {
    const ds=new DataSelector();
    ds.open();
    ds.getSelectedDate(function (date) {
       ds.close();
       alert(date);
    });
});