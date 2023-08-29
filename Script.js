var star=document.getElementById("star");
var moon=document.getElementById("moon");
var mount1=document.getElementById("mount1");
var mount2=document.getElementById("mount2");
var mount3=document.getElementById("mount3");
var river=document.getElementById("river");
var boat=document.getElementById("boat");
var logo=document.getElementById("logo")
window.onscroll=function(){
  var val=window.scrollY;
  star.style.left=val*2
  boat.style.left=val*3
  mount1.style.top=val*1.5
  mount2.style.top=val
  river.style.top=val
  boat.style.top=val
  moon.style.top=val*3
  logo.style.fontSize=val
  logo.style.top=val*1.5+100
  if(val>150){
     logo.style.fontSize="150px"
     logo.style.top=val*1.5+100
  }else{
    logo.style.fontSize=val
    logo.style.top=val*1.5+100
  }
  if(val>180){
       document.getElementsByTagName("body")[0].style.background="linear-gradient(#10001f,#376281)"
   }else{
    document.getElementsByTagName("body")[0].style.background="linear-gradient(#200016,#10001f)"
  }
}