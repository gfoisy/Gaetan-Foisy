document.getElementById('divider').onclick = function changeContent() {

   document.getElementById('divider').style = "Color: red";

};

// alert("worked");

const clicker=document.getElementById('clicker');
const current=document.getElementById('current');
const compressed=document.getElementById('compressed');
let menuoff=true;

var mediaQuery=window.matchMedia("(min-width:800px)")


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


// close the nav bar when size changes
