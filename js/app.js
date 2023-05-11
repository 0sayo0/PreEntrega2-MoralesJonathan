
function simularInteractivo() {
    let nombre = prompt("¿Cuál es tu nombre?");
    let edad = parseInt(prompt("¿Cuál es tu edad?"));

    function mostrarMensaje() {
        let mensaje = "¡Hola, " + nombre + "! En 10 años tendrás " + (edad + 10) + " años.\n";

        for (let i = 1; i <= 5; i++) {
            let num = parseInt(prompt("Ingresa un número #" + i + ":"));
            mensaje += "Número #" + i + ": " + num + "\n";
        }

        alert(mensaje);
    }

    if (edad < 18) {
        alert("Lo siento, " + nombre + ", eres menor de edad y no puedes continuar.");
    } else {
        mostrarMensaje();
    }

    function saludar() {
        alert("Hasta Pronto, " + nombre + "!");
    }

    saludar();
    }
  
simularInteractivo();
  