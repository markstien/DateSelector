import * as mdui from '../node_modules/mdui/dist/js/mdui.min';
import "../node_modules/mdui/dist/css/mdui.min.css";
import '../css/publicCSS.css';
import {template} from "../js/template";

//"取消事件" 监听
const cancelT=function (cancel,d) {
    const el=document.getElementById(cancel);
    el.addEventListener("click",function () {d.close()});
};
//更新选中的日期
const showT=function (show,container) {
    const s=document.getElementById(show);
    const handler=function (event) {
        event.preventDefault();

        const element=event.target;
        const date=element.getAttribute("data-date");

        element.tagName==="TD"&&date!==null?s.innerHTML=date:0;
    };
    container.addEventListener("click",handler);
};
class DateSelector {
    _dialog=undefined;
    _check=undefined;
    _show=undefined;

    constructor(){
        console.log("DateSelector 开发中版本0.0.2");


        const {container,check,show,cancel}=template(365);
        this._check=check;
        this._show=show;
        //注册对话框
        const dialog=new mdui.Dialog(container);
        this._dialog=dialog;
        this.open();

        cancelT(cancel,dialog);
        showT(show,container);

    }
    open(){
        this._dialog.open();
    }
    getSelectedDate(callback) {
        const show=document.getElementById(this._show);
        const check=document.getElementById(this._check);
        check.addEventListener("click",function () {
            callback(show.innerHTML);
        });
    };
}

export {DateSelector}