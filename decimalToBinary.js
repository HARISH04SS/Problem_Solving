// 1. get the decimal value
// 2. create binary '' 
// 3. find the remaind by %2
// 4. add the rem with bin 
// 5. div the num by 2 (/2)
// 6. print the bin
function toBinary(num){
    var bin ='';
    while(num>0){
        var rem = num%2;
        bin = rem + bin;
        num  = Math.floor(num/2);
    }
    console.log(bin);
}
toBinary(2)