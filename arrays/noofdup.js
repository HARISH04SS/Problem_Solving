var arr = [2,2,3,4,3,6,1,7,1];
var count = 0;
for(var i=0;i<arr.length;i++)
{
    for(var j=i+1;j<arr.length;j++)
    {
        if(arr[i]==arr[j]){
            count++;
        }
    }
}
console.log(count);
