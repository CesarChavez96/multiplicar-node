//requireds
const fs = require('fs');
//const fs=require('express');
// const fs=require('./fs')
const colors = require('colors');
let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base * i}\n`);
        }

        //const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla-${base}.txt hasta el ${limite}`);
        });

    });
}

let crearLista = (base, Limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(Limite)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }
        for (let i = 1; i <= Limite; i++) {
            console.log(`${base} * ${i} = ${base * i}`);
        }
        resolve(`Lista de tabla del ${base} hasta el ${Limite} generada con exito`);
    });
}

module.exports = {
    crearArchivo,
    crearLista
}