/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function obtenerMayor(x, y) {
   // "x" e "y" son números enteros.
   // Retornar el número más grande.
   // Si son iguales, retornar cualquiera de los dos.
   // Tu código:
  
      console.log (Math.max(x, y));
  }
  return obtenerMayor(8, 10)


function mayoriaDeEdad(edad) {
   // Determinar si la persona puede ingresar al evento según su edad.
   // Si tiene 18 años ó más debe retornar el string: "Allowed".
   // Caso contrario: "Not allowed".
   // Tu código:

   if (edad >= 18) {
      console.log("Allowed")
   }
   else {
      console.log("Not Allowed")
   }
}

function conection(status) {
   // El argumento "status" representa el estado de conexión de un usuario.
   // Si el estado es igual a 1, el usuario está "Online".
   // Si el estado es igual a 2, el usuario está "Away".
   // De lo contrario, presumimos que el usuario está "Offline".
   // Retornar el estado de conexión del usuario.
   // Tu código:
   if (status === 1) {
       console.log("Online");
    }
    else if (status === 2) {
       console.log("Away");
    }
    console.log("Offline");   
   }
return conection(3);


function saludo(idioma) {
   // Retornar un saludo en tres diferentes lenguajes:
   // Si "idioma" es "aleman", devuelve "Guten Tag!".
   // Si "idioma" es "mandarin", devuelve "Ni Hao!".
   // Si "idioma" es "ingles", devuelve "Hello!".
   // Si "idioma" no es ninguno de los anteriores o es `undefined` devuelve "Hola!".
   // Tu código:

   if (idioma === "aleman") {
      console.log ("Guten Tag");
  }
  else if (idioma === "mandarin") {
      console.log ("Ni hao");
  }
  else if (idioma === "ingles") {
      console.log ("hello");
  }
  else {
      console.log ("Hola");
  }
}

return saludo("")


function colors(color) {
   // La función recibe un color. Retornar el string correspondiente:
   // En caso que el color recibido sea "blue"   --> "This is blue".
   // En caso que el color recibido sea "red"    --> "This is red".
   // En caso que el color recibido sea "green"  --> "This is green".
   // En caso que el color recibido sea "orange" --> "This is orange".
   // Si no es ninguno de esos colores           --> "Color not found".
   // IMPORTANTE: utilizar el statement SWITCH.
   // Tu código:

   var color = "green";
    switch (color) {
        case "blue":
            console.log ("This is blue");
            break;
        case "red":
            console.log ("This is red");
            break; 
        case "yellow":
            console.log ("This is yellow");
            break;  
        case "green":
            console.log ("This is green");
            break;
    }
}

function esDiezOCinco(num) {
   // Retornar true si "num" es 10 o 5.
   // De lo contrario, retornar false.
   // Tu código:
   if (num === 10 || num === 5) {
      console.log (true);
  }
  else {
      console.log (false);
  }
}
return diezOCinco(10)


function estaEnRango(num) {
   // Retornar true si "num" es menor que 50 y mayor que 20.
   // De lo contrario, retornar false.
   // Tu código:
   if (num < 50 && num > 20) {
      console.log(false)
   }
   console.log(true)
}
return estaEnRango(20)

function esEntero(num) {
   // Retornar true si "num" es un entero, ya sea positivo, negativo o cero.
   // Ejemplo: 0.8   ---> false
   // Ejemplo: 1     ---> true
   // Ejemplo: (-10) ---> true
   // De lo contrario, retorna false.
   // Tu código:
   if (Number.isInteger(num)) {
      console.log("Es entero");
  }
  else {
      console.log ("Es decimal");
  }
}
esEntero(8.2)
esEntero(8)
esEntero(7.3)
esEntero(4.6)
esEntero(-10)
esEntero(-8.2)


function fizzBuzz(num) {
   // Si "num" es divisible entre 3, retorna "fizz".
   // Si "num" es divisible entre 5, retorna "buzz".
   // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
   // De lo contrario, retorna false.
   // Tu código:
   if (num % 3 === 0 && num % 5 === 0 ) {
      console.log ("FizzBuzz");
  }
  else if (num % 3 === 0) {
      console.log ("fizz");
  }
  else if (num % 5 === 0) {
      console.log ("buzz");
  }
}

fizzBuzz(10)
fizzBuzz(15)
fizzBuzz(3)
fizzBuzz(5)

function operadoresLogicos(num1, num2, num3) {
   // La función recibe tres números distintos.
   // Si num1 es mayor a num2 y a num3, y además es positivo, retornar ---> "Numero 1 es mayor y positivo".
   // Si alguno de los tres números es negativo, retornar ---> "Hay negativos".
   // Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
   // Si todos los argumentos son cero, retornar ---> "Error".
   // Si no se cumple ninguna de las condiciones anteriores, retornar false.
   // Tu código:
   if (num1 > (num2, num3) && num1 >= 0) {
      console.log("Número 1 es mayor que numeros 2 y 3, además es positivo");
  }
  else if (num1 <0 || num2 <0 || num3 <0) {
      console.log("Hay negativos");
  }
  else if (num3 > (num1, num2)) {
      num3 = num3 + 1;
      console.log("el nuevo valor de número 3 es: ", num3)
  }
  else if (num1 === 0 && num2 === 0 && num3=== 0) {
      console.log("error");
  }
  else {
      console.log(false)
  }
}
  
operadoresLogicos(10, 8, 4)
operadoresLogicos(-10, 0, 4)
operadoresLogicos(2, 2, 4)
operadoresLogicos(0, 0, 0)
operadoresLogicos(null, null, null)

function esPrimo(num) {
   // Retornar true si "num" es primo.
   // De lo contrario retorna false.
   // [Pista 1]: un número primo sólo es divisible por sí mismo y por 1.
   // [Pista 2]: puedes resolverlo utilizando un `bucle for`.
   // [Nota]: los números negativos, 0 y 1 NO son números primos.
   // Tu código:
  
      if (num <= 1) {
          return false;
      }
      for (let i = 2; i < num; i++) {
          if (num % i === 0) {
              return false;           
          }    
       }
       return true;
  }
  
  console.log(esPrimo(17))

function esVerdadero(valor) {
   // Si "valor" es verdadero retornar "Soy verdadero".
   // Caso contrario, retornar "Soy falso".
   // Tu código:
   if (valor == true) {
      console.log("soy verdadero");
   }
   else {
      console.log("soy falso");
   }
}
return esVerdadero(true)

function tieneTresDigitos(num) {
   // Si el número recibido tiene tres dígitos retornar true.
   // Caso contrario, retornar false.
   // Tu código:
   var cadena = num.toString(); 
    
   if (cadena.length === 3) {
      console.log(true);
   }
   else {
      console.log(false);
   }
}
return tieneTresDigitos(212)

function doWhile(num) {
   // Implementar una función que aumente el valor recibido en 5 hasta un límite de 8 veces.
   // Retornar el valor final.
   // Utilizar el bucle Do-While.
   // Tu código:

   var limite= 8;
    var contador= 0;
 
    do {
        num += 5;
        contador++;
        console.log("valor contador: ", contador, "valor entrada: ", num)
    }
    while (contador < limite);
    console.log(num)     
 }
 return doWhile(10)

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   obtenerMayor,
   mayoriaDeEdad,
   conection,
   saludo,
   colors,
   esDiezOCinco,
   estaEnRango,
   esEntero,
   fizzBuzz,
   operadoresLogicos,
   esPrimo,
   esVerdadero,
   tieneTresDigitos,
   doWhile,
};
