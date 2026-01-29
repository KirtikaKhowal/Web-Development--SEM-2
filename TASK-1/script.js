//Task-1
//-------------------------------------------------
const profile = document.getElementById("profile");
profile.style.backgroundColor=("pink");
profile.style.padding=("15px");
profile.style.textAlign=("center")
//----------------------------------------------------
//Task-2
//---------------------------------------------------------------
const highlight = document.getElementsByClassName("important");
console.log(len(highlight));

for(let i=0;i<highlight.length;i++){
    highlight[i].style.color=("red");
    highlight[i].style.fontSize=("200px");
}
//---------------------------------------------------------------