const level1 = 1678;
const level2 = 1734;
const level3 = 2014;
const level4 = 2536;
const level5 = 2834;
const level6 = 2927;
var electricityBill;


function  calculateBill(electricNumber){
    if(electricNumber <= 0){
        return ("Electric number should not be less than 0");
    }else if(electricNumber <= 50 ){
        electricityBill = electricNumber*level1;
        return electricityBill;
    }else if(electricNumber <=100){
        electricityBill = 50*level1+((electricNumber-50)*level2);
        return electricityBill;
    }else if(electricNumber <= 200){
        electricityBill = 50*level1+(50*level2)+((electricNumber-100)*level3);
        return electricityBill;
    }else if(electricNumber <= 300){
        electricityBill = 50*level1+(50*level2)+(100*level3)+((electricNumber-200)*level4);
        return electricityBill;
    }else if(electricNumber <= 400){
        electricityBill = 50*level1+(50*level2)+(100*level3)+(100*level4)+((electricNumber-300)*level5);
        return electricityBill;
    }else if(electricNumber > 400){
        electricityBill = 50*level1+(50*level2)+(100*level3)+(100*level4)+(100*level5)+((electricNumber-400)*level6);
        return electricityBill;
    }
    return 0;
}

var electricNumber = prompt("Enter electric number: ");
console.log("Electricity to be paid: ", calculateBill(`${electricNumber}`));