function main(){

    var myX;
    var myY;
    var myZ;

    myX = 12;
    myY = 19;
    myZ = 24;

    myX += 3;
    myY += 17;
    myZ -= 20;

    return {
        myX,
        myY,
        myZ
     };

}

console.log(main());
module.exports = main;