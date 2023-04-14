function Somar(){

    var num1 = parseInt(document.getElementById("numero1").value);
    var num2 = parseInt(document.getElementById("numero2").value);

    document.getElementById("res").innerHTML = "Resposta: " + (num1+num2);

}