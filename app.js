const yargs =require('./confi_yargs/yargs');// llamamos el yargs
const {multi}=require('./multiplicar.js');// rquerimos el archivo multiplicar
console.clear();// limpiar la consola 


console.log("El valor entrado es : "+yargs.base);// me entrega el valor de la base que se entrega por consola 

multi(yargs.base,yargs.l,yargs.h)
.then(salida =>console.log(salida))
.catch(err=>console.log(err));

//instalamos yars para recibir parametros de consola
