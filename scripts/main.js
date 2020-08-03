const clicker=document.getElementById('clicker');
const current=document.getElementById('current');
const compressed=document.getElementById('compressed');
const afterintro=document.getElementById('afterintro');
const html=document.getElementById('html');
let menuoff=true;

var mediaQuery=window.matchMedia("(min-width:800px)");


clicker.onclick= function toggleMenu(){
  if (menuoff){
  compressed.style='display: flex;';
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
