class Bil {
    static #antalBiler = 0;
    constructor(maerke, pris) {
        if(typeof maerke !== 'string' || typeof pris !== 'number') {
            throw new Error('Forkert type')
        }
        this.maerke = maerke;
        this.pris = pris;
        Bil.#antalBiler++;
    }
    static get antalBiler() {
        return Bil.#antalBiler;
    }

    toString() {
        return `${this.maerke} koster ${this.pris} kr.`
    }
}



class Varevogn extends Bil {
    constructor(maerke, pris, lastEvne) {
        super(maerke, pris);
        if(typeof lastEvne !== 'number') {
            throw new Error('Forkert type')
        }
        this.lastEvne = lastEvne;
    }
    toString() {
        return `${super.toString()} Den kan laste ${this.lastEvne} kg.`
    }

}

const biler = [
    new Bil('Ford', 100000),
    new Bil('VW', 200000),
    new Varevogn('Mercedes', 300000, 1000)
];
console.log(biler);

console.log(biler[1].toString());

console.log(Bil.antalBiler);
