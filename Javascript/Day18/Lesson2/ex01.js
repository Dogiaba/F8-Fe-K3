const arr = [6, 877, 30, 45, 4, 5, 12, 56, 71, 43];
// const arr = [6, 6, 81, 8, 6, 6];
const isPrime = (n) => {
  if (n === 1) {
    return true;
  } else if (n === 2) {
    return true;
  } else {
    for (var i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
};

const primeSum = arr =>{
    let sum = 0;
    for(var i = 0; i< arr.length; i++){
        if(!isPrime(arr[i])){
            continue;
        }else{
            sum += arr[i];
        }

    }
    return sum;
}

document.write("Trung bình các số nghuyên tố: " + primeSum(arr));
