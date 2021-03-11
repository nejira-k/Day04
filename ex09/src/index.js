function main(){

    var firstNum;
    var secondNum;
    var thirdNum;

    firstNum = 6;
    secondNum = 25;
    thirdNum = 5.2;

    firstNum *= 9;
    thirdNum *= 10;
    secondNum /= 5;

    return {
        firstNum,
        secondNum,
        thirdNum
    };
}

console.log(main());
module.exports = main;