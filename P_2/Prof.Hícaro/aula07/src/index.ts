import { Animal } from "./animal";
import { Cachorro } from "./cachorro";
import { Gato } from "./gato";

const cachorro = new Cachorro("Spike", 7, "vira-lata", 10, "caramelo");
cachorro.apresentar();
const gato = new Gato("Bixano", 4, "Siamês", 5, "cinza");
gato.apresentar();
