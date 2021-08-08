import styles from '../styles/components/CompletedChallenges.module.css';

function CompletedChallenges() {
  return (
    <div className={styles.completedChallengeContainer}>
      <span>Desafios completos</span>
      <span>5</span>
    </div>
  );
}

export { CompletedChallenges };