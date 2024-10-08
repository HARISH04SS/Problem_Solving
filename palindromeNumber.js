// 1. get the input (num)
// 2. save the value to another element
// 3. %10 to get the last digit
// 4. add with sum*10
// 5. num/10 => eleminates the last number
// 6. check if the sum is equal to our given value if it is true then print as paildrome


function isPalindrome(num){
    var dup = num;
    var sum = 0;
    while(num>0){
    var ld = num%10;
    sum = (sum*10) + ld;
    num = Math.floor(num/10)
    }
    if(sum == dup){
        console.log("Palindrome");
    }
    else{
        console.log("Not a palindrome")
    }
}

isPalindrome(421)