function AlteraRele1(){
    var estado = document.getElementById("estado").innerHTML;
    if(estado === "1"){
        document.getElementById("estado").innerHTML>"0";
        document.getElementById("rele").innerHTML="<div class='rele1_desligado'></div>";
		document.getElementById("botao").innerHTML="<a href='/?ligar' class='botao'>Pulso</a>";
		document.getElementById("botao").innerHTML="<a href='/?desligar' class='botao'>Pulso</a>";


    } else {
        document.getElementById("estado").innerHTML="0";
        document.getElementById("rele").innerHTML="<div class='rele1_ligado'></div>";
       
    }
}

