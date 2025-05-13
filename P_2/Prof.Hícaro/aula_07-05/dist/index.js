"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//let prompt = require("prompt-sync")();
const prompt_sync_1 = __importDefault(require("prompt-sync"));
let prompt = (0, prompt_sync_1.default)();
function calculaMedia() {
    const nota1 = Number(prompt("Digite sua primeira nota: "));
    const nota2 = Number(prompt("Digite sua segunda nota: "));
    const nota3 = Number(prompt("Digite sua terceira nota: "));
    const media = (nota1 + nota2 + nota3) / 3;
    return media;
}
console.log(calculaMedia());
