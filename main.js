const body = document.querySelector("body");
const button = document.querySelector("button");
const colors =["black", "green", "yellow", "red", "#03fcca","#fc03a5","#fc9003","#10b5c7"];

button.addEventListener("click", changeBackground);

let sıra=0;

function changeBackground(){
    
//Rastgele Arkaplan Rengi Değiştirme
   /* const rastgeleSayi = Math.floor(Math.random()*colors.length);
    const secilenRenk = colors[rastgeleSayi];
    body.style.backgroundColor = secilenRenk;*/

//Sırayla Arkaplan Rengi Değiştirme
if (sıra==7) sıra=0;
const secilenRenk = colors[sıra];
sıra++;
body.style.backgroundColor = secilenRenk;

}



