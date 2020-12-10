import Ponto from "./Ponto"
import Quadrado from "./Quadrado"
import QuadroDesenho from "./QuadroDesenho"
import Triangulo from "./Triangulo"
import Pentagono from './Pentagono'

const quadrado: Quadrado = new Quadrado([
    new Ponto(1,2),
    new Ponto(3,4),
    new Ponto(5,6),
    new Ponto(7,8)
])

const triangulo: Triangulo = new Triangulo([
    new Ponto(1,2),
    new Ponto(3,4),
    new Ponto(5,6)
])

const pentagono = new Pentagono([
    new Ponto(1,2),
    new Ponto(3,4),
    new Ponto(5,6),
    new Ponto(7,8),
    new Ponto(5,6)
])

const quadro = new QuadroDesenho([quadrado, triangulo, pentagono])
quadro.desenhar()