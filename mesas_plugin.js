const inicio_prefix = "hora_inicio";
const final_prefix = "hora_final";
const total_prefix = "total";

var horas_de_inicio = new Array(6);
var mesa;

function button_action(button_id){
    mesa = document.getElementById("mesa" + button_id);

    if(mesa.src.match("mesa_apagada"))
        prender(button_id);
    else
       apagar(button_id);
    
}

function prender(id){
    mesa.src = "mesa_en_uso.png";

    var tiempo = new Date;
    horas_de_inicio[id] = tiempo; //registrando la hora de entrada

    document.getElementById(inicio_prefix + id).innerHTML = "Hora de inicio: " + get_hora_textual(tiempo);
    document.getElementById(final_prefix + id).innerHTML = "Hora de final: ";
    document.getElementById(total_prefix + id).innerHTML = "Total: ";
}

function apagar(id){
    mesa.src = "mesa_apagada.png";

    var tiempo = new Date;

    document.getElementById(final_prefix + id).innerHTML = "Hora de final: " + get_hora_textual(tiempo);

    var tiempo_pasado = horas_de_inicio[id];
    var diferencia = Math.round((tiempo - tiempo_pasado) / 1000);
    var costo = (diferencia * (50 / 3600)).toFixed(2);

    document.getElementById(total_prefix + id).innerHTML = "Total: $" + costo;
}

function get_hora_textual(tiempo){
    var horas = formato_hora(tiempo.getHours());
    var minutos = formato_hora(tiempo.getMinutes());
    var segundos = formato_hora(tiempo.getSeconds());

    return horas + ":" + minutos + ":" + segundos;
}

function formato_hora(hora){
    if (hora < 10)
        return "0" + hora;
    else 
        return "" + hora;
}
