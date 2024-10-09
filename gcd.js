//1. get the two input numbers
// 2. while(true) find the reminder for a%b
//3. if the rem== 0 break amd print the b i.e gcd
//4. else swap the vaule of b to a and rem to b until the rem get zero
//5. print the b i.e gcd
function gcd(a,b){
    while(true){
        var rem = a%b;
        if(rem === 0){
            break;
        }
        a=b;
        b=rem;
    }
    console.log(b);
}

gcd(6,36)