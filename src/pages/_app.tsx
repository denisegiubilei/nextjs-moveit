import { ChallengesContextProvider } from '../styles/contexts/ChallengesContext';

import '../styles/theme.css';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesContextProvider>
      <Component {...pageProps} />
    </ChallengesContextProvider>
  );
}

export default MyApp;
