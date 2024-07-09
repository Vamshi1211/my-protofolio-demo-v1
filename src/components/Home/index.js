import './index.css'

const Home = () => (
  <div className="home-bg-container">
    <div className="home-card-container">
      <img
        src="https://res.cloudinary.com/dxs4gnnbs/image/upload/v1720507279/my_protofolio_image-removebg-preview_1_a81suc.png"
        className="navbar-mobile-image"
        alt="navbar"
      />
      <div className="home-description-container">
        <h1 className="navbar-heading">
          Hey, I am <span style={{color: '#4b6cc1'}}>Vamshi Gundepangu</span>
        </h1>
        <p className="navbar-paragraph"> I am a Fullstack Developer & Mentor</p>
        <button type="button" className="navbar-button">
          Contact Me
        </button>
      </div>
      <img
        src="https://res.cloudinary.com/dxs4gnnbs/image/upload/v1720507279/my_protofolio_image-removebg-preview_1_a81suc.png"
        className="navbar-desktop-image"
        alt="navbar"
      />
    </div>
  </div>
)

export default Home
