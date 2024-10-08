//1. get both the input numbers (a,b)
//2. find the proper divisor for both and add individually
//3. check the sumA = b as well as sumB = a
//4. if true print as amicable
function isAmicable(a,b){
    sumA = 1;
    sumB = 1;
    for(var i=2;i<a;i++)
    {
        if(a%i==0){
            sumA = sumA +i;
        }
    }
    for(var j=2; j<b;j++)
    {
        if(b%j==0)
        {
            sumB = sumB +j;
        }
    }
    if(sumA == b && sumB == a)
    {
        console.log("amicable numbers")
    }
    else{
        console.log("not amicable numbers")
    }
}

isAmicable(1184,1210)