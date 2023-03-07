const movieQuotes = require('popular-movie-quotes');
console.log(movieQuotes.getRandomQuote());

const listaAutos = require('./db/index');
console.log(listaAutos);

//function describirse() {
//   return 'hola soy el auto ' + listaAutos.marca + ' , modelo ' + listaAutos.modelo + ' . Fabricado en el año ' + listaAutos.anio + ' y del color ' + listaAutos.color
//}
//console.log(describirse(1));

for (let i = 0; i < listaAutos.length; i++) {
    function describirse() {
        return 'hola soy el auto ' + listaAutos.marca + ' , modelo ' + listaAutos.modelo + ' . Fabricado en el año ' + listaAutos.anio + ' y del color ' + listaAutos.color
    }
}
