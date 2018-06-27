/**
 * Usuarios.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    idUsuario:{
      type: "number"
    },

    nombre:{
      type: "string"
    },

    apellido:{
      type: "string"
    },

    telefono:{
      type: "number"
    },

    password:{
      type: "string",
      encrypt: true
    },

    reservas:{
      collection:"Reservas",
      via:"idUsuario"
    }

  },

};

