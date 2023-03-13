const movieQuotes = require('popular-movie-quotes');
console.log(movieQuotes.getRandomQuote());

const listaAutos = require('./db/index');
console.log(listaAutos);

function describirse() {
   return 'hola soy el auto ' + listaAutos.marca + ' , modelo ' + listaAutos.modelo + ' . Fabricado en el año ' + listaAutos.anio + ' y del color ' + listaAutos.color
}
console.log(describirse(1));

for (let i = 0; i < listaAutos.length; i++){
    console.log(describirse(i))
}

function porColor(color){
    let resultados = []
    for (let i = 0; i < listaAutos.length; i++){
        if (autos.lista[i].color == color){
            resultados.push(describirse(i))
        }
    }

    if (resultados.length == 0){
        return `No contamos con autos de color ${color}`
    }

    else{
        return resultados
    }
}

console.log(porColor("blue"))
console.log(porColor("red"))



function porMarca(marca){
    let resultadosmarca = []
    for (let i = 0; i < listaAutos.length; i++){
        if (listaAutos[i].marca == marca){
            resultadosmarca.push(describirse(i))
        }
    }

    if (resultadosmarca.length == 0){
        return `No contamos con autos de marca ${marca}`
    }

    else{
        return resultadosmarca
    }
}

console.log(porMarca("mercedes benz"));
console.log(porMarca("chevrolet"));


function porAnio(anio){
    let resultadosanio = []
    for (let i = 0; i < listaAutos.length; i++){
        if (listaAutos[i].anio == anio){
            resultadosanio.push(describirse(i))
        }
    }

    if (resultadosanio.length == 0){
        return `No contamos con autos del año ${anio}`
    }

    else{
        return resultadosanio
    }
}

console.log(porAnio(2017))
console.log(porAnio(1765))
