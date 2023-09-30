import React, {
  createContext, useContext, useMemo,
} from 'react';

export const ContextInstance = createContext<unknown>({});

function ContextProvider({ children }: { children: React.ReactNode }) {
  const value = useMemo(() => ({ greet: 'hola' }), []);
  return (
    <ContextInstance.Provider value={value}>
      {children}
    </ContextInstance.Provider>
  );
}

const useGetWordleContext = () => useContext(ContextInstance);

export { ContextProvider, useGetWordleContext };
