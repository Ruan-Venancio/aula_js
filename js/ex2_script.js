function trocarImagem(){
    var object_img=document.getElementById("lampada");
    if (object_img.src.match("on")){
        object_img.src = "img/off_light_bulb.png"
    }
    else{
        object_img.src = "img/on_light_bulb.png"
    }
}