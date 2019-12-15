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

//生产
const {DateSelector}=require('./DateSelector');
window.addEventListener("load",function () {
    const button=document.getElementById("open");
    button.addEventListener("click",function () {
        const ds=new DateSelector();
        ds.open();
        ds.getSelectedDate(function (date) {
            ds.close();
            alert(date);
        });
    });
});
