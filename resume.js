var n=document.getElementsByClassName("name");
function action(){
 n[1].innerHTML=n[0].value; 
 console.log(n[0].value);  
}


console.log(n[0].value);
n[0].addEventListener("keyup",action);

