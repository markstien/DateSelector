const CalendarDate={
    getAFutureDay:function(futureDay){
        const now=new Date();
        now.setDate(now.getDate()+futureDay);
        return{
            year:now.getFullYear(),
            month:now.getMonth()+1,
            day:now.getDate(),
            weekDay:now.getDay(),
            monthLastDay:function () {
                now.setMonth(now.getMonth()+1);
                now.setDate(0);
                return new Date(now).getDate();
            }
        }
    },
    getCalendarDate:function (days) {
        let result=[];
        for(let i=0;i<days;i++){
            result.push(this.getAFutureDay(i));
        }
        return result;
    }
};
const Dividers={
    divideByWeeks:function (month) {
        let result=[];
        let week=[];
        for(let i=0;i<month.length;i++){
            if(month[i].weekDay===0&&week.length!==0){
                result.push(week);
                week=[];
            }else if(i===month.length-1){
                if(week.length!==0){
                    result.push(week);
                }
            }
            week.push(month[i]);
        }
        return result;
    },
    divideByMonths:function (year) {
        let result=[];
        let month=[];
        let t=year[0].month;
        for(let i=0;i<year.length;i++){
            if(year[i].month!==t){
                result.push(month);
                month=[];
                t=year[i].month;
            }else if(i===year.length-1){
                if(month.length!==0){
                    result.push(month);

                }
            }
            month.push(year[i]);
        }
        return result;
    },
    divideBYear:function (date) {
        let result=[];
        let year=[];
        let t=date[0].year;
        for(let i=0;i<date.length;i++){
            if (date[i].year!==t){
                result.push(year);
                year=[];
                t=date[i].year;
            }else if(i===date.length-1){
                if(year.length!==0){
                    result.push(year);
                }

            }
            year.push(date[i]);
        }
        return result;
    },
};

const calendarTables=function (days) {
    let html="";
    const allDays=CalendarDate.getCalendarDate(days);
    const years=Dividers.divideBYear(allDays);
    //年
    for(let i=0;i<years.length;i++){
        const months=Dividers.divideByMonths(years[i]);
        //月
        for(let j=0;j<months.length;j++){
            let stateTop=0;//前补位
            let monthTemple=`<table  class="mdui-table">
        <caption  class="mdui-text-color-black mdui-typo-caption-opacity">${months[0][0].year}年<span>${months[j][0].month}月</span></caption>
        <thead>
        <tr>
            <th>日</th>
            <th>一</th>
            <th>二</th>
            <th>三</th>
            <th>四</th>
            <th>五</th>
            <th>六</th>
        </tr>
        </thead>
        <tbody>`;
            const weeks=Dividers.divideByWeeks(months[j]);
            //周
            for(let x=0;x<weeks.length;x++){
                let weekTemple=`<tr>`;
                if(weeks[0][0].weekDay!==0&&stateTop===0){
                    for(let t=0;t<weeks[0][0].weekDay;t++){
                        weekTemple+=`<td ></td>`;
                    }
                    stateTop=1;
                }
                //日
                for(let y=0;y<weeks[x].length;y++){
                    weekTemple+=`<td data-date="${weeks[x][y].year}年${weeks[x][y].month}月${weeks[x][y].day}日">${weeks[x][y].day}</td>`;
                    if(y===weeks[x].length-1&&weeks[x][y].weekDay!==6){
                        for(let b=6;b>weeks[x][y].weekDay;b--){
                            weekTemple+=`<td ></td>`;
                        }
                    }
                }
                weekTemple+=`</tr>`;
                monthTemple+=weekTemple;
            }
            monthTemple+=`</tbody></table>`;
            html+=monthTemple;
        }

    }
    return html;
};

export {calendarTables};