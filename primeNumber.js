// 1. get the input(num)
// 2. check the number is 1 0r less than one if true return false bcoz that number is not a prime
// 3. iterate start from 2 till the given number-1
// 4. if the number get the reminder has zero when its divided by i then it is not a prime
// 5. else that is the prime number
function isPrime(num) {
    if (num <= 1) return false; 
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false; 
        }
    }
    return true; 
}
const num = 6;
console.log("Is prime number?", isPrime(num));