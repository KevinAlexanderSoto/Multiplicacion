
const fs = require('fs');//para escribir nuevos archivos 

let salida = '';

/*const multi = (base=1) => {

    return new Promise((resolve, rejects) => {

        for (let int = 1; int <= 10; int++) {// tabla del 5
            salida = salida + `${base}*${int} = ${base * int}\n`;

        }
        console.log(salida);
        fs.writeFile(`tabla-${base}.txt`, salida, (err) => {// escribir un archivo .txt
            if (err) throw err
            console.log('se ha creado el archivo');
        })
        resolve(`tabla-${base}.txt`);

    })
};*/

//OTRA FORMA MAS SIMPLE 
const multi = async(base=1,list,hasta) => {

   try {
    for (let int = 1; int <= hasta; int++) {// tabla del 5
        salida = salida + `${base}*${int} = ${base * int}\n`;

    }
    if (list) {
        console.log(salida);
    }
    
    fs.writeFile(`./salidas/tabla-${base}.txt`, salida, (err) => {// escribir un archivo .txt
        if (err) throw err
        console.log('se ha creado el archivo');
    })
    return(`tabla-${base}.txt`);
   } catch (error) {
       throw error;
   }
};


module.exports = {// para exportar esto a otro js
    multi
}