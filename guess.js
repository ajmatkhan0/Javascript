function guess(){
let scercretnumber=Math.floor(Math.random()*10);
let number=document.getElementById("number").value;
let message= document.getElementById("message");
if(scercretnumber==number){
document.getElementById("message").innerText= " congratulation you guessed the correct number";
}
else if(scercretnumber<number){document.getElementById("message").innerText="to low";
}
else if(scercretnumber>number){
document.getElementById("message").innerText="too high";
}
document.getElementById("secret").innerText= scercretnumber;
}