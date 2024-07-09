import {Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import './App.css'

const App = () => (
  <div className="main-container">
    <Header />
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
  </div>
)

export default App
