const calcularDiasDiscount = () => {

    let timeStart = new Date(document.getElementById("timeStart").value);
    let timeEnd = new Date(document.getElementById("timeEnd").value);

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

const combos = [
    { nombre: "combo1", precio: 35000 },
    { nombre: "combo2", precio: 45000 },
    { nombre: "combo3", precio: 45000 },
    { nombre: "combo4", precio: 55000 },
    { nombre: "combo5", precio: 80000 },
    { nombre: "combo6", precio: 100000 },
];
let carrito = []

let seleccion  = prompt ("Hola! Desea elegir algun combo? Por favor, responde con SI o NO")

while (seleccion != "si" && seleccion != "no"){
    alert ("Por favor ingrese si o no")
    seleccion = prompt ("Hola! Desea elegir algun combo? Por favor, responde con si o no")
}
if (seleccion = "si"){
    alert("Estos son nuestros combos disponibles a partir de Diciembre 2022")
    let todoslosCombos = combos.map (
        (combos) => combos.nombre + " " + combos.precio + "$");
    alert (todoslosCombos.join (" - "))
} else if (seleccion == "no"){
    alert ("Gracias por visitar nuestra web!")
}
while (seleccion != "no"){
    let combos = prompt ("Agrega un combo a tu carrito")
    let precio = 0

    if (combos == "combo1" || combos == "combo2" || combos == "combo3"  || combos == "combo4"  || combos == "combo5"  || combos == "combo6"){
        switch (combos){
            case "combo1":
              precio = 35000;
              break;
            case "combo2":
              precio = 45000;
              break;
            case "combo3":
              precio = 45000;
              break;
            case "combo4":
              precio = 55000;
              break;
            case "combo5":
              precio = 80000;
              break;
            case "combo6":
              precio = 100000;
              break;   
            default:
                break;
        }
    let unidades = parseInt (prompt ("Cuantos combos desea llevar?"))
    carrito.push ({combos, unidades, precio})
    console.log (carrito)
    }else {
        alert ("No tenemos ese combo")
    }

    seleccion = prompt ("Desea seguir comprando?")
    while (seleccion === "no"){
        alert ("Gracias por su compra")
        carrito.forEach ((carritoFinal) => {
            console.log (`producto: ${carritoFinal.combos}, unidades: ${carritoFinal.unidades}, Total a pagar por combo ${carritoFinal.unidades * carritoFinal.precio}`)
        })
    break;
    }
}

const total = carrito.reduce ((acc, el) => acc + el.precio * el.unidades, 0)
console.log (`El total a pagar por su compra es; ${total}`)