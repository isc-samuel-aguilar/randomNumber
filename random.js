//Mandatory Function
function flip(){
	return Math.random() >= 0.5;
}

//function to validate if the input is an integer
function isInt(value) {
    return !isNaN(value) && parseInt(Number(value)) == value && !isNaN(parseInt(value, 10));
}

//function to return a random single digit until the flip function return true
randomDigit = function(){
    let i = -1;
    do {
        if(i++ >= 10) i = 0; //Force to return numbers between 0-9
    } while ( flip() );
    return i;
}

var randomNumber = (maxNum) => {
    let topErrorNum = 1000000;    
    let result = ""; //Sting to concatenate the random digits

    //if (!isInt(maxNum) || parseInt(maxNum) === 0 || parseInt(maxNum)>=1000000 ){ //validate input throw isInt function 
    if (!(maxNum => !isNaN(maxNum) && parseInt(Number(maxNum)) == maxNum && !isNaN(parseInt(maxNum, 10))) //lambda format function
        || parseInt(maxNum) === 0 
        || parseInt(maxNum) >= topErrorNum 
    ){
        throw "Wrong Input Value"
    }

    let lastRandom; //to store the last randomDigit(), required to prevent 2 equal digits together in the result
    //Execute until the length of the result is equal to length of input
    do {
        if (result.length === 0 ){ //loop for the first digit and prevent that the returned value should be higher than provided and reduce loops on big numbers 
            do {
                lastRandom = randomDigit(); 
            } while (lastRandom >= maxNum.toString()[0]);
            result += lastRandom; 
        } else {
            lastRandom = randomDigit();
            if (result.toString().slice(-1) !== lastRandom.toString()){
                result += lastRandom;
            }      
        }
    } while( result.length < maxNum.toString().length);

    /*
    //execute only the lenght of input, ex: 500 = 3 cicles excep 1st digit
    for (let i = 0; i < maxNum.toString().length; i++){
        if (i === 0 ){
            do {
                lastRandom = randomDigit(); 
            } while (lastRandom >= maxNum.toString()[0]);
            result += lastRandom
        } else {
            result += randomDigit();
        }
    }
    */

    console.log(result); //Used only to check Length Ex: input = 500 => result = 0031 => return 31
    return parseInt(result);
}

//Function used only for testing / development
//function to test that the randomDigit() return numbers between 0-1 and check the number of loops
function testRandomDigit(number){
    loopNum = 0;
    while ( randomDigit() !== number){
        loopNum++;
    } 
    console.log('Loops:' + loopNum + "| Number" + number);
}
