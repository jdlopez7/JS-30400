let procesos = prompt (
    "Ingresa el Proceso que Biocoaching que deseas: \n 1 - Consulta individual \n 2 - Proceso de 3 consultas \n 3 - Proceso de 5 consultas \n 4 - Proceso de 10 consultas \n Escribe SALIR para terminar"
);
let precioConsulta = "8000";
let resultado = 0
let resultado2 = 0
let resultado3 = 0
if (procesos == "SALIR") alert ("Gracias, estamos a tu disposición");
while (procesos != "SALIR") {
    switch (procesos) {
        case "1":
            alert("Seleccionaste una Consulta individual, el valor es de " + precioConsulta);
            break;
        case "2":
            procesoTres(3,8000)
            function procesoTres (c1,v1) {
                resultado = c1 * v1;
            }
            alert("Seleccionaste Proceso de 3 Consultas, el valor es de " + resultado);
            break;
        case "3":
            procesoCinco(5,8000)
            function procesoCinco (c2,v2){
                resultado2 = c2 * v2;
            }
            alert("Seleccionaste Proceso de 5 Consultas, el valor es de " + resultado2);
            break;
        case "4":
            procesoDiez (10,8000)
            function procesoDiez (c3,v3){
                resultado3 = c3 * v3;
            }
            let proceso10 = ("$" + precioConsulta * 10)
        alert("Seleccionaste Proceso de 10 Consultas, el valor es de " + resultado3);
        break;
        default:
            alert ("Opción no válida");
            break
    }

    procesos = prompt (
        "Ingresa el Proceso que Biocoaching que deseas: \n 1 - Consulta individual \n 2 - Proceso de 3 consultas \n 3 - Proceso de 5 consultas \n 4 - Proceso de 10 consultas"
    );
    if (procesos == "SALIR") alert ("Gracias, estamos a tu disposición");
}






