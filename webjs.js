function triger(){
    console.log(document.documentElement.scrollTop);
    let cl=document.querySelector(".nav");
    if(document.documentElement.scrollTop> 50){
        
        cl.classList.add("nav_sticky");
       
        
    }
    else{
        cl.classList.remove("nav_sticky");
        // cl.classList.add("nav");
    }
}

document.body.onscroll= triger;

let toggle=document.querySelector(".hamburger")
console.log(toggle);
let bool=true;
function func(){
    console.log("here");

    let link= document.querySelector(".links");
    if(bool){
        link.style.left="0%";
    }
    else{
        link.style.left="-200%";
    }
    bool=!bool;
    
   
}
toggle.addEventListener("click",func);




