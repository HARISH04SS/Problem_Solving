//1. get the input 
//2. initial sum =0
//3. itreate start from 1 to given number 
//4. add the i value with thw sum for each iteration
//5. print the output
function son(num){
    var sum =0;
    for(var i=1;i<=num;i++)
    {
        sum = sum+i;
    }
    console.log(sum)
}

son(10);