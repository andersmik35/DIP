//test.js
import assert from "chai";
import {addPerson, findPerson, filterByAge } from "../logic.js";

describe("Søgning i personer", () => {
    it("Skal finde en person", () => {
        addPerson("Hans", 23);
        addPerson("Grethe", 19);
        addPerson("Ib", 23);
        let person = findPerson("Grethe");
        assert.equal(person.navn, "Grethe");
        assert.equal(person.alder, 19);
    });
    it("Skal filtrere personer", () => {
        addPerson("Hans", 23);
        addPerson("Grethe", 19);
        addPerson("Ib", 23);
        let personer = filterByAge(23);
        assert.equal(personer.length, 2);
        assert.equal(personer[0].navn, "Hans");
        assert.equal(personer[1].navn, "Ib");
    });
});

describe("filtrer personer", () => {
    it("Skal filtrere personer", () => {
        addPerson("Hans", 23);
        addPerson("Grethe", 19);
        addPerson("Ib", 23);
        let personer = filterByAge(23);
        assert.equal(personer.length, 2);
        assert.equal(personer[0].navn, "Hans");
        assert.equal(personer[1].navn, "Ib");
    });
});