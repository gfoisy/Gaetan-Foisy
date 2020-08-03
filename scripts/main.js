const clicker=document.getElementById('clicker');
const current=document.getElementById('current');
const compressed=document.getElementById('compressed');
const afterintro=document.getElementById('afterintro');
const html=document.getElementById('html');
const bigContainer=document.getElementById('big');
const body=document.getElementById('body')
let menuoff=true;

var mediaQuery=window.matchMedia("(min-width:800px)");


clicker.onclick= function toggleMenu(){
  if (menuoff){
  compressed.style= 'display: flex;';
  clicker.syle= 'color: #99BCA6;';
  body.style= 'overflow-y: hidden;';
  menuoff=false;
}else{
  clicker.syle= 'color: #EBE3DE;';
  current.style= '';
  compressed.style= '';
    body.style= 'overflow-y: scroll;';
  menuoff= true;
  }
};

window.onresize=function closeDropdowns(){
  current.style='';
  compressed.style='display:none';
  menuoff=true;
};
