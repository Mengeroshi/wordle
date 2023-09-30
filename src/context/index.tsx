import React, {
  createContext, useContext, useMemo, useReducer,
} from 'react';
import wordleReducer from '../reducer';
import wordleStore from '../reducer/store';
import { ReducerActionTypesObject, TReducerState } from '../types';

type TModifiers = {
  toggleTheme: () => void;
}

type TContextType = { modifiers: TModifiers, wordleState: TReducerState }

export const ContextInstance = createContext<TContextType>({} as TContextType);

function ContextProvider({ children }: { children: React.ReactNode }) {
  const [wordleState, dispacht] = useReducer(wordleReducer, wordleStore);

  const toggleTheme = () => {
    dispacht({ type: ReducerActionTypesObject.TOGGLE_THEME });
  };

  const providerValue = useMemo(() => {
    const modifiers = {
      toggleTheme,
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
