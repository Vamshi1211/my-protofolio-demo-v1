import {Component} from 'react'
import Loader from 'react-loader-spinner'
import PaginationPage from '../PaginationPage'
import './index.css'

const categoriesList = [
  {id: 'ALL', displayText: 'All'},
  {id: 'STATIC', displayText: 'Static'},
  {id: 'RESPONSIVE', displayText: 'Responsive'},
  {id: 'DYNAMIC', displayText: 'Dynamic'},
  {id: 'REACT', displayText: 'React'},
]

const apiStatusValue = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  failure: 'FAILURE',
  success: 'SUCCESS',
}

class App extends Component {
  state = {
    apiStatus: apiStatusValue.initial,
    categoryId: 'ALL',
    projects: [],
  }

  componentDidMount() {
    this.getProjects()
  }

  getProjects = async () => {
    this.setState({apiStatus: apiStatusValue.inProgress})
    const {categoryId} = this.state

    const url = `https://apis.ccbp.in/ps/projects?category=${categoryId}`

    const response = await fetch(url)
    if (response.ok === true) {
      const fetchedData = await response.json()

      this.setState({
        projects: fetchedData.projects,
        apiStatus: apiStatusValue.success,
      })
    } else {
      this.setState({apiStatus: apiStatusValue.failure})
    }
  }

  renderLoadingView = () => (
    <div data-testid="loader" className="loader-container">
      <Loader type="ThreeDots" color="#328af2" height={50} width={50} />
    </div>
  )

  renderSuccess = () => {
    const {projects} = this.state

    return (
      <>
        <PaginationPage itemsPerPage={4} projects={projects} />
      </>
    )
  }

  onClickRetry = () => {
    this.getProjects()
  }

  renderFailureView = () => (
    <div className="failure-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/projects-showcase/failure-img.png"
        alt="failure view"
        className="failure-image"
      />
      <h1 className="failure-heading">Oops! Something Went Wrong</h1>
      <p className="failure-text">
        We cannot seem to find the page you are looking for
      </p>
      <button
        type="button"
        className="retry-button"
        onClick={this.onClickRetry}
      >
        Retry
      </button>
    </div>
  )

  renderViews = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusValue.inProgress:
        return this.renderLoadingView()
      case apiStatusValue.success:
        return this.renderSuccess()
      case apiStatusValue.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  onChangeSelect = event => {
    this.setState({categoryId: event.target.value}, this.getProjects)
  }

  render() {
    return (
      <div className="projects-main-container">
        <div className="projects-container">
          <h1 className="projects-heading">Projects</h1>
          <div className="app-container">
            <select className="select-container" onChange={this.onChangeSelect}>
              {categoriesList.map(eachItem => (
                <option key={eachItem.id} value={eachItem.id}>
                  {eachItem.displayText}
                </option>
              ))}
            </select>
            {this.renderViews()}
          </div>
        </div>
      </div>
    )
  }
}

export default App
