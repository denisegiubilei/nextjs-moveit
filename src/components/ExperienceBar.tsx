import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/ExperienceBar.module.css';

function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } =
    useContext(ChallengesContext);

  const xpPercent = `${(currentExperience * 100) / experienceToNextLevel}%`;

  return (
    <header className={styles.experienceBar}>
      <span>0</span>
      <div>
        <div style={{ width: xpPercent }}></div>
        <span className={styles.currentExperience} style={{ left: xpPercent }}>
          {currentExperience} xp
        </span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  );
}

export { ExperienceBar };
