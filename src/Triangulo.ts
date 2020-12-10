import Forma from "./Forma";
import Ponto from "./Ponto";

//herança
export default class Triangulo extends Forma {
    constructor(pontos: [Ponto, Ponto, Ponto]) {
        super(pontos);
    }

    //polimorfismo
    desenhar() {
        console.log(`Vou desenhar um Triangulo (${this.contarPontos()} pontos)`);
        super.desenhar();
        console.log("Terminei de desenhar o Triangulo");
    }
}
