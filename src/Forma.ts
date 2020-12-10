import Ponto from "./Ponto";

export default class Forma {
    protected pontos: Ponto[];

    constructor(pontos: Ponto[]) {
        this.pontos = pontos;
    }

    print() {
        this.pontos.forEach(p => {
            p.print();
        });
    }
    
    //polimorfismo
    desenhar() {
        this.getPontos().forEach(p => { p.print(); });
    }

    protected getPontos() {
        return this.pontos;
    }

    contarPontos() {
        return this.getPontos().length
    }
}
