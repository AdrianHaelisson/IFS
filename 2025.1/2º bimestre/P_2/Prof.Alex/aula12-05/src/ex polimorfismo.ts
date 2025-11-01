abstract class FormaGeometrica {
    abstract calcularArea(): number;
}

class Circulo extends FormaGeometrica {
    raio: number;
    constructor(raio: number) {
        super(); 
        if (raio <= 0) {
            throw new Error("O raio do círculo deve ser positivo.");
        }
        this.raio = raio;
    }
     calcularArea(): number {
        const area = Math.PI * (this.raio ** 2);
        return area;
    }
}
class Quadrado extends FormaGeometrica{
    lado: number;
    constructor(lado: number){
        super();
        if (lado <= 0) {
            throw new Error("O lado do quadrado deve ser positivo.");
        }
        this.lado = lado;

    }
    
    calcularArea(): number {
        const area = this.lado * this.lado;
        return area;
    }
}
class Triangulo extends FormaGeometrica{
    base: number;
    altura: number;
    constructor(base: number, altura: number){
        super()
        if (base <= 0){
           console.log("A base do triangulo deve ser positiva.");
        }
        if (altura <= 0){
            console.log("A altura do triangulo deve ser positiva.");
        }
        this.altura = altura;
        this.base = base;
    }
    calcularArea(): number {
        const area = (this.base * this.altura) / 2;
        return area;
    }
}
const formas: FormaGeometrica[] = []


formas.push(new Circulo(5));
formas.push(new Quadrado(4));
formas.push(new Triangulo (6, 3));

formas.forEach((forma, index) => {
    const area = forma.calcularArea().toFixed(2)
    console.log(`Forma ${index + 1} (${forma.constructor.name}) : Área = ${area}`)
})