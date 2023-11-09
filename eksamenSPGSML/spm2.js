class Bil {
    constructor(maerke, pris) {
        if(typeof maerke !== 'string' || typeof pris !== 'number') {
            throw new Error('Forkert type')
        }
        this.maerke = maerke;
        this.pris = pris;
    }

    toString() {
        return `${this.maerke} koster ${this.pris} kr.`
    }
}



class Varevogn extends Bil {
    constructer(maerke, pris, lastEvne) {
        super(maerke, pris);
        if(typeof lastEvne !== 'number') {
            throw new Error('Forkert type')
        }
        this.lastEvne = lastEvne;
    }

}