function sum(...args){
    return args
    .filter(function (e){
        return typeof e === 'number';
    })
    .reduce(function(prev, curr){
        return prev + curr;
    });
}

var result = sum(2,4,'F8',null);
console.log(result);