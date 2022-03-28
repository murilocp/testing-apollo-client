import React, { createContext, useState, useContext, useCallback } from 'react';

const ReposContext = createContext<IReposContext>({} as IReposContext);

const ReposProvider: React.FC = ({ children }) => {
  const [userName, setUserName] = useState('');

  const updateUserName = useCallback((userName: string) => {
    setUserName(userName);
  }, []);

  return (
    <ReposContext.Provider value={{ updateUserName, userName }}>
      {children}
    </ReposContext.Provider>
  );
};

function useRepos(): IReposContext {
  const context = useContext(ReposContext);

  return context;
}

export { ReposProvider, useRepos };
