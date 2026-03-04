import reactImg from "../../assets/Content/reactjs.jpg";
import { Core_concept  } from "./data.jsx";
import "./Content.css"; 

const reactDescription = ['Fundamental', 'core' ,'Important', 'Crucial']
function getRandomInt(max){
  return Math.floor(Math.random() * (max + 1));
}
function CoreConcept({image,title,description}){
  return (
    <li className="core-concept">
      <img src={image} alt={title}/>
      <h2>{title}</h2>
      <p>{description}</p>
    </li>
  )
}

function Header() {
  const description = reactDescription[getRandomInt(3)]
  return (
    <div className="page-wrapper">        
      <div className="header-container"> 
        <header>
          <img src={reactImg} alt="stylized-atom" width={150} />
          <h1>React Essentials</h1>
          <p>
            {description} React Concepts you will use for almost any app you are going to build.
          </p>
        </header>

        <main>
          <h2>Time to Get Started</h2>
          <ul>
            {Core_concept.map((Content, index) => (
              <CoreConcept
              key={index}
              {...Content}
              />
            ))}
          </ul>
        </main>
      </div>
    </div>
  );
}

export default Header;