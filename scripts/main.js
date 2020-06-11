const clicker=document.getElementById('clicker');
const current=document.getElementById('current');
const compressed=document.getElementById('compressed');
const afterintro=document.getElementById('afterintro');
const html=document.getElementById('html');
let menuoff=true;
let coloChange=0;

var mediaQuery=window.matchMedia("(min-width:800px)");


clicker.onclick= function changeColor(){
  if (menuoff){
  current.style='margin:auto; padding-left:2rem;';
  compressed.style='display:flex;';
  menuoff=false;
}else{
  current.style='';
  compressed.style='';
  menuoff=true;
  }
};

window.onresize=function closeDropdowns(){
  current.style='';
  compressed.style='display:none';
  menuoff=true;
};

window.onscroll=function darkenSite(){
    colorChange=(html.scrollTop-100)/5;
    afterintro.style.background='hsl(0, 0%, 15%,'+colorChange+'%)';
  };
