let num1=0
let num2=0
document.getElementById("score1").textContent=num1
document.getElementById("score2").textContent=num2
let dig1=document.getElementById("score1")
let dig2=document.getElementById("score2")
function box1plusone(){
    num1+= 1 
    // isi ko isi se badhane ka sign+=
    dig1.textContent=num1
}
function box2plusone(){
    num2+= 1 
    // isi ko isi se badhane ka sign+=
    dig2.textContent=num2
}
function box1plustwo(){
    num1+=2
    dig1.textContent=num1
}
function box2plustwo(){
    num2+=2
    dig2.textContent=num2
}
function box1plusthree(){
    num1+=3
    dig1.textContent=num1
}
function box2plusthree(){
    num2+=3
    dig2.textContent=num2
}
function resetzero(){
    num1= num1*0
    num2= num2*0
    dig1.textContent=num1
    dig2.textContent=num2

}