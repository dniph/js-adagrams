
const LETTER_DISTRIBUTION = {
  A: 9, B: 2, C: 2, D: 4, E: 12,
  F: 2, G: 3, H: 2, I: 9, J: 1,
  K: 1, L: 4, M: 2, N: 6, O: 8,
  P: 2, Q: 1, R: 6, S: 4, T: 6,
  U: 4, V: 2, W: 2, X: 1, Y: 2, Z: 1
};


export const drawLetters = () => {
  // Implement this method for wave 1
  const letterPool = [];
  for (const [letter, count] of Object.entries(LETTER_DISTRIBUTION)) {
    for (let i = 0; i <count; i++){
      letterPool.push(letter);
    }
  }

  const hand = [];

  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * letterPool.length);
    const chosenLetter = letterPool[randomIndex];
    hand.push(chosenLetter);
    letterPool.splice(randomIndex, 1); // eliminamos la letra usada
  }

  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  const handCopy = [...lettersInHand];


  for (let char of input.toUpperCase()) {
    const index = handCopy.indexOf(char);
    if (index === -1) {
      return false; 
    }
    handCopy.splice(index, 1); 
  }

  return true; 

};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
