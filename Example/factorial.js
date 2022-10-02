const factorial = function(num){
    let res = 1;
    for(let i=2;i<=num;i++){
        res *= i;
    }
    console.log(res)
}
const number = 5;
factorial(number)