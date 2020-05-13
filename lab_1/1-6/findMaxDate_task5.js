// 5 task
const findMaxDate = (arr) => {
    const MaxDate = new Date(Math.max.apply(null, arr));
    return MaxDate;
};
const getDateArray = (start, end) => {

    let arr = [];
  
    while (start <= end) {
      arr.push(new Date(start));
      start.setDate(start.getDate() + 1);
    }
    return arr;
  };

let startDate = new Date('2019-12-01');
let endDate = new Date('2020-03-20');
let arrDate = getDateArray(startDate, endDate);
console.log(arrDate);

const res = findMaxDate(arrDate);

module.exports = res;
