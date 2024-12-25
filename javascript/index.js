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
//funcoes para a secao de habilidades
function hard(){
    let hard = document.getElementById("h").style.backgroundColor = "#252734";

    let soft = document.getElementById("s").style.backgroundColor = "#2A2C39";

    let texto = document.getElementById("tt2").style.display = "block";
    let texto2 = document.getElementById("tt1").style.display = "none";
}
function soft(){
    let hard = document.getElementById("h").style.backgroundColor = "#2A2C39";

    let soft = document.getElementById("s").style.backgroundColor = "#252734";

    let texto = document.getElementById("tt2").style.display = "none";
    let texto2 = document.getElementById("tt1").style.display = "block";
}

