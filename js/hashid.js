import HashId from 'hashids';
const project=new HashId("DateSelector");

const randomNumber=function () {return Math.floor((Math.random()*10000));};
const getIds=function (n) {
    const ids=[];
    if ((typeof n)!=="number"){return ids}
    for(let i=0;i<n;i++){
        ids.push(project.encode(randomNumber()));
    }
    return ids;
};

export {getIds};