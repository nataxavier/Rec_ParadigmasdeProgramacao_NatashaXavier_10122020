import Forma from "./Forma";
import Ponto from "./Ponto";

//herança
export default class Pentagono extends Forma {
    constructor(pontos: [Ponto, Ponto, Ponto, Ponto, Ponto]) {
        super(pontos);
    }

    //polimorfismo
    desenhar() {
        console.log(`Vou desenhar um Pentagono (${this.contarPontos()} pontos)`);
        super.desenhar();
        console.log("Terminei de desenhar o Pentagono");
    }
}
