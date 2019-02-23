function testRandomDigit(number){
    loopNum = 0;
    while ( randomDigit() !== number){
        loopNum++;
    } 
    console.log('Loops:' + loopNum + "| Number" + number);
}

function flip(){
	return Math.random() >= 0.5;
}

function isInt(value) {
    return !isNaN(value) && parseInt(Number(value)) == value && !isNaN(parseInt(value, 10));
}

randomDigit = function(){
    let i = -1;
    do {
        if(i++ >= 10) i = 0;
    } while ( flip() );
    return i;
}


var randomNumber = (maxNum) => {
	//if (!isInt(maxNum) || parseInt(maxNum) === 0 || parseInt(maxNum)>=1000000 ){
    if (!(maxNum => !isNaN(maxNum) && parseInt(Number(maxNum)) == maxNum && !isNaN(parseInt(maxNum, 10))) 
        || parseInt(maxNum) === 0 
        || parseInt(maxNum) >= 1000000 
    ){
        throw "Wrong Input Value"
    }

    let result = "";
    let auxRand;

    //Execute until the length of the result is equal to length of input
    do {
        if (result.length === 0 ){
            do {
                auxRand = randomDigit(); 
            } while (auxRand >= maxNum.toString()[0]);
            result += auxRand
        } else {
            auxRand = randomDigit();
            if (result.toString().slice(-1) !== auxRand.toString()){
                result += auxRand;
            }      
        }
    } while( result.length < maxNum.toString().length);

    /*
    //execute only the lenght of input, ex: 500 = 3 cicles excep 1st digit
    for (let i = 0; i < maxNum.toString().length; i++){
        if (i === 0 ){
            do {
                auxRand = randomDigit(); 
            } while (auxRand >= maxNum.toString()[0]);
            result += auxRand
        } else {
            result += randomDigit();
        }
    }
    */
    console.log(result); //Used only to check Length Ex: input = 500 => result = 0031 => return 31
    return parseInt(result);
}

