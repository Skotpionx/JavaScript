// alert(nombre);
/*
let numero, numero2, numero3;

numero = 2;
numero2 = 34;
numero3 = 35;

// alert(numero);
// alert(numero2);
// alert(numero3);

let numero4 = 23,
    numero5 = 45;

let numero6 = 45;
let numero7 = 56;

let n = null; // Vacia , le dices que no hay nada dentro > diferente de undefined.
*/
// alert(numero * nombre)  NaN > Not A Number > estás haciendo una operación con un número y algo que no es un número.

// let nombre2 = prompt("Dime tu nombre");

// let nombre3 = prompt("Dime tu nombre"); > Con prompt pregunttas el nombre al usuario y lo guardo en variable (o no)

// alert("Hola " + nombre);

/*
numero1 = "52";

numero2 = 8;

frase = numero1.concat(numero2); // Hay que tener minimo un string para concatenar.

// document.write(frase);
*/
//Otra forma de concatenar

//Esta es una forma normal

/*
nombre2 = " Juanmi Fernandez";

frase2 = "soy " + nombre2 + " y estoy caminando";

// Esta es una forma buena se llama backticks 

frase5 = `soy ${nombre2} y estoy caminando`;

document.write(frase5);
*/
// También puedes hacer
/*
frase6 = `soy ${nombre}


    y estoy caminando`;
*/
//

// Escape de comillas
/*
nombre3 = "Juanmi";

frase8 = "mi nombre es 'Juanmi' y soy crack";

frase9 = `mi nombre es 'Juanmi' y soy un crack `;

*/
/* 

if(false){
    alert("Esto es falso");
}
if(true){
    alert("Esto es true");
}
*/

/* 
    Historia de Cofla 
                        */

/*    
    Tres chicos, de 23 años perfectamente normales entran en una heladeria a comprar un helado.   
       Pero hay un problema, los precios no estan al lado de cada estante con su respectivo helado,
       Quieren comprar el helado mas caro que puedan comprar con el diner que tiene.
       Cada uno tiene distintas cantidades de dinero, y hay una tabla en la que nos podemos basar para 
       saber el costo de cada helado

       Soluciones requeridas >
    
       - Ingresar el monto que tienen y mostarles el hellado mas caro que pueden comprar
       - Si hay 2 o mas con el mismo precio mostrar ambos.
       - De paso Cofla quiere saber cuanto es el vuelto.

       Cofla se enoja y le rompe el kosko al kioskero, no compra un carajo y usa ese dinero para 
       darselo a un sin techo, si le alcanza uno, lo cmpra, si le alcanza dos, compra dos,
       si le alcanza tres y sobra, regala elv uelto, debe mostrar que compró y cuál fue la vuelta.
       
       1 > mintiendo
       2 > no esta mintiendo
       3 > indecision

       En el barrio sucedi un asesinato, y habia 3 sospechosos, Cofla era uno de ellos.
       Se lo lleva a la comisaria para interrogarlo, si mienta > una descarga , no miente > no hace nada, 
       Si no se decide el aparato> la pregunta debe ser mas clara.
                        */

/* Inicio de ejercicio */


nombre3 = "Cofla";

let dineroCofla = prompt("Cuánto dinero tienes" + nombre3);

dineroCofla = parseInt(dineroCofla);

if (dineroCofla >= 0.6 && dineroCofla < 1) {
    alert("Comprate el helado de agua");
    alert(" y te sobran " + (dineroCofla - 0.6));
} else if (dineroCofla >= 1 && dineroCofla < 1.6) {
    alert("Comprate el helado de crema");
    alert(" y te sobran " + (dineroCofla - 1));
} else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
    alert("Comprate el helado de heladix");
    alert(" y te sobran " + (dineroCofla - 1.6));
} else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
    alert("Comprate el helado de heladovich");
    alert(" y te sobran " + (dineroCofla - 1.7));
} else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
    alert("Comprate el helado de helardo");
    alert(" y te sobran " + (dineroCofla - 1.8));
} else if (dineroCofla >= 2.9) {
    alert("Comprate el mejor helado de pote o de confites");
    alert(" y te sobran " + (dineroCofla - 2.9));
} else {
    alert("No tienes dinero");
}