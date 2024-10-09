//1. get the inputs
//2. formula a*b/(gcd(a,b)) using this we can fid the lcm of the given number
function gcd(a,b){
    while(true){
        var rem = a%b;
        if(rem === 0){
            break;
        }
        a=b;
        b=rem;
    }
return b;
}

function lcm(a,b)
{
    var res = a*b / (gcd(a,b));
    console.log(res);
}

lcm(18,24)