const calcularDiasDiscount = () => {

    let timeStart = new Date(document.getElementById("timeStart").value);
    let timeEnd = new Date(document.getElementById("timeEnd").value);
    let actualDate = new Date();

    if (timeEnd > timeStart)
    {
        let diff = timeEnd.getTime() - timeStart.getTime();
        document.getElementById("daysDiscount").value = Math.round(diff / (1000 * 60 * 60 * 24));
    }
    else if (timeEnd != null && timeEnd < timeStart) {
        alert("La fecha de salida debe ser posterior a la fecha de llegada");
        document.getElementById("daysDiscount").value = 0;
    }
};

const sumarDias = () => {
    let diasTotal =  document.getElementById("daysDiscount").value;

    let suma = diasTotal * 10000;

	document.getElementById("calculoTotal").innerHTML = suma;


}