// 1. get the input (num)
// 2. initail sum =1
// 3. iterate starts from 2 to num -1 
// 4. if num % i get zero then the value of i to the sum (proper divisor)
// 5. the check the num and sum values are equal if they are equal means print as perfect number


function isPerfect(num){
var sum =1
for(var i=2;i<num;i++)
{
    if(num%i===0)
    {
        sum = sum+i;
    }
}

if(sum == num)
{
    console.log("perfect");
}
else{
    console.log("not perfect");
}
}

isPerfect(7)

