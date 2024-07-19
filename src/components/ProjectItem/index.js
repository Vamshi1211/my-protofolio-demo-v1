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
        {eachProject.category === 'REACT' && (
          <>
            <p className="project_card_username">username: rahul</p>
            <p className="project_card_password">password: rahul@2021</p>
          </>
        )}
        <a
          href={eachProject.websiteUrl}
          target="__blank"
          className="project_card__button"
        >
          Live Demo
        </a>
      </div>
    </li>
  )
}

export default ProjectItem
