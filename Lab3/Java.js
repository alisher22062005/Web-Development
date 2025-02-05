let inputBox=document.getElementById("New-Task");
let container=document.getElementById("notes");

function add(){
    if(inputBox.value!==""){
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
      
        let span=document.createElement("span");
        span.innerHTML="🪣"
        li.appendChild(span);
        container.appendChild(li);

    }
    inputBox.value="";
}

container.addEventListener("click",function(element){
    if(element.target.tagName==="SPAN"){
        element.target.parentElement.remove();
    }
    else if(element.target.tagName==="LI"){
        element.target.classList.toggle("clicked");
    }
})