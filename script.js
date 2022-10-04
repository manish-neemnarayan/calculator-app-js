const inValue = document.querySelector(".textview");
let str = "";

function insert(num){
  str += num;
  inValue.value = str;
}
  
function equals(){
  inValue.value = eval(inValue.value);    
}
  
function clean(){
  inValue.value = 0;   
  str = ""; 
}
  
function back(){
  str = str.substring(0, (str.length - 1));
  inValue.value = str;
}