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
    projectId: 23,
    category: 'REACT',
    categoryId: 'ALL',
    imageUrl:
      'https://res.cloudinary.com/dxs4gnnbs/image/upload/v1719038922/netfilx_1_gjmd4x.png',
    title: 'Movies App (Netflix/Amazon Prime Clone)',
    description:
      'Implemented responsive OTT platform app like Netflix/Amazon Clone where users can see movies like popular, trending, top-rated, and also can search movies and view specific movie details',
    websiteUrl: 'https://vgpmoviesapp.ccbp.tech',
  },
  {
    projectId: 24,
    category: 'REACT',
    categoryId: 'ALL',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png',
    title: 'Nxt Trendz (ECommerce Clone - Amazon, Flipkart)',
    description:
      'Implemented Nxt Trendz application which is a clone for ECommerce applications like Amazon, Flipkart where users can login and can see list of products with search, filters, sort by, etc..',
    websiteUrl: 'https://vgpcartfeature.ccbp.tech',
  },

  {
    projectId: 25,
    category: 'REACT',
    categoryId: 'ALL',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/logo-img.png',
    title: 'Jobby App',
    description:
      'Implemented Jobby App where users can log in and can see a list of jobs with search by Job title, filters based on Salary range and Employment type, etc',
    websiteUrl: 'https://vgpjobbyapp.ccbp.tech',
  },
  {
    projectId: 26,
    category: 'REACT',
    categoryId: 'ALL',
    imageUrl:
      'https://res.cloudinary.com/dxs4gnnbs/image/upload/v1720725106/cowin-logo_bczhiy.png',
    title: 'Cowin Dashboard',
    description:
      'Implemented Cowin Dashboard by using the third party package recharts and can see the fetched data from API call',
    websiteUrl: 'https://vpgcowindata.ccbp.tech',
  },
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
      'Developed a responsive website of VR products where users can see a list of products, detailed information about a product and trending blogs, contact us info.',
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
    imageUrl:
      'https://res.cloudinary.com/dxs4gnnbs/image/upload/v1720683031/todo_list_l63zrl.avif',
    title: 'Todo Application',
    description:
      'Make a list of tasks you need to complete or things that you want to do',
    websiteUrl: 'https://vgptodosapp.ccbp.tech',
  },
  {
    project: 13,
    category: 'DYNAMIC',
    categoryId: 'ALL',
    imageUrl:
      'https://nkb-backend-otg-media-static.s3.ap-south-1.amazonaws.com/ccbp-dynamic-webapps/wiki-logo-img.png',
    title: 'Wikipedia Search',
    description:
      'Get a search site by an API based dynamic web application that generates a list of search sites based on the user input',
    websiteUrl: 'https://vgpwikisearch.ccbp.tech',
  },
  {
    project: 14,
    category: 'DYNAMIC',
    categoryId: 'ALL',
    imageUrl:
      'https://res.cloudinary.com/dxs4gnnbs/image/upload/v1720681907/countries_search_w0oh7k.jpg',
    title: 'Countries Search',
    description:
      'Get a country by an API based dynamic web application that generates a list of countries based on the user input',
    websiteUrl: 'https://vgpcout3search.ccbp.tech',
  },
  {
    project: 15,
    category: 'DYNAMIC',
    categoryId: 'ALL',
    imageUrl:
      'https://res.cloudinary.com/dxs4gnnbs/image/upload/v1720682265/bookmark_nnmxb3.png',
    title: 'Bookmark Maker',
    description: 'Book Your Favorite Sites',
    websiteUrl: 'https://vgpbookmark.ccbp.tech',
  },
  {
    projectId: 16,
    category: 'DYNAMIC',
    categoryId: 'ALL',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/projects-d3-img.png',
    title: 'Speed Typing Test',
    description:
      'Speed Typing Test Application is capable of calculating the time to type the randomly generated quote.',
    websiteUrl: 'https://vgptypingspeed.ccbp.tech',
  },
  {
    projectId: 17,
    category: 'DYNAMIC',
    categoryId: 'ALL',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/projects-d1-img.png',
    title: 'Random Joke Page',
    description:
      'Random Joke Page is an API-based dynamic Web Application that generates a new joke.',
    websiteUrl: 'https://vgprandomjoke.ccbp.tech',
  },
  {
    projectId: 18,
    category: 'DYNAMIC',
    categoryId: 'ALL',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/projects-d2-img.png',
    title: 'Sizing An Image',
    description:
      'This is a dynamic web application capable of adjusting the size of an element using DOM manipulations.',
    websiteUrl: 'https://vgpimagesizing.ccbp.tech',
  },
  {
    projectId: 19,
    category: 'DYNAMIC',
    categoryId: 'ALL',
    imageUrl:
      'https://assets.ccbp.in/frontend/dynamic-webapps/library-management-bg.png',
    title: 'Online Book Store',
    description:
      'Developed online bookstore which shows popular books for given words, a user also can limit the number of books he would like to see',
    websiteUrl: 'https://vgplibrarymana.ccbp.tech',
  },
  {
    projectId: 20,
    category: 'DYNAMIC',
    categoryId: 'ALL',
    imageUrl:
      'https://res.cloudinary.com/dxs4gnnbs/image/upload/v1720680420/chatbotiamge_cfxmmm.jpg',
    title: 'Chatbot',
    description: 'Be a friendly interact with our chatbot.',
    websiteUrl: 'https://vgpchatbotapp.ccbp.tech',
  },
  {
    projectId: 21,
    category: 'DYNAMIC',
    categoryId: 'ALL',
    imageUrl:
      'https://res.cloudinary.com/dxs4gnnbs/image/upload/v1720680320/sandtimerimage_kpepdx.jpg',
    title: 'Peace Timer',
    description: 'Relax a bit with our user friendly peace timer website',
    websiteUrl: 'https://vgppeacetimer.ccbp.tech',
  },
  {
    projectId: 22,
    category: 'DYNAMIC',
    categoryId: 'ALL',
    imageUrl:
      'https://assets.ccbp.in/frontend/dynamic-webapps/time-converter-bg.png',
    title: 'Time Converter',
    description:
      'Enter hours and minutes values to convert into seconds with our time converter website',
    websiteUrl: 'https://vgptimeconvert.ccbp.tech',
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
          <h1 className="portfolio-heading">Portfolio</h1>
          <h1 className="projects-heading">Projects I have done</h1>
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
