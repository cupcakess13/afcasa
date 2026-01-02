function updateTime(){
    let now = new Date();
    let h = now.getHours();
    let m = now.getMinutes().toString().padStart(2,"0");

    let greet = "";

    if(h<12) greet="Selamat Pagi ☀️";
    else if(h<15) greet="Selamat Siang 🌤";
    else if(h<18) greet="Selamat Sore 🌇";
    else greet="Selamat Malam 🌙";

    document.getElementById("timeText").innerHTML=
        greet+" — "+h+":"+m;
}

setInterval(updateTime,1000);
updateTime();
let popup = document.getElementById("popup");
let popupImg = document.getElementById("popupImg");
let closePopup = document.getElementById("closePopup");

document.querySelectorAll(".g-card img").forEach(img =>{
    img.addEventListener("click", function(){
        popup.style.display="flex";
        popupImg.src = this.src;
    });
});

closePopup.onclick = function(){
    popup.style.display="none";
}
