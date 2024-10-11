var arr = [10,18,23,11,248,12,5]
var target = 29;
var i=0;
var tar = 0;
for( i;i<arr.length;i++)
{
    tar = arr[i]+arr[i+1];
    if(tar == target)
    {
        break;
    }
}
console.log(i,i+1);