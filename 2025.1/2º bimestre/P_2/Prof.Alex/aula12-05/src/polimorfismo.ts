function polimorfismo(){
class Animal {
    fazerSom() {
        console.log('Som genérico de um animal');
    }
}

class Cachorro extends Animal {
    fazerSom(): void {
        console.log('Au au!');
    }
}

class Gato extends Animal{
    fazerSom(): void {
        console.log('Miau!')
    }
}

const animal = new Animal();
const cachorro = new Cachorro();
const gato = new Gato();

animal.fazerSom();
cachorro.fazerSom();
gato.fazerSom();
}
polimorfismo()