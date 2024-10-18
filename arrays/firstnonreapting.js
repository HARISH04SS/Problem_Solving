var arr = [2,2,3,3,2,4,4,1,6,8,9,6]
var fre ={};
for(var i=0;i<arr.length;i++)
{
    fre[arr[i]] = 0;
}
for(var i=0;i<arr.length;i++)
    {
        fre[arr[i]]++;
    }
for(var i=0;i<arr.length;i++)
{
    if(fre[arr[i]]===1){
        console.log(arr[i]);
        break;
    }
}

