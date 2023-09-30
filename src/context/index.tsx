/* eslint-disable no-unused-vars */
import React, {
  createContext, useContext, useMemo, useReducer,
} from 'react';
import wordleReducer from '../reducer';
import wordleStore from '../reducer/store';
import { ReducerActionTypesObject, TReducerState } from '../types';

type TModifiers = {
  toggleTheme: () => void;
  toggleInstructionsModalState: () => void,
  startGame: (wordToDiscover: string) => void;
  writeOnBuffer: (wordBuffer: string) => void;
  deleteOnBuffer: () => void;
  submitWordBuffer: () => void;
  togleStatsModal: () => void;
  gameOver: () => void;
}

type TContextType = { modifiers: TModifiers, wordleState: TReducerState }

export const ContextInstance = createContext<TContextType>({} as TContextType);

function ContextProvider({ children }: { children: React.ReactNode }) {
  const [wordleState, dispacht] = useReducer(wordleReducer, wordleStore);

  const toggleTheme = () => {
    dispacht({ type: ReducerActionTypesObject.TOGGLE_THEME });
  };
  const toggleInstructionsModalState = () => {
    dispacht({ type: ReducerActionTypesObject.TOGGLE_INSTRUCTIONS_MODAL_STATE });
  };
  const startGame = (wordToDiscover: string) => {
    dispacht({ type: ReducerActionTypesObject.START_GAME, payload: { wordToDiscover } });
  };
  const writeOnBuffer = (wordBuffer: string) => {
    const { game: { started, wordBuffer: currentWordBuffer } } = wordleState;
    if (started === true && currentWordBuffer.length < 5) {
      dispacht({ type: ReducerActionTypesObject.WRITE_ON_WORD_BUFFER, payload: { wordBuffer } });
    }
  };
  const deleteOnBuffer = () => {
    dispacht({ type: ReducerActionTypesObject.DELETE_ON_WORD_BUFFER });
  };
  const submitWordBuffer = () => {
    dispacht({ type: ReducerActionTypesObject.SUBMIT_WORD_BUFFER });
  };
  const togleStatsModal = () => {
    dispacht({ type: ReducerActionTypesObject.TOGGLE_STATS_MODAL });
  };
  const gameOver = () => {
    dispacht({ type: ReducerActionTypesObject.GAME_OVER });
  };

  const providerValue = useMemo(() => {
    const modifiers = {
      toggleTheme,
      toggleInstructionsModalState,
      startGame,
      writeOnBuffer,
      deleteOnBuffer,
      submitWordBuffer,
      togleStatsModal,
      gameOver,
    };

    return { modifiers, wordleState };
  }, [wordleState]);

  return (
    <ContextInstance.Provider value={providerValue}>
      {children}
    </ContextInstance.Provider>
  );
}

const useGetWordleContext = () => useContext(ContextInstance);

export { ContextProvider, useGetWordleContext };
