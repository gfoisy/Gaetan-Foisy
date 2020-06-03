document.getElementById('divider').onclick = function changeContent() {

   document.getElementById('divider').style = "Color: red";

};

// alert("worked");

const clicker=document.getElementById('clicker');
const current=document.getElementById('current');
const why=document.getElementById('why-this');
let menuoff=true;


clicker.onclick= function changeColor(){
  if (menuoff){
  clicker.style.backgroundColor='red';
  current.style='margin:auto; padding-left:2rem;';
  why.style='display:flex; background-color:red;';
  menuoff=false;
}else{
  clicker.style.backgroundColor='';
  }
}
