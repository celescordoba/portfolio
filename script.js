function seleccionar(link){
    var opciones = document.querySelectorAll('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";


    //Hago desaparecer el menu una vez que se selecciona la opcion
    var x = document.getElementById("nav");
    x.className = "";

}

//Funcion menu responsive
function responsiveMenu(){
    var x = document.getElementById("nav");
    if(x.className===""){
        x.className = "responsive";
    }else{
        x.className = "";
    }
}

//Aplico la animacion de las barras de habilidades

window.onscroll = function(){
    efectoHabilidades()
};

function efectoHabilidades(){
    var skills = documen.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >=300){
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("Sass").classList.add("barra-progreso3");
        document.getElementById("bootstrap").classList.add("barra-progreso4");
    }
}