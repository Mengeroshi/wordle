import { LetterStatusObject } from '../types/index';

export const letterIsInCorrectIndex = (
  letterObj: { letter: string; index: number },
  wordToDiscover: string,
) => wordToDiscover.indexOf(letterObj.letter) === letterObj.index;

export const letterStatusAssignation = (
  letterObj: { letter: string; index: number },
  wordToDiscover: string,
) => {
  if (wordToDiscover.includes(letterObj.letter)) {
    if (letterIsInCorrectIndex(letterObj, wordToDiscover)) {
      return LetterStatusObject.CORRECT;
    }
    return LetterStatusObject.INTOTHEWORD;
  }

  return LetterStatusObject.WRONG;
};

export const accentRemover = (word: string) =>
  word.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
