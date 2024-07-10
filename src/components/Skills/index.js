import './index.css'

const skillsList = [
  {
    id: 1,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/tech-era/html-logo-img.png',
    name: 'HTML',
    description:
      'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript. Web browsers receive HTML documents from a web server or local storage and render the documents into multimedia web pages.',
  },
  {
    id: 2,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/tech-era/css-logo-img.png',
    name: 'CSS',
    description:
      'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript. It is designed to enable the separation of presentation and content, including layout, colors, and fonts. This separation can improve content accessibility etc.',
  },
  {
    id: 3,
    imageUrl:
      'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-skills-bootstrap-img.png',
    name: 'Bootstrap',
    description:
      'Bootstrap is a widely-used open-source framework for front-end web development, initially created by Twitter. It provides a comprehensive set of tools for building responsive and mobile-first websites quickly and efficiently.',
  },
  {
    id: 4,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/tech-era/flexbox-logo-img.png',
    name: 'Flexbox',
    description:
      'The Flexbox Layout (Flexible Box) module aims at providing a more efficient way to layout, align and distribute space among items in a container, even when their size is unknown. The main idea behind the flex layout is to give the container the ability to alter its items width/height (and order) to best fill the available space.',
  },
  {
    id: 5,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/tech-era/javascript-logo-img.png',
    name: 'Javascript',
    description:
      'JavaScript often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object orientation, and first-class functions. Alongside HTML and CSS, JavaScript is one of the core technologies of the World Wide Web.',
  },
  {
    id: 6,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/tech-era/python-img.png',
    name: 'Python',
    description:
      'Python is an interpreted high-level general-purpose programming language. Its design philosophy emphasizes code readability with its use of significant indentation. Its language constructs as well as its object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects. Python is dynamically typed and garbage-collected.',
  },
  {
    id: 7,
    name: 'Node JS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/tech-era/node.js-logo-img.png',
    description:
      "Node JS is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command-line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser.",
  },
  {
    id: 8,
    name: 'React Js',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/tech-era/react-logo-img.png',
    description:
      'React JS is a JavaScript library used for building reusable UI components. According to React official documentation, React is a library for building composable user interfaces. It encourages the creation of reusable UI components, which present data that changes over time. React abstracts away the DOM from you, offering a simpler programming model and better performance.',
  },
  {
    id: 9,
    name: 'Express JS',
    imageUrl:
      'https://res.cloudinary.com/dxs4gnnbs/image/upload/v1720602036/express-js-logo_xor2cn.png',
    description:
      'Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It is known for its simplicity and performance, making it a popular choice for building web servers and APIs.',
  },
  {
    id: 10,
    name: 'SQL',
    imageUrl:
      'https://res.cloudinary.com/dxs4gnnbs/image/upload/v1720601852/azure-sql-logo-3AE930D2AF-seeklogo.com_c0kipw.png',
    description:
      'SQL, or Structured Query Language, is a standard programming language specifically designed for managing and manipulating relational databases. It is widely used in various applications for querying, updating, and managing data stored in databases.',
  },
  {
    id: 11,
    name: 'Git',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/tech-era/git-logo-img.png',
    description:
      'Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development. Its goals include speed, data integrity, and support for distributed, non-linear workflows. Git is free and open-source software distributed under GNU General Public License Version 2.',
  },
  {
    id: 12,
    name: 'Servicenow',
    imageUrl:
      'https://res.cloudinary.com/dxs4gnnbs/image/upload/v1720602395/servicenow-logo_ltgk19.png',
    description:
      'ServiceNow is a cloud-based platform designed to support IT service management (ITSM) and automate various business processes. It is widely used by organizations to streamline operations, improve efficiency, and enhance service delivery',
  },
]

const Skills = () => (
  <div className="skills-app-container">
    <div className="skills-container">
      <h1 className="skills-heading">Skills:</h1>
      <ul className="skills-card-container">
        {skillsList.map(eachSkill => (
          <li className="card" key={eachSkill.id}>
            <img
              src={eachSkill.imageUrl}
              className="skill-logo"
              alt="skill logo"
            />
            <div className="card__content">
              <p className="card__title">{eachSkill.name}</p>
              <p className="card__description">{eachSkill.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
)

export default Skills
