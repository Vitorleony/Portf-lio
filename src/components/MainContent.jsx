import { AboutContainer } from './AboutContainer';
import { TecnologiaContainer } from './TecnologiaContainer';
import { ProjetosContainer } from './ProjetosContainer';

import '../styles/components/maincontent.sass';

export const MainContent = () => {
    return (
        <main id="main-content">
            <AboutContainer />
            <TecnologiaContainer />
            <ProjetosContainer /> 
        </main>
    )
}
