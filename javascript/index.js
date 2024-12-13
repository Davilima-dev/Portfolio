let data = new Date().getHours();

if (data > 1 && data <= 12){
    document.getElementById("perfil").innerHTML = "Bom dia";
}else if (data >= 13 && data <= 17){
    document.getElementById("perfil").innerHTML = "Boa tarde";
}else if (data >= 18 && data <= 24) {
    document.getElementById("perfil").innerHTML = "Boa noite";
}else{
    document.getElementById("perfil").innerHTML = "initial";
}

let contato = document.getElementById("ctt");
contato.style.backgroundColor = "#ccc8c9";
contato.style.color = "#3c84a4";
contato.style.border = "none";
contato.style.borderRadius = "5px";

