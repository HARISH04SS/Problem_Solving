// // 1. get the input (num)
// //three digit only
// function isAmstrong(num){
//  var dup = num;
//  var cube = 0;
//  while(num>0){
//     var ld = num%10;
//     cube = cube +(ld*ld*ld);
//     num = Math.floor(num/10);
//  }
//  if(cube === dup)
//  {
//     console.log("Amstrong");
//  }
//  else{
//     console.log("not a amstrong");
//  }
// }
// isAmstrong(370)
//1. get the input(num)
//2. find the length for the given number
//3. extract the last digit and iterate them for the obtained length
//4. check if the num == result and print amstrong or not
//all digits
function isAmstrong(num){
var dup = num;
var len = 0;
var res = 0;
while(dup>0)
{
    dup = Math.floor(dup/10);
    len++;
}
var num1 = num;
while(num1>0){
    var rem = num1%10;
    var pow = 1;
    for(var i=1;i<=len;i++)
    {
        pow = pow*rem;
    }
    res = res+pow;
    num1 = Math.floor(num1/10);
}
if(num == res){
    console.log("amstrong")
}
else{
    console.log("not a amstrong")
}
}
isAmstrong(1630);