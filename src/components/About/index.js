import './index.css'

const About = () => (
  <div className="about-me-section">
    <div className="about-container">
      <img
        src="https://res.cloudinary.com/dxs4gnnbs/image/upload/v1720509698/sampe_pic_of_mine_mjw8cj.jpg"
        className="desktop-about-me-image"
        alt="about me"
      />

      <div className="mobile-about-me-container">
        <h1 className="about-me-facts-heading">Facts</h1>
        <h1 className="about-heading">About me</h1>
        <img
          src="https://res.cloudinary.com/dxs4gnnbs/image/upload/v1720509698/sampe_pic_of_mine_mjw8cj.jpg"
          className="mobile-about-me-image"
          alt="about me"
        />
        <p className="about-me-description">
          My name is Vamshi Gundepangu. I have strong skills in the MERN stack
          (MongoDB, Express.js, React, Node.js), gained through training at
          Nxtwave, where I developed full-stack web applications.{' '}
        </p>
        <p className="about-me-description">
          Additionally, I have one year of experience as a ServiceNow developer,
          working on application development, customization, and workflow
          automation in modules like ITSM, ITOM, and ITBM. My expertise spans
          both web development and IT service management.
        </p>
      </div>
    </div>
  </div>
)

export default About
