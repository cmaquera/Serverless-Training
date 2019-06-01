/**
 *
 * Conceptos para revisar:
 *
 * Factory Pattern
 * ES6 Classes
 * JS Modules
 *
 * Objetivo del Reto: Crear estructuras de datos con sus respectivos CRUD para simular un backend de Spotify o Netflix.
 *
 * La cantidad y complejidad de las estructuras de datos es libre.
 *
 * */

// Codigo Referencia



const Musica = require('./factory/musicaFactory');
const db = require('./db');

/*
let SpotifyDB;

function Spotify () {
    return {
        init: function () {
            SpotifyDB = new db([]);
        },
        agregarCancion: function (titulo, duracion, autor) {
            SpotifyDB.canciones.push(new Musica(titulo, duracion, autor));
        }
    }
}

let spotifyInstance = Spotify();
*/


musica_1 = {
    type: 'Cancion',
    props: {
        titulo: 'cancion uno',
        duracion: 4.3,
        autor : {
            type: 'Cantante',
            props: {
                nombre: 'tanto',
                pais: 'peru'
            }
        }
    }
}



let obj_musica = new Musica(musica_1);

console.log(obj_musica.autor);


//spotifyInstance.init();

//spotifyInstance.agregarCancion('cancion uno', 4.3, {nombre: 'tanto', pais: 'tanto'});
//spotifyInstance.agregarCancion('cancion dos', 4.3, {nombre: 'tanto', pais: 'tanto'});


//console.log(SpotifyDB);