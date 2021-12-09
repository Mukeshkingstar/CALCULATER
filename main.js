function add(){
   let first = document.getElementById("first").value;
   let second = document.getElementById("second").value;
   let total = parseFloat(first) + parseFloat(second);
   document.getElementById("result").innerHTML = (total)
}
function sub(){
   let first = document.getElementById("first").value;
   let second = document.getElementById("second").value;
   let total = parseFloat(first) - parseFloat(second);
   document.getElementById("result").innerHTML = (total)
}function multi(){
   let first = document.getElementById("first").value;
   let second = document.getElementById("second").value;
   let total = parseFloat(first) * parseFloat(second);
   document.getElementById("result").innerHTML = (total)
}function d(){
   let first = document.getElementById("first").value;
   let second = document.getElementById("second").value;
   let total = parseFloat(first) / parseFloat(second);
   document.getElementById("result").innerHTML = (total)
}






