import Forma from "./Forma";

export default class QuadroDesenho {
    private formas: Forma[];
    constructor(formas: Forma[]) {
        this.formas = formas;
    }

    desenhar() {
        this.formas.forEach(f => {
            f.desenhar();
        });
    }
}
