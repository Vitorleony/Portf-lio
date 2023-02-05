import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejs,
  DiGithubBadge,
  DiReact,
} from 'react-icons/di';

import '../styles/components/tecnologiacontainer.sass'

const technologies = [
  { id: "html5", name:"HTML5", icon: <DiHtml5 /> },
  { id: "css",  name:"CSS3", icon: <DiCss3 /> },
  { id: "js",  name:"JavaScript", icon: <DiJsBadge /> },
  { id: "node",  name:"Node.js", icon: <DiNodejs /> },
  { id: "github",  name:"Github", icon: <DiGithubBadge /> },
  { id: "react",  name:"React.js", icon: <DiReact /> },
]


export const TecnologiaContainer = () => {
  return (
    <section className='Tecnologies-container'>
      <h2>Tecnologias</h2>
      <div className='Tecnologies-grid'>
        {technologies.map((tech) => (
          <div className="Tecnologies-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className='Tecnologies-info'>
              <h3>{tech.name}</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dignissimos natus enim saepe, quas similique eos suscipit cum quis, ducimus quasi obcaecati atque reiciendis odit minima voluptatum alias hic accusamus.</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
