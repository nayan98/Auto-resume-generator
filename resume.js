function show()
{
   
    let pElement=document.getElementsByClassName(this.className)[1];
    pElement.innerHTML=this.value;

    
    
}
var textareas=document.getElementsByTagName("textarea");

for(let textarea of textareas )
{
    
    textarea.addEventListener("keyup",show);

}


