const biler = [ 
    {nummerplade: "AB12345", vægt: 1000, mærke: "Ford", hjul: 4},
    {nummerplade: "CD23456", vægt: 1200, mærke: "VW", hjul: 4},
    {nummerplade: "EF34567", vægt: 1500, mærke: "Ram", hjul: 6},
    {nummerplade: "GH45678", vægt: 2000, mærke: "Mercedes", hjul: 8},
]

const otteHjul = biler.filter(bil => bil.hjul === 8);

const nummerplader = biler.map(bil => bil.nummerplade);

const findMindsteVægt = biler.reduce((mindsteVægt, bil) => {
    if (bil.vægt < mindsteVægt.vægt) {
        return bil;
    } else {
        return mindsteVægt;
    }
}, biler[0]);


const størsteAntalHjul = biler.filter(bil => bil.hjul === 8) 

const antalBilerForHjul = biler.reduce((result, bil) => {
    const antalHjul = bil.hjul;
    result[antalHjul] = (result[antalHjul] || 0) + 1;
    return result;
}
, {});

console.log("Biler med 8 hjul: " + otteHjul.map(bil => bil.nummerplade));
console.log("Nummerplader: " + nummerplader);
console.log("Mindste vægt: " + findMindsteVægt);
console.log("Største antal hjul: " + størsteAntalHjul.map(bil => bil.nummerplade));
console.log("Antal biler for hjul: " + JSON.stringify(antalBilerForHjul));