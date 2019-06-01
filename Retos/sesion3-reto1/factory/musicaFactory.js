const Cancion = require('../model/cancion/cancion');

const Musica = { Cancion }


module.exports = class musicaFactory {
    constructor(data) {
        return new Musica[data.type](data.props);
    }
}