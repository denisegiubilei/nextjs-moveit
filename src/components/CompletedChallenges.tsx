import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/CompletedChallenges.module.css';

function CompletedChallenges() {
  const { challengesCompleted } = useContext(ChallengesContext);

  return (
    <div className={styles.completedChallengeContainer}>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </div>
  );
}

export { CompletedChallenges };
