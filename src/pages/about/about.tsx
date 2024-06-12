import image from "../../assets/images/image.svg";
import "./about.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="header-container">
        <header className="header">
          <div className="logo">Site name</div>
          <nav className="nav">
            <text className="navButtonText">Page</text>
            <text className="navButtonText">Page</text>
            <text className="navButtonText">Page</text>
            <button className="navButton">Button</button>
          </nav>
        </header>
      </div>
      <div className="content-container">
        <div className="text-content">
          <h1>About</h1>
          <p className="subheading">
            Subheading for description or instructions
          </p>
          <div className="body-text">
            <p>
              Body text for your whole article or post. We’ll put in some lorem
              ipsum to show how a filled-out page might look:
              <br />
              <br />
              Excepteur efficient emerging, minim veniam anim aute carefully
              curated Ginza conversation exquisite perfect nostrud nisi
              intricate Content. Qui international first-class nulla ut.
              Punctual adipisicing, essential lovely queen tempor eiusmod irure.
              Exclusive izakaya charming Scandinavian impeccable aute quality of
              life soft power pariatur Melbourne occaecat discerning. Qui
              wardrobe aliquip, et Porter destination Toto remarkable officia
              Helsinki excepteur Basset hound. Zürich sleepy perfect
              consectetur.
            </p>
          </div>
        </div>
        <div className="image-content">
          <img src={image} alt="This is an image" />
        </div>
      </div>
    </div>
  );
};

export default About;
