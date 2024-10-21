abstract class FiguraGeometrica{
    nombre:string = ""
    constructor(nombre:string) {
        this.nombre = nombre
    }

    abstract calcularPerimetro():number
}

export class Circulo extends FiguraGeometrica{
    radio:number
    constructor(radio:number, nombre:string) {
        super(nombre)
        this.radio = radio
    }

    override calcularPerimetro(): number {
        return  2 * Math.PI * this.radio
    }
}

export class TrianguloEscaleno extends FiguraGeometrica {
    ladoA:number
    ladoB:number
    ladoC:number
    constructor(ladoA:number, ladoB:number, ladoC:number, nombre:string) {
        super(nombre)
        this.ladoA = ladoA
        this.ladoB = ladoB
        this.ladoC = ladoC
    }

    override calcularPerimetro(): number {
        return this.ladoA + this.ladoB + this.ladoC
    }
}

// nose si aplique aun
class TrianguloEquilatero {
    constructor(ladoA:number) {     
    }
}