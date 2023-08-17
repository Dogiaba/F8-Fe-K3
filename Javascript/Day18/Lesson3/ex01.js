var arr = [1,2,2,2,2,3,5,5,5,8,8,8,4,4,6,10];

function ararrys(arr){
    var newArr = [];
    for(var i = 0; i< arr.length; i++){
        if(!newArr.includes(arr[i])){
            newArr.push(arr[i])
        }
    }
    return newArr;
}

document.write("Array after checking for duplicates: " + ararrys(arr));
