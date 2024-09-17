var imgvar = document.createElement("img");
document.getElementById("div").appendChild(imgvar);
imgvar.src = "img/manha.jpg";
imgvar.alt = "Imagem do ceu de manha";
imgvar.width = "300";
imgvar.width = "250";
imgvar.height="250";
imgvar.style.borderRadius = "100%";
var body = document.getElementById("body");
var agora = new Date();
var horas = agora.getHours();
document.getElementById("txt").innerHTML= `<strong>Agora sao ${horas} horas</strong>`;
if(horas >= 12 && horas <= 18){
    body.style.background= "rgba(193, 98, 30, 0.54)";
    imgvar.src = "img/tarde.jpg";
    imgvar.alt = "Imagem do ceu de tarde";
    imgvar.width = "250";
    imgvar.height="250";
    imgvar.style.borderRadius = "100%";
    
}
else if (horas > 18 && horas <= 24){
    body.style.background= "rgba(20, 11, 97, 0.836)";
    imgvar.src = "img/noite.jpg";
    imgvar.alt = "Imagem do ceu a noite";
    imgvar.width = "300";
    imgvar.width = "250";
    imgvar.height="250";
    imgvar.style.borderRadius = "100%";
}