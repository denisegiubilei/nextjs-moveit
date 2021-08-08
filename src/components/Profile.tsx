import Image from 'next/image';

import styles from '../styles/components/Profile.module.css';

function Profile() {
  return (
    <div className={styles.profileContainer}>
      <Image
        src={'http://github.com/denisegiubilei.png' as any}
        alt="Foto de perfil do usuário denisegiubilei"
      />
      <div>
        <strong>Denise Giubilei</strong>
        <p>
          <Image
            src={'icons/level.svg' as any}
            alt="Ícone de level - Seta para cima"
          />
          Level 1
        </p>
      </div>
    </div>
  );
}

export { Profile };
