//Primer entrega proyecto final

const consultasModalidad = [{id: 1, modalidad: "Presencial"},
{id: 2, modalidad: "En línea"},
{id: 3, modalidad: "Telefónica"}];

let procesos = prompt (

    "Ingresa el Proceso que Biocoaching que deseas: \n 1 - Consulta individual \n 2 - Proceso de 3 consultas \n 3 - Proceso de 5 consultas \n 4 - Proceso de 10 consultas \n Escribe SALIR para terminar"
    
    );
    
    let precioConsulta = "8000";
    
    let resultado = 0
    
    if (procesos == "SALIR") alert ("Gracias, estamos a tu disposición");
    
    while (procesos != "SALIR") {
    
    switch (procesos) {
    
    case "1":
    
    alert("Seleccionaste una Consulta individual, el valor es de $" + precioConsulta);
    
    break;
    
    case "2":
    
        procesoNumero(3,precioConsulta)
    
    alert("Seleccionaste Proceso de 3 consultas, el valor es de $" + resultado);
    
    break;
    
    case "3":
    
        procesoNumero(5,precioConsulta)
    
    
    alert("Seleccionaste Proceso de 5 Consultas, el valor es de $" + resultado);
    
    break;
    
    case "4":
    
        procesoNumero (10,precioConsulta)
    
    alert("Seleccionaste Proceso de 10 Consultas, el valor es de $" + resultado);
    
    break;
    
    default:
    
    alert ("Opción no válida");
    
    break
    
    }
    
    procesos = prompt (
    
    "Ingresa el Proceso que Biocoaching que deseas: \n 1 - Consulta individual \n 2 - Proceso de 3 consultas \n 3 - Proceso de 5 consultas \n 4 - Proceso de 10 consultas \n Escribe SALIR para terminar"
    
    );
    
    if (procesos == "SALIR") alert ("Gracias, estamos a tu disposición");
    
    }

    function procesoNumero (cantidad,precioConsulta){
    
    return resultado = cantidad * precioConsulta;
    
    }
