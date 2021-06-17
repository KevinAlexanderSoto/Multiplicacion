
const yargs = require('yargs')// toda la info para manejar yargs esta en la documentacion 
.options({
    'b':{//para añadir nuevos parametros 
        alias : 'base',
        type : 'number',
        demandoption : true,
        describe : 'base to the multiplication'
    },
    'l':{
        alias : 'list',
        demandoption : false,
        type : 'boolean',
        default : false,
        describe : 'list the multiplication table'
    },
    'h':{
        alias : 'hasta',
        demandoption : false,
        type : 'number',
        default : 10,
        describe : 'hasta donde quiero la multiplicacion'
    }

})
.check((argv,options)=>{
    if (isNaN(argv.b)) {
        throw new Error('the base has to be a number');
    }
    return true 
})
.argv;

module.exports = yargs;