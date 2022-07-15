//average

var marks=[55,87,35,90,48];
var avg=0;
totallength=marks.length;

for(var i=0; i<totallength;i++){
    avg=avg+marks[i];
    console.log(avg);
    totalavg=avg/totallength;
}
console.log('average=',totalavg);