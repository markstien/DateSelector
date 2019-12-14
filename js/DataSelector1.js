import * as mdui from '../node_modules/mdui/dist/js/mdui.min';
import "../node_modules/mdui/dist/css/mdui.min.css";
import '../css/publicCSS.css';
import {template} from "../js/template";

//"取消事件" 监听
const cancel=function (d) {
    const cancle=document.getElementById("dsCancel");
    cancle.addEventListener("click",function () {d.close()});
};
//更新选中的日期
const show=function (el) {
    const displayDate=document.getElementById("dsDisplayDate");
    const handler=function (event) {
        event.preventDefault();

        const element=event.target;
        const date=element.getAttribute("data-date");

        element.tagName==="TD"&&date!==null?displayDate.innerHTML=date:0;
    };
    el.addEventListener("click",handler);
};
//获取最终选择的日期
const getSelectedDate=function () {
  return new Promise(resolve => {
      const check=document.getElementById("dsCheck");
      check.addEventListener("click",function () {
          resolve(document.getElementById("dsDisplayDate").innerHTML);
      })
  })
};
const DateSelector=function () {
    console.log("DateSelector 开发中版本0.0.2");
    //注册对话框
    const el=template(365);
    const dialog=new mdui.Dialog(el);

    cancel(dialog);
    show(el);

    return{
        dialog,
        getSelectedDate
    }
};

export {DateSelector};