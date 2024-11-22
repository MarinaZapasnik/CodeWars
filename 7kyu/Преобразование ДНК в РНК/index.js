function DNAtoRNA(dna) {
    let newDna = [];
    for (let i = 0; i<dna.length; i++){
      if (dna[i] === 'T'){
        newDna  = newDna + 'U'
      } else {
        newDna  = newDna + dna [i];
      }
      
    }
    return newDna// create a function which returns an RNA sequence from the given DNA sequence
  }
  alert (DNAtoRNA ('TTTRR'))