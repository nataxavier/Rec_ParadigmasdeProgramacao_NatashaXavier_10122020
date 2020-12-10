import Forma from "./Forma";
import Ponto from "./Ponto";

export default class Quadrado extends Forma {
    constructor(pontos: [Ponto, Ponto, Ponto, Ponto]) {
        super(pontos);
    }

    //polimorfismo
    desenhar() {
        console.log(`Vou desenhar um Quadrado (${this.contarPontos()} pontos)`);
        super.desenhar();
        console.log("Terminei de desenhar o Quadrado");
    }
}
