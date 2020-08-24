


function mouseOver(x){
  var y=x;
  document.getElementsByClassName('projtag')[y].style= "background-color: #99BCA6";
  document.getElementsByClassName('image')[y].style= "border-bottom-right-radius: 0;  border-bottom-left-radius: 0;";
}

function mouseOut(x){
  var y=x;
  document.getElementsByClassName('projtag')[y].style= "background-color: none";
  document.getElementsByClassName('image')[y].style= "border-bottom-right-radius: 10px;  border-bottom-left-radius: 10px;";
}
