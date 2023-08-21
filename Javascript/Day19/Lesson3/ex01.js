var arr = [["a", 1, true], ["b", 2, false]];

var newArr = [[], [],[]];

arr.forEach((value) =>{
    value.forEach((element)=>{
        if(typeof element === "string"){
            newArr[0].push(element);
        }else if(typeof element === "number"){
            newArr[1].push(element);
        }else if(typeof element === "boolean"){
            newArr[2].push(element);
        }
    });
});
document.write(`[${newArr[0]}], [${newArr[1]}], [${newArr[2]}]`);








// cach2 voi mang 1 chieu
// var arr = ["a", 1, true, "b", 2, false];
// const groupDataTypes = (arr = [[], [], []]) => {
//     const res = {};
//     for(let i = 0; i < arr.length; i++){
//        const el = arr[i];
//        const type = typeof el;
//        if(res.hasOwnProperty(type)){
//           res[type].push(el);
//        }else{
//           res[type] = [el];
//        };
//     };
//     return res;
//  };
//  console.log(groupDataTypes(arr));