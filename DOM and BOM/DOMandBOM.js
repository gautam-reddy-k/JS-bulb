var bulb = document.querySelector("#bulb");
var a = document.querySelector("button");
var flag = 0;
a.addEventListener("click", function(){
    if(flag == 0){
        bulb.style.backgroundColor = "yellow";
        flag = 1;
        a.innerHTML = "Trun Off";
    }else{
        bulb.style.backgroundColor = "transparent";
        flag = 0;
        a.innerHTML = "Turn On";
    }
});