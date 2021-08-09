import { useContext } from 'react';
import { ChallengesContext } from '../styles/contexts/ChallengesContext';

import styles from '../styles/components/ExperienceBar.module.css';

function ExperienceBar() {
  const context = useContext(ChallengesContext);

  const xpPercent = `${context.currentExperience / 6}%`;

  return (
    <header className={styles.experienceBar}>
      <span>0</span>
      <div>
        <div style={{ width: xpPercent }}></div>
        <span className={styles.currentExperience} style={{ left: xpPercent }}>
          {context.currentExperience} xp
        </span>
      </div>
      <span>600 xp</span>
    </header>
  );
}

export { ExperienceBar };
