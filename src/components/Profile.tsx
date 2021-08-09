import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/Profile.module.css';

function Profile() {
  const context = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img
        src="http://github.com/denisegiubilei.png"
        alt="Foto de perfil do usuário denisegiubilei"
      />
      <div>
        <strong>Denise Giubilei</strong>
        <p>
          <img src="icons/level.svg" alt="Ícone de level - Seta para cima" />
          Level {context.level}
        </p>
      </div>
    </div>
  );
}

export { Profile };
