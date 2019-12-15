/**
 *
 * @param days
 * @returns {Date}
 */
const getDayTil=function (days) {
    const ms=24*60*60*1000;
    const today=new Date();
    return new Date(today.getTime() + days * ms);
};

export {getDayTil}