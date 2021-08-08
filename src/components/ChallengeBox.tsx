import { useState } from 'react';
import styles from '../styles/components/ChallengeBox.module.css';

function ChallengeBox() {
  const [hasActiveChallenge, setHasActiveChallenge] = useState(true);

  return (
    <div className={styles.challengeBoxContainer}>
      {hasActiveChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe 400 xp</header>

          <main>
            <img
              src="icons/body.svg"
              alt="Exercicio - Desenho de uma mão levantando peso"
            />
            <strong>Novo desafio</strong>
            <p>Levante e faça uma caminhada de 3 minutos</p>
          </main>

          <footer>
            <button type="button" className={styles.challengeFailedButton}>
              Falhei
            </button>
            <button type="button" className={styles.challengeSuccededButton}>
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img
              src="icons/level-up.svg"
              alt="Level Up - Ícone seta para cima"
            />
            Avance de level completando desafios
          </p>
        </div>
      )}
    </div>
  );
}

export { ChallengeBox };
