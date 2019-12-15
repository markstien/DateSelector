# DateSelector

基于MDUI的一个简易日期选择器。

##### 顾名思义

这只是一个简易“日期”选择器，所以没有关于“时间”的功能（如果你想要，可以帮我添加！）。



## 截图

![](./images/pc.PNG)

![](./images/mobile.PNG)



## 如何使用？

1.将项目内的DataSelector文件夹拖入你的项目

2.在项目中引用



```javascript
const {DataSelector}=require('./DataSelector');
window.addEventListener("load",function () {
    const ds=new DataSelector();
    ds.open();
    ds.getSelectedDate(function (date) {
       ds.close();
       alert(date);
    });
});
```

