function isPerfectSquare(num) {
    return Math.sqrt(num) % 1 === 0;
}

function isFibonacci(n) {
    //(5*n^2 + 4) or (5*n^2 - 4) 
    return isPerfectSquare(5 * n * n + 4) || isPerfectSquare(5 * n * n - 4);
}

let num = 6;
if (isFibonacci(num)) {
    console.log(num + " is a Fibonacci number.");
} else {
    console.log(num + " is not a Fibonacci number.");
}
