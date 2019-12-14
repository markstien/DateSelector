import {calendarTables} from "./CalendarTables";
import {getIds} from "./hashid";

const template=function (days) {
  const [check,show,menu,cancel]=getIds(4);
  const toolbar=`<div class="mdui-appbar">
        <div class="mdui-toolbar ">
          <a id="${check}" href="javascript:;" class="mdui-btn mdui-btn-icon"><i class="mdui-icon material-icons">check</i></a>
          <a href="javascript:;" class="mdui-typo-body-2"><span id="${show}">2019年11月22日</span></a> 
          <div class="mdui-toolbar-spacer"></div>
          <a href="javascript:;" class="mdui-btn mdui-btn-icon" mdui-menu="{target: '#${menu}'}" >
            <i class="mdui-icon material-icons">more_vert</i>
          </a>
          <ul class="mdui-menu" id="${menu}">
              <li id="${cancel}" class="mdui-menu-item">
                <a href="javascript:;" class="mdui-ripple">取消</a>
              </li>
          </ul>
       </div>
     </div><div class="mdui-divider-dark"></div>`;
  const main=`<div class="mdui-dialog-content padding-none">
        <ul class="mdui-list">
            <li class="mdui-list-item mdui-ripple">
                <div class="mdui-list-item-content ">
                    <i class="mdui-list-item-icon mdui-icon material-icons">date_range</i>
                    今天
                </div>
                    <div class="mdui-list-item-content   mdui-typo-caption-opacity" >(周三)</div>
            </li>
            <li class="mdui-list-item mdui-ripple">
                <div class="mdui-list-item-content"><i class="mdui-list-item-icon mdui-icon material-icons">wb_sunny</i>明天</div>
                <div class="mdui-list-item-content mdui-typo-caption-opacity ">(周三)</div>
            </li>
            <li class="mdui-list-item mdui-ripple">
                <div class="mdui-list-item-content"><i class="mdui-list-item-icon mdui-icon material-icons">subdirectory_arrow_right</i>下周</div>
                <div class="mdui-list-item-content mdui-typo-caption-opacity ">(周三)</div>
            </li>
        </ul>
        <div class="mdui-table-fluid" style="width: 99%">
           ${calendarTables(days)}
        </div>
        <div class="mdui-divider-dark"></div>
    </div>`;
  const container=document.createElement("div");

  container.className="mdui-dialog";
  container.style.width="100%";

  container.innerHTML+=toolbar;
  container.innerHTML+=main;

  return {
      container,
      check,show,menu,cancel
  }
};

export {template}