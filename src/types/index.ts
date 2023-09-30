/* eslint-disable no-unused-vars */

import { MouseEvent } from 'react';

export const LetterStatusObject = {
  UNSELECTED: 'UNSELECTED',
  CORRECT: 'CORRECT',
  INTOTHEWORD: 'INTOTHEWORD',
  WRONG: 'WRONG',
  DEFAULT: 'DEFAULT',
} as const;

export type TLetterStatus =
  (typeof LetterStatusObject)[keyof typeof LetterStatusObject];

export const ReducerActionTypesObject = {
  TOGGLE_THEME: 'TOGGLE_THEME',
  TOGGLE_INSTRUCTIONS_MODAL_STATE: 'TOGGLE_INSTRUCTIONS_MODAL_STATE',
  START_GAME: 'START_GAME',
  WRITE_ON_WORD_BUFFER: 'WRITE_ON_WORD_BUFFER',
  DELETE_ON_WORD_BUFFER: 'DELETE_ON_WORD_BUFFER',
  SUBMIT_WORD_BUFFER: 'SUBMIT_WORD_BUFFER',
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
    }
  | {
      type: ReducerActionTypesObjectTypes['WRITE_ON_WORD_BUFFER'];
      payload: { wordBuffer: string };
    }
  | {
      type: ReducerActionTypesObjectTypes['DELETE_ON_WORD_BUFFER'];
    }
  | {
      type: ReducerActionTypesObjectTypes['SUBMIT_WORD_BUFFER'];
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

export type TOnclickButtonType = (e: MouseEvent<HTMLButtonElement>) => void;
