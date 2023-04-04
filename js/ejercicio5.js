
let centesimas = 0;
let segundos = 0;
let minutos = 0;
let horas = 0;
let btn=document.getElementById("inicio")
//btn.addEventListener('click ',iniciar,true);
//btn.addEventListener('click click',iniciar);
function iniciar() {
    control = setInterval(cronometro,10);
   

}

let minutosReloj=document.getElementsByClassName("minutos");
let segundosReloj=document.getElementById("segundos");
let centesimasReloj=document.getElementById("centesimas");
let horasReloj=document.getElementById("horas");

    function cronometro() {
        if (centesimas < 99) {
            centesimas++;
            if (centesimas < 10) { centesimas = "0"+centesimas }
            centesimasReloj.innerHTML = ":"+centesimas;
        }
        if (centesimas == 99) {
            centesimas = -1;
        }
        if (centesimas == 0) {
            segundos ++;
            if (segundos < 10) { segundos = "0"+segundos }
            segundosReloj.innerHTML=":"+segundos;
        }
        if (segundos == 59) {
            segundos = -1;
        }
        if ( (centesimas == 0)&&(segundos == 0) ) {
            minutos++;
            if (minutos < 10) { minutos = "0"+minutos }
            minutosReloj.innerHTML=":"+minutos;
        }
        if (minutos == 59) {
            minutos = -1;
        }
        if ( (centesimas == 0)&&(segundos == 0)&&(minutos == 0) ) {
            horas ++;
            if (horas < 10) { horas = "0"+horas }
            horasReloj.innerHTML = horas;
        }
    }
        
        function pararCronometro() {
            clearInterval(control);
        }
        function reinicio() {
            clearInterval(control);
            centesimas = 0;
            segundos = 0;
            minutos = 0;
            horas = 0;
            centesimas.innerHTML = ":00";
            segundosReloj.innerHTML = ":00";
            minutosReloj.innerHTML = ":00";
            horasReloj.innerHTML = "00";
        }
    
        