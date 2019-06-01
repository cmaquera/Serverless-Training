const Cantante = require('../model/autor/cantante');
const Compositor = require('../model/autor/compositor');
const Productora = require('../model/autor/productora');

const Autor = { Cantante, Compositor, Productora }

module.exports = class autorFactory {
    constructor(data) {
        return new Autor[data.type](data.props);
    }
    get() {
        console.log('Autor :' + this);
    }
    delete(){
        console.log('Autor deleted')
    }
}