var a=[1,2,3,4,5,6,7,8,9,10];
var b=[2,4,6,8,10,12,14,-16,-18,20];
var c=[]
for(var i=0 ; i<a.length;i++){
    c.push(a[i]+b[i]);
    
}
function myfunction(c){
    let count=0
    for (let i=0; i<c.length;i++)
    {
        if(c[i]<0)
        {
            alert('negative value')
        }
    }
}
console.log(myfunction(c))
console.log(c);
c = c.map( s => Math.abs(s));
console.log(c)
let max = c[0], min = c[0];
const set1 = new Set(c);

const min1 = Math.min(...set1);
console.log(min1+"minval"); 

const max1 = Math.max(...set1);
console.log(max1+"maxval"); 
    for (let i = 0; i < c.length; i++) {
  
        if (c[i] > max) 
        {
             max = c[i]; 
            }
        if (c[i] < min) { min = c[i]; }
    }
    console.log("max = " + max);
    console.log("min = " + min);
console.log(c)
c.sort(function(a, b){return a - b});
console.log(c)
function removeDuplicates(c) {
    return [...new Set(c)];
}
console.log(removeDuplicates(c));






var d=[3,6,9,12,15,18,21,24,27,30]
for (let i = 0; i< c.length; i++) {
    let res=[];
    for (let j = 0; j < d.length; j++) {
        res[j]=c[i]*d[j];   
    }
    console.log(res)
    }





// var d=[3,6,9,12,15,18,21,24,27,30]
// var v1=[]
// var v2=[]
// var v3=[]
// var v4=[]
// var v5=[]
// var v6=[]
// var v7=[]
// var v8=[]
// var v9=[]
// var v10=[]


// var val1=c.map((value)=>{
//     for(i=9;i<d.length;i++){
//         v1.push( value*d[0])
//         v2.push( value*d[1])
//         v3.push(value*d[2])
//         v4.push(value*d[3])
//         v5.push(value*d[4])
//         v6.push(value*d[5])
//         v7.push(value*d[6])
//         v8.push(value*d[7])
//         v9.push(value*d[8])
//         v10.push(value*d[9])
//     }
// })
// console.log(v1)
// console.log(v2)
// console.log(v3)
// console.log(v4)
// console.log(v5)
// console.log(v6)
// console.log(v7)
// console.log(v8)
// console.log(v9)
// console.log(v10)






// var char=[5,8,"name",7,3]
// let charMap=char.map((value)=>{
//     if (value==char)
//     {
//         return char.indexOf()+Math.random()*100
//     }
//     if(0<=value){
//         return value
//     }
// })
// console.log(parseInt(charMap) +" "+ "sting")


var arr = ["c", "b", "a",6,9,97,8];
// array of strings

var nums = arr.map((value)=> {
if(typeof value==="string"){
    return 10;
}
   return value
 });
console.log(nums)


var i, j
    for (i = 1; i <= 26; i++)
        {
            for (j = i; j >= 1; j--)
        {  
             document.write(String.fromCharCode('ARUN'.charCodeAt([0]) + j-1+""));
             
        }
        document.write("<br>");
    }      
    console.log(document.write())   


    function generateNumberTriangle(v) {
    for (var i = 1; i <= v; i++) {
        var chars = " ";
        for (var j = 1; j <= v; j++) {
            if (j <= i) { chars += j + "  "; }
        }
        console.log(chars);
    }
}
generateNumberTriangle(10);

      function myFunction() {
        var x = document.getElementById("text").value;
let Str=x
 arr=Array.from(Str)
// console.log(arr)
let k=''
for(i=0;i<arr.length;i++){
k+=arr[i]

    console.log(k)
}

}