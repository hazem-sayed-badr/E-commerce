const icon=document.getElementById("bar");
const nav=document.getElementById("navbar");
const close=document.getElementById("close");
icon.onclick=function(){
   nav.classList.add("active");
}
close.onclick=function(){
    nav.classList.remove("active");
 }
 