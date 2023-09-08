var data = [1,2,3,4,12,5,8];
Array.prototype.filter2 = function(fun){
    // nó sẽ nhận tất cả các giá trị khớp với điều kiện được truyền trong lệnh gọi lại fn.
    var filltered = [];

    for(var i = 0; i < this.length; i++){
        if(fun(this[i])){
            filltered.push(this[i]);
        }
    }
    return filltered;
};
var filData  = data.filter2(function (value){
    if(value > 4){
        return value;
    }
});

console.log(filData);