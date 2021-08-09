import { createContext, useState, ReactNode } from 'react';
import challenges from '../../challenges.json';

interface Challenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface ChallengeContextData {
  level: number;
  challengesCompleted: number;
  currentExperience: number;
  activeChallenge: Challenge;
  experienceToNextLevel: number;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetActiveChallenge: () => void;
  completeChallenge: () => void;
}

interface ChallengeContextProviderProps {
  children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengeContextData);

export function ChallengesContextProvider({
  children,
}: ChallengeContextProviderProps) {
  const [level, setLevel] = useState(1);
  const [challengesCompleted, setChallengesCompleted] = useState(0);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [activeChallenge, setActiveChallenge] = useState(null);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];
    setActiveChallenge(challenge);
  }

  function resetActiveChallenge() {
    setActiveChallenge(null);
  }

  function completeChallenge() {
    setActiveChallenge(null);
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        challengesCompleted,
        currentExperience,
        activeChallenge,
        experienceToNextLevel,
        levelUp,
        startNewChallenge,
        resetActiveChallenge,
        completeChallenge,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}
