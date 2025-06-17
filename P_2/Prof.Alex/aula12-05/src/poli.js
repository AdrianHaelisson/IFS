class FormaGeometrica{
    calcularArea(){

    };
}

class Circulo extends FormaGeometrica{
    calcularArea (raio){
        const area = Math.PI * (raio **2);
        return area
    }
}
const circulo = new Circulo()
console.log(circulo.calcularArea(5).toFixed(2))
