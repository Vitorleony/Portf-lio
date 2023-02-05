import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa'

import "../styles/components/socialnetworks.sass";

const socialNetworks = [
    { name: "linkedin", icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/vitor-leoni-vl1997/" },
    { name: "github", icon: <FaGithub />, link: "https://github.com/Vitorleony" },
    { name: "instagram", icon: <FaInstagram />, link: "https://www.instagram.com/vleoni97/" },
]



 export const SocialNetworks = () => {
   return (
     <section id='social-network'>
         {socialNetworks.map((network) => (
           <a href={network.link} className='social-btn' id={network.name} key={network.name}>
             {network.icon}
          </a>
         ))}
     </section>
   )
 }

