let data = new Date().getHours(22);

if (data > 1 && data <= 12){
    document.getElementById("perfil").innerHTML = "Bom dia";
}else if (data >= 13 && data <= 18){
    document.getElementById("perfil").innerHTML = "Boa tarde";
}else if (data >= 19 && data <= 24) {
    document.getElementById("perfil").innerHTML = "Boa noite";
}else{
    document.getElementById("perfil").innerHTML = "initial";
}