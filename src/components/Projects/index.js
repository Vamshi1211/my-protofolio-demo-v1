import {Component} from 'react'
import PaginationPage from '../PaginationPage'
import './index.css'

const categoriesList = [
  {id: 'ALL', displayText: 'All'},
  {id: 'STATIC', displayText: 'Static'},
  {id: 'RESPONSIVE', displayText: 'Responsive'},
  {id: 'DYNAMIC', displayText: 'Dynamic'},
  {id: 'REACT', displayText: 'React'},
]

const projectsList = [
  {
    projectId: 0,
    category: 'STATIC',
    categoryId: 'ALL',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/projects-s3-img.png',
    title: 'Music Page',
    description:
      'The music page enables the users to browse through the images of all-time favorite music albums.',
    websiteUrl: 'https://vgpmusicpage.ccbp.tech',
  },
  {
    projectId: 1,
    category: 'STATIC',
    categoryId: 'ALL',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/projects-s4-img.png',
    title: 'Tourism Website',
    description:
      'A tourism website enables the user to browse through the images of popular destinations.',
    websiteUrl: 'https://vgptourismsite.ccbp.tech',
  },
  {
    projectId: 2,
    category: 'STATIC',
    categoryId: 'ALL',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/projects-s1-img.png',
    title: 'Advanced Technologies',
    description:
      'A website that gives you a basic understanding of Advanced Technologies.',
    websiteUrl: 'https://vgpadvtech.ccbp.tech',
  },
  {
    projectId: 3,
    category: 'STATIC',
    categoryId: 'ALL',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/projects-s2-img.png',
    title: 'Happy Meals',
    description: 'Discover the best foods in over 1,000 restaurants.',
    websiteUrl: 'https://vgphappymeals.ccbp.tech',
  },
  {
    projectId: 4,
    category: 'STATIC',
    categoryId: 'ALL',
    imageUrl:
      'https://res.cloudinary.com/dxs4gnnbs/image/upload/v1663175156/Cricketbatball_ewzhn8.jpg',
    title: 'Cricket Website',
    description:
      'A website to showcase the highest scores by few Indian players.',
    websiteUrl: 'https://vgpcricwebsite.ccbp.tech',
  },
  {
    id: 5,
    category: 'STATIC',
    categoryId: 'ALL',
    imageUrl:
      'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/book-apj-img.png',
    title: 'Popular Books',
    description: 'Discover the best books in over 1000 books',
    websiteUrl: 'https://vgppopularbook.ccbp.tech',
  },
  {
    projectId: 6,
    category: 'STATIC',
    categoryId: 'ALL',
    imageUrl:
      'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/podcasts-bg.png',
    title: 'Podcast Page',
    description:
      'The podcast page enables the users to browse through the images of all-time favorite podcasts.',
    websiteUrl: 'https://vgppodcastsite.ccbp.tech',
  },
  {
    projectId: 7,
    category: 'STATIC',
    categoryId: 'ALL',
    imageUrl:
      'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/conference-img.png',
    title: 'Conference Page',
    description:
      'The conference page enables the users to browse through the conference page.',
    websiteUrl: 'https://vgpconference.ccbp.tech',
  },
  {
    projectId: 8,
    category: 'RESPONSIVE',
    categoryId: 'ALL',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/projects-r4-img.png',
    title: 'VR Website',
    description:
      'VR Website enables users to explore AR and VR Products and Industry happenings.',
    websiteUrl: 'https://vgpvrwebsite.ccbp.tech',
  },
  {
    projectId: 9,
    category: 'RESPONSIVE',
    categoryId: 'ALL',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/projects-r2-img.png',
    title: 'Food Munch',
    description: 'Food Much Website is a user-centric food tech website.',
    websiteUrl: 'https://vgpfoodmunch.ccbp.tech',
  },
  {
    projectId: 10,
    category: 'RESPONSIVE',
    categoryId: 'ALL',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/projects-r3-img.png',
    title: 'Portfolio',
    description:
      'A portfolio is the best alternative for a resume to showcase your skills to the digital world.',
    websiteUrl: 'https://vgpdemoproto.ccbp.tech',
  },
  {
    projectId: 11,
    category: 'RESPONSIVE',
    categoryId: 'ALL',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/projects-r1-img.png',
    title: 'E-commerce',
    description:
      'A E-commerce Website is a user-centric e-commerce tech website',
    websiteUrl: 'https://vgpecomresponse.ccbp.tech',
  },
  {
    projectId: 12,
    category: 'DYNAMIC',
    categoryId: 'ALL',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/projects-d3-img.png',
    title: 'Speed Typing Test',
    description:
      'Speed Typing Test Application is capable of calculating the time to type the randomly generated quote.',
    websiteUrl: 'https://vgptypingspeed.ccbp.tech',
  },
  {
    projectId: 13,
    category: 'DYNAMIC',
    categoryId: 'ALL',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/projects-d1-img.png',
    title: 'Random Joke Page',
    description:
      'Random Joke Page is an API-based dynamic Web Application that generates a new joke.',
    websiteUrl: 'https://vgprandomjoke.ccbp.tech',
  },
  {
    projectId: 14,
    category: 'DYNAMIC',
    categoryId: 'ALL',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/projects-d2-img.png',
    title: 'Sizing An Image',
    description:
      'This is a dynamic web application capable of adjusting the size of an element using DOM manipulations.',
    websiteUrl: 'https://vgpimagesizing.ccbp.tech',
  },
  {
    projectId: 15,
    category: 'DYNAMIC',
    categoryId: 'ALL',
    imageUrl:
      'https://assets.ccbp.in/frontend/dynamic-webapps/library-management-bg.png',
    title: 'Library Management',
    description:
      'Get a random books by an API based dynamic Web Application that generates a list of popular books based on country',
    websiteUrl: 'https://vgplibrarymana.ccbp.tech',
  },
]

// const apiStatusValue = {
//   initial: 'INITIAL',
//   inProgress: 'INPROGRESS',
//   failure: 'FAILURE',
//   success: 'SUCCESS',
// }

class App extends Component {
  state = {
    categoryId: categoriesList[0].id,
  }

  onChangeSelect = event => {
    this.setState({categoryId: event.target.value})
  }

  render() {
    const {categoryId} = this.state

    const filteredData = projectsList.filter(
      eachItem =>
        eachItem.category === categoryId || eachItem.categoryId === categoryId,
    )

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
            <PaginationPage itemsPerPage={4} projects={filteredData} />
          </div>
        </div>
      </div>
    )
  }
}

export default App
