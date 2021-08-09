import { useContext } from 'react';
import { ChallengesContext } from '../styles/contexts/ChallengesContext';

import styles from '../styles/components/CompletedChallenges.module.css';

function CompletedChallenges() {
  const context = useContext(ChallengesContext);

  return (
    <div className={styles.completedChallengeContainer}>
      <span>Desafios completos</span>
      <span>{context.challengesCompleted}</span>
    </div>
  );
}

export { CompletedChallenges };
