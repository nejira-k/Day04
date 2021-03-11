function main(){

    var myX;
    var myY;
    var myZ;

    myX = 12;
    myY = 19;
    myZ = 24;

    myX = myX + 3;
    myY = myY + 17;
    myZ = myZ - 20;

    return {
        myX,
        myY,
        myZ
     };

}

console.log(main());
module.exports = main;