function numberchecker(numbers){
    return function (num){
        return numbers.includes(num);
    };
}

const number = [1,2,3,4,5];
const checknum = numberchecker(number);

console.log(checknum(6));