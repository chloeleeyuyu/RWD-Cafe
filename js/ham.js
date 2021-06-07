let set = document.getElementById("set");
let nav = document.getElementsByTagName("nav")[0];
let hamT = document.getElementsByClassName("hamT")[0];
let hamM = document.getElementsByClassName("hamM")[0];
let hamB = document.getElementsByClassName("hamB")[0];
set.addEventListener("click",function(){
    if(nav.style.display == "none" || nav.style.display == ""){
        nav.style.display = "block";
        hamT.style.transform = "rotate(23deg)";
        hamM.style.transform = "scale(0)";
        hamB.style.transform = "rotate(-23deg)";
    }else{
        nav.style.display = "none";
        hamT.style.transform = "rotate(0deg)";
        hamM.style.transform = "scale(1)";
        hamB.style.transform = "rotate(0deg)";
    }
})
