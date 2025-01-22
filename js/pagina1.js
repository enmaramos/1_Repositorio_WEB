function capturar() {
    var nombreest = document.getElementById("nomest").value;
    var celuest = document.getElementById("celest").value;
    if (nombreest == "") {
        alert("El nombre es obligatorio");
        document.getElementById("nomest").focus(); //focus es para que se ubique el cursor en input desdepues de darle aceptar al alerta.
    } else {
        if (celuest == "") {
            alert("El celular es obligatorio");
            document.getElementById("celest").focus();
        } else { //este else es para borrar los datos de los dos input y poner le cursor en el input de nombre de estuduante.
            console.log(nombreest + " " + celuest);
            document.getElementById("nomest").value = " ";
            document.getElementById("celest").value = " ";
            document.getElementById("nomest").focus();
        }
    }

}