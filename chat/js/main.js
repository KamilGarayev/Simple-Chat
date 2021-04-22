"user strict";
const full= document.querySelector("#full");
const mainDiv= document.querySelector(".main-div");
const green = document.querySelector(".green");
const userInput= document.querySelector("#textbox");
const messenger= document.querySelector(".messenger");
const del = document.querySelector(".delete");
const send = document.querySelector(".send")


full.addEventListener("click", function(){
    green.classList.add("d-none");
    mainDiv.classList.remove("d-none");
})

userInput.addEventListener("keyup", function(e){
    if(e.keyCode==13 && e.keypress!==16){
        const message= userInput.value.trim();
       if(message!==""){
           if(message[0]== message[0].toUpperCase()){
            const newDiv= document.createElement('div');
            newDiv.classList.add("left");
            newDiv.innerHTML="<div class='img mr-3'><img src='img/girl.jpg' alt=''></div>"
            const p = document.createElement('p');
            p.innerText=message;
            newDiv.appendChild(p);
            messenger.appendChild(newDiv);
            userInput.value="";
            newDiv.addEventListener("click", function(){
                newDiv.classList.toggle("selected");
                if(newDiv.classList.contains("selected")){
                    document.querySelector(".delete").classList.remove("d-none");
                }
                else{
                    document.querySelector(".delete").classList.add("d-none");
                }  
            })
           }
           else{
            const newDiv= document.createElement('div');
            newDiv.classList.add("right");
            newDiv.innerHTML="<div class='img ml-3'><img src='img/user.jpg' alt=''></div>"
            const p = document.createElement('p');
            p.innerText=message;
            newDiv.insertBefore(p,newDiv.firstChild);
            messenger.appendChild(newDiv);
            userInput.value="";
            newDiv.addEventListener("click", function(){
                newDiv.classList.toggle("selected");
                if(newDiv.classList.contains("selected")){
                    document.querySelector(".delete").classList.remove("d-none");
                }
                else{
                    document.querySelector(".delete").classList.add("d-none");
                } 
            })
       }  
    }  
}})
send.addEventListener("click",function(){
    const message= userInput.value.trim();
       if(message!==""){
           if(message[0]== message[0].toUpperCase()){
            const newDiv= document.createElement('div');
            newDiv.classList.add("left");
            newDiv.innerHTML="<div class='img mr-3'><img src='img/girl.jpg' alt=''></div>"
            const p = document.createElement('p');
            p.innerText=message;
            newDiv.appendChild(p);
            messenger.appendChild(newDiv);
            userInput.value="";
            newDiv.addEventListener("click", function(){
                // newDiv.classList.toggle("selected");    
            })
           }
           else{
            const newDiv= document.createElement('div');
            newDiv.classList.add("right");
            newDiv.innerHTML="<div class='img ml-3'><img src='img/user.jpg' alt=''></div>"
            const p = document.createElement('p');
            p.innerText=message;
            newDiv.insertBefore(p,newDiv.firstChild);
            messenger.appendChild(newDiv);
            userInput.value="";
            newDiv.addEventListener("click", function(){
                // newDiv.classList.toggle("selected");
            })
       }  
    }  
})


