var arr = [2,2,3,3,2,4,1,8,9,6]
var fre ={};
for(var i=0;i<arr.length;i++)
{
    fre[arr[i]] = 0;
}
for(var i=0;i<arr.length;i++)
    {
        fre[arr[i]]++;
    }
    console.log(Object.entries(fre).map(sub => sub[0] + ' - ' + sub[1]).join('\n'));
