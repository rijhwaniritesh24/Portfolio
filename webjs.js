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

console.log(document.documentElement.scrollTop);



