import './index.css'

const ProjectItem = props => {
  const {eachProject} = props

  return (
    <li className="project_card">
      <img
        src={eachProject.imageUrl}
        alt={eachProject.title}
        className="project-image"
      />
      <div className="project_card__content">
        <p className="project_card__title">{eachProject.title}</p>
        <p className="project_card__description">{eachProject.description}</p>
        <a
          href={eachProject.websiteUrl}
          target="__blank"
          className="project_card__button"
        >
          Live Demo
        </a>
        <a href="#skills" className="project_card__button secondary">
          Source Code
        </a>
      </div>
    </li>
  )
}

export default ProjectItem
