import { SocialNetworks } from './SocialNetworks';
import { InformationContainer } from './InformationContainer'


import Avatar from '../img/eu.jpeg'

import "../styles/components/sidebar.sass";


export const Sidebar = () => {
  return (
    <aside id="sidebar">
     <img src={Avatar} alt="Vitor Leoni" />
      <p className="title">Desenvolvedor</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="" className="btn">
        Download curricúlo
      </a>
    </aside>
  );
};
