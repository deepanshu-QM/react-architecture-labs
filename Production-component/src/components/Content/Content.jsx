import reactImg from "../../assets/Content/reactjs.jpg";
import "./Content.css"; 

function Header() {
  return (
    <div className="page-wrapper">        
      <div className="header-container"> 
        <header>
          <img src={reactImg} alt="stylized-atom" width={150} />
          <h1>React Essentials</h1>
          <p>
            Fundamental React Concepts you will use for almost any app you are going to build.
          </p>
        </header>

        <main>
          <h2>Time to Get Started</h2>
        </main>
      </div>
    </div>
  );
}

export default Header;