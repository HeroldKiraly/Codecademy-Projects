// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

let pAequorFactory = function(number, dnaArray) {
  return {
    _specimenNum : number,
    _dna: dnaArray,
    mutate() {
      randomDna = Math.floor(Math.random() * 15);
      dnaWithoutA = ['T', 'C', 'G'];
      dnaWithoutT = ['A', 'C', 'G'];
      dnaWithoutC = ['A', 'T', 'G'];
      dnaWithoutG = ['A', 'T', 'C'];

      if(this._dna[randomDna] === 'A') {
        this._dna[randomDna] = dnaWithoutA[Math.floor(Math.random() * 3)];
      } else if (this._dna[randomDna] === 'T') {
        this._dna[randomDna] = dnaWithoutT[Math.floor(Math.random() * 3)];
      } else if (this._dna[randomDna] === 'C') {
        this._dna[randomDna] = dnaWithoutC[Math.floor(Math.random() * 3)];
      } else if (this._dna[randomDna] === 'G') {
        this._dna[randomDna] = dnaWithoutG[Math.floor(Math.random() * 3)];
      }
      return this._dna;
    },
    compareDNA(pAequor) {
      let numbersInCommon = 0;
      for (let i = 0; i < pAequor.length; i++ ) {
        if(pAequor[i] == this._dna[i]) {
          numbersInCommon++;
        }
    }
    let percentInCommon = ((numbersInCommon / 15) * 100).toFixed(2);
    console.log(`Specimen ${this._specimenNum} and Specimen ${pAequor._specimenNum} have ${percentInCommon}% DNA in common.`);
    },
  };
};

const specimen1 = pAequorFactory(1, mockUpStrand());
const specimen2 = pAequorFactory(2, mockUpStrand());
console.log(specimen1._dna);
console.log(specimen2._dna);
specimen1.compareDNA(specimen2);




