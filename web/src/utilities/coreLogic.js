import shuffle from 'shuffle-array'

export const determineLetters = (isShuffled, lettersToTest, maxNumberOfLetters) => {
  const lengthOfLetters = lettersToTest.length
  // if the max amount is more than the array length, cut the array at its length to avoid error
  const cutOffPoint = maxNumberOfLetters <= lengthOfLetters ? maxNumberOfLetters : lengthOfLetters
  if(isShuffled){
    const shuffledLetters = shuffle(lettersToTest)
    shuffledLetters.length = cutOffPoint
    return shuffledLetters
  } else {
    lettersToTest.length = cutOffPoint
    return lettersToTest
  }
}