let short=document.getElementById("counter");
let count=0;
function increase(){
    count+=1;
    short.innerText=count;
    
}
function save(){
    console.log(count+" dollars saved");
}