"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculaMedia = calculaMedia;
function calculaMedia(numeros) {
    let somatorio = 0;
    for (let i = 0; i < numeros.length; i++) {
        somatorio += numeros[i];
    }
    let media = somatorio / numeros.length;
    return media;
}
