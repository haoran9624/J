/* 
 * Class 6: Class Exercises
 */

// 1. Create a simple function that can reverse the contents of a sentence, word, phrase.
const inp="abcdefg";
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString(inp));


//2. Create a function that will accept a date or year and calculate if it falls on a Leap Year.
const datte=new Date("September 20, 2000");
const yearr=datte.getFullYear();
function leap(year){
    if(year%4==0){
        console.log("It's a leap year.");
    }
}
leap(yearr);


//3. Create a function that can perform a word count, given a block of text. Punctuations or special characters are not to be included.
const input="aa & bb c. d.d ee .. ! x y";
const sp=input.split(" ");
const len=sp.length;
var j=0;

function containCha(str)      
{        
    var containCha = RegExp("[qwertyuiopasdfghjklzxcvbnm]");     
    return containCha.test(str);     
} 

for(i=0;i<len;i++){
    if(containCha(sp[i])==true){
        j++;
    }
}

console.log(j+" words");


//4. Create a function that checks a string or sentence and returns true if that parameter is a palindrome, (the string is the same forward as it is backward).
const strr="aabbaa";
function palin(str){
    var newstr=str.split("").reverse().join("");
    if(newstr===str){
        return true
    }else{
        return false
    }
}
console.log(palin(strr));


// 5. Create a para tag in html. Update the style of the first para tag to use a different font family, color and/or size.
const p=document.getElementById("p");
p.style.fontFamily="Impact";
p.style.color="blue";
p.style.fontSize="24pt";


//6. create a table and paint alternative colors:
const ta=document.getElementById("aaa");
function rg(r, g, b){
    return ["rgb(",r,",",g,",",b,")"].join("");
}
for(i=0;i<5;i++){
    for(j=0;j<5;j++){
        const cell=ta.getElementsByTagName("tr")[i].getElementsByTagName("td")[j];
        cell.style.backgroundColor="#"+(3*i).toString(16)+(2*j).toString(16)+(25).toString(16);
    }
}


// 7. Write a script that, on click of a button, can randomly select an image from a list and insert it inside the section tag in the html. eg. https://source.unsplash.com/random
//const sear=document.section.submit;
var bu=document.querySelector("button");
var box=document.querySelector("section");
bu.onclick=function(){
    var img1=document.createElement("img");
    img1.src="https://source.unsplash.com/random";
    img1.style.width="30%";
    box.appendChild(img1);
};

