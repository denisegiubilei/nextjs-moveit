import {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from 'react';

import { ChallengesContext } from './ChallengesContext';

interface CountdownContextData {
  time: number;
  isActive: boolean;
  hasFinnished: boolean;
  startCountdown: () => void;
  resetCountdown: () => void;
}

interface CountdownContextProviderProps {
  children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData);

export function CountdownContextProvider({
  children,
}: CountdownContextProviderProps) {
  const START_COUNT_DOWN = 25 * 60;
  let countDownTimeout: NodeJS.Timeout;

  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(START_COUNT_DOWN);
  const [isActive, setIsActive] = useState(false);
  const [hasFinnished, setHasFinnished] = useState(false);

  useEffect(() => {
    if (isActive && time > 0) {
      countDownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinnished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time, startNewChallenge]);

  const startCountdown = () => {
    setIsActive(true);
  };

  const resetCountdown = () => {
    clearTimeout(countDownTimeout);
    setIsActive(false);
    setHasFinnished(false);
    setTime(START_COUNT_DOWN);
  };

  return (
    <CountdownContext.Provider
      value={{
        time,
        isActive,
        hasFinnished,
        startCountdown,
        resetCountdown,
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
}
