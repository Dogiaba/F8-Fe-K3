var arrA = [1, 4, 3, 2];
var arrB = [5, 2, 6, 7, 1];


function fillterSection(arrA, arrB){
    const sectionResult = arrA.filter(value => arrB.indexOf(value) !== -1);
    return sectionResult;
}

const result = fillterSection(arrA, arrB);
console.log(result);

