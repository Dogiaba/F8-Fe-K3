//S= 1*2 + 2*3 + 3*4 + ... + n*(n+1)

var sum = function(n){
    var sum =0;
    for(var i =1; i<=n; i++){
        sum = sum + (i*(i+1));
    }
    return sum;
}

document.write("N= ", sum(3));