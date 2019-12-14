import {DateSelector} from "./js/DateSelector";

window.addEventListener("load",function () {
    const a=new DateSelector();
    const b=new DateSelector();

    a.open();
    a.getSelectedDate(function () {
        console.log("a");
        a.close();
        b.open();
    })
    b.getSelectedDate(function () {
        console.log("b");
    })
});