import { Coord } from "./types";

export default class Ponto {
    private _coordenada: Coord;

    constructor(x: number, y: number) {
        this._coordenada = [x, y];
    }

    //encapsulamento
    getCoordenada(): Coord {
        return this._coordenada;
    }

    //encapsulamento
    setCoordenada(coord: Coord) {
        this._coordenada = coord;
    }

    print() {
        console.log(this._coordenada);
    }
}