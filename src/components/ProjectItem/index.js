import './index.css'

const ProjectItem = props => {
  const {eachProject} = props

  return (
    <li className="list-item-container">
      <img
        src={eachProject.image_url}
        alt={eachProject.name}
        className="project-image"
      />
      <p className="project-name">{eachProject.name}</p>
    </li>
  )
}

export default ProjectItem
