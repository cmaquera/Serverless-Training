const autorFactory = require('../../factory/autorFactory')

module.exports = class {
    constructor(props) {
        this.titulo = props.titulo;
        this.duracion = props.duracion;
        this.autor = new autorFactory(props.autor);
    }
}