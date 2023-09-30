import React, {
  createContext, useContext, useMemo, useReducer,
} from 'react';
import wordleReducer from '../reducer';
import wordleStore from '../reducer/store';
import { ReducerActionTypesObject, TReducerState } from '../types';

type TModifiers = {
  toggleTheme: () => void;
  toggleInstructionsModalState: () => void
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

  const providerValue = useMemo(() => {
    const modifiers = {
      toggleTheme,
      toggleInstructionsModalState,
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
