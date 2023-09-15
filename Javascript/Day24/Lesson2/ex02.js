var oneNumber = 
[
    "",
    "một",
    "hai",
    "ba",
    "bốn",
    "năm",
    "sáu",
    "bảy",
    "tám",
    "chín",
    "mười",
    "mười một",
    "mười hai",
    "mười ba",
    "mười bốn",
    "mười năm",
    "mười sáu",
    "mười bảy",
    "mười tám",
    "mười chín",



];

var twoNumber = [
    "",
    "",
    "hai mươi",
    "ba mươi",
    "bốn mươi",
    "năm mươi",
    "sáu mươi",
    "bảy mươi",
    "tám mươi",
    "chín mươi",


];

function coverNumber(number){

    let num =('0000000'+ number).slice(-7).match(/^(\d{1})(\d{1})(\d{2})(\d{1})(\d{2})$/);
    console.log(num);
    if(!num) return;

    let outcoverNumber = num[1] != 0?(oneNumber[Number(num[1])] || `${twoNumber[num[1][0]]} ${oneNumber[num[1][1]]}`) + ' triệu ':'';

    outcoverNumber +=num[2] != 0 ? (oneNumber[Number(num[2])] || `${twoNumber[num[2][0]]} ${oneNumber[num[2][1]]}` )+ ' trăm ' : ''; 

    outcoverNumber +=num[3] != 0 ? (oneNumber[Number(num[3])] || `${twoNumber[num[3][0]]} ${oneNumber[num[3][1]]}`)+  ' nghìn ' : ''; 

    outcoverNumber +=num[4] != 0 ? (oneNumber[Number(num[4])] || `${twoNumber[num[4][0]]} ${oneNumber[num[4][1]]}`) + ' trăm ': ''; 

    outcoverNumber +=num[5] != 0 ? (oneNumber[Number(num[5])] || `${twoNumber[num[5][0]]} ${oneNumber[num[5][1]]} `) : ' '; 
    return outcoverNumber;
}

console.log(`convert number to words: ${coverNumber(4298)}`);
