export const LetterStatusObject = {
  UNSELECTED: 'UNSELECTED',
  CORRECT: 'CORRECT',
  INTOTHEWORD: 'INTOTHEWORD',
  WRONG: 'WRONG',
} as const;

export type TLetterStatus =
  (typeof LetterStatusObject)[keyof typeof LetterStatusObject];

export const ReducerActionTypesObject = {
  TOGGLE_THEME: 'TOGGLE_THEME',
  TOGGLE_INSTRUCTIONS_MODAL_STATE: 'TOGGLE_INSTRUCTIONS_MODAL_STATE',
  START_GAME: 'START_GAME',
} as const;

type ReducerActionTypesObjectTypes = typeof ReducerActionTypesObject;

export type TReducerActionTypes =
  (typeof ReducerActionTypesObject)[keyof typeof ReducerActionTypesObject];

export type TWordleReducerActions =
  | { type: ReducerActionTypesObjectTypes['TOGGLE_THEME'] }
  | { type: ReducerActionTypesObjectTypes['TOGGLE_INSTRUCTIONS_MODAL_STATE'] }
  | {
      type: ReducerActionTypesObjectTypes['START_GAME'];
      payload: { wordToDiscover: string };
    };

export type TReducerState = {
  isDayThemeTurnedOn: boolean;
  isIntructionsModalOpen: boolean;
  game: {
    wordToDiscover: null | string;
    wordBuffer: string;
    wordsInBoard: string[];
    alreadyPlayedWords: string[];
    started: boolean;
  };
};
