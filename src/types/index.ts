export const LetterStatusObject = {
  UNSELECTED: 'UNSELECTED',
  CORRECT: 'CORRECT',
  INTOTHEWORD: 'INTOTHEWORD',
  WRONG: 'WRONG',
} as const;

export type TLetterStatus =
  (typeof LetterStatusObject)[keyof typeof LetterStatusObject];
