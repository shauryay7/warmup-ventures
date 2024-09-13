import React, { useState, useEffect } from "react";
import "./index.css";
import headerImage1 from "/Users/shauryayaduvanshi/new-app/src/2.avif";
import headerImage2 from "/Users/shauryayaduvanshi/new-app/src/1.jpeg";
import headerImage3 from "/Users/shauryayaduvanshi/new-app/src/3.jpeg";
import columnImage1 from "/Users/shauryayaduvanshi/new-app/src/33.gif";
import columnImage2 from "/Users/shauryayaduvanshi/new-app/src/22.gif";
import columnImage3 from "/Users/shauryayaduvanshi/new-app/src/11.gif";
import c1 from "/Users/shauryayaduvanshi/new-app/src/111.png";
import logo from "/Users/shauryayaduvanshi/new-app/src/logo.png";
import insta from "/Users/shauryayaduvanshi/new-app/src/instagram.png";
import twitter from "/Users/shauryayaduvanshi/new-app/src/twitter.png";
import face from "/Users/shauryayaduvanshi/new-app/src/facebook.png";
import pfp from "/Users/shauryayaduvanshi/new-app/src/pfp.jpeg";


const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const scrollToPosition = (position) => {
  window.scrollTo({ top: position, behavior: "smooth" });
};

const HeaderBox = () => {
  const images = [headerImage1, headerImage2, headerImage3];
  const descriptions = [
    "Description for Image 1",
    "Description for Image 2",
    "Description for Image 3",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransparent, setIsTransparent] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const nextImage = () => {
    setIsAnimating(true); 
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsAnimating(false); 
    }, 1000); 
  };

  const previousImage = () => {
    setIsAnimating(true); 
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setIsAnimating(false); 
    }, 1000);
  };

  const sendMail = () => {
    window.location.href =
      "mailto:someone@example.com?subject=Subject&body=Body";
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsTransparent(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextImage();
    }, 6000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className={`header-box ${isTransparent ? "transparent" : ""}`}>
        <div className="flex-container">
          <h1 className="funts">Company<span className="fancy2">Name</span></h1>
          <div className="flex2-container">
            <button className="button" onClick={scrollToTop}>
              Home
            </button>
            <button className="button" onClick={() => scrollToPosition(10000)}>
              About us
            </button>
            <button className="button" onClick={() => scrollToPosition(1200)}>
              Services
            </button>
            <button className="button" onClick={() => scrollToPosition(1990)}>
              Deals
            </button>
            <button className="button" onClick={() => scrollToPosition(2800)}>
              Our people
            </button>
            <button className="button" onClick={() => scrollToPosition(2000)}>
              Resources
            </button>
          </div>
          <div className="hamburger" onClick={toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className={`dropdown-menu ${isMenuOpen ? "show" : ""}`}>
          <button className="button" onClick={scrollToTop}>
            Home
          </button>
          <button className="button" onClick={() => scrollToPosition(10000)}>
            About us
          </button>
          <button className="button" onClick={() => scrollToPosition(1000)}>
            Services
          </button>
          <button className="button" onClick={() => scrollToPosition(1500)}>
            Deals
          </button>
          <button className="button" onClick={() => scrollToPosition(2000)}>
            Our people
          </button>
          <button className="button" onClick={() => scrollToPosition(1500)}>
            Resources
          </button>
        </div>
      </div>
      <div className="image-container">
        <div className="center">{descriptions[currentImageIndex]}</div>
        <button className="prev-image-button" onClick={previousImage}>
          Back
        </button>
        <img
          src={images[currentImageIndex]}
          alt="Header"
          className={`header-image ${isAnimating ? "fade" : ""}`}
        />
        <button className="next-image-button" onClick={nextImage}>
          Next
        </button>
      </div>
      <div className="background2">
      <div className="flex3-container">
        <button className="buttons">
          400+
          <p>Capital Raised</p>
        </button>
        <button className="buttons">
          400+
          <p>Deals Closed</p>
        </button>
        <button className="buttons">
          400+
          <p>Clients</p>
        </button>
        <button className="buttons">
          400+
          <p>Investor Relations</p>
        </button>
      </div>
      </div>
      <div className="background-image">
      <div>
        <h1 className="whtdowedo">What Do We Do</h1>
      </div>
      <div className="column">
        <div className="column-item">
          <h1>Technology</h1>
          <img src={columnImage1} alt="Technology" className="column-image" />
        </div>
        <div className="column-item">
          <h1>Climate</h1>
          <img src={columnImage2} alt="Climate" className="column-image" />
        </div>
        <div className="column-item">
          <h1>Financial</h1>
          <img
            src={columnImage3}
            alt="Financial Inclusion"
            className="column-image"
          />
        </div>
      </div>
      </div>
      <div className="background3">
      <h1 className="p11">Latest <span className="fancy">Deals</span></h1>
  <div class="container">
        <div class="box">
    <div class="imgBx">
      <img src={c1}/>
    </div>
    <div class="content">
      <div>
        <h2>Deal1</h2>
        <p>Description 
        </p>
      </div>
    </div>
  </div>
  <div class="box">
    <div class="imgBx">
      <img src={c1}/>
    </div>
    <div class="content">
      <div>
        <h2>Deal 2</h2>
        <p>Description
        </p>
      </div>
    </div>
  </div>
  <div class="box">
    <div class="imgBx">
      <img src={c1}/>
    </div>
    <div class="content">
      <div>
        <h2>Deal 3</h2>
        <p>Description
        </p>
      </div>
    </div>
  </div>
  
  <div class="box">
    <div class="imgBx">
      <img src={c1}/>
    </div>
    <div class="content">
      <div>
        <h2>Deal 4</h2>
        <p>Description
        </p>
      </div>
    </div>
  </div>
</div>
</div>
      <div className="background4">
      <div>
      <h1 className="p12">Our <span className="fancy2">People</span></h1>
      </div>
      <div className="column">
        <div className="column-item">
          <h1>peop1</h1>
          <img src={pfp} alt="Technology" className="image2" />
          <p className="p13">
            Using general descriptions will help you describe someone without
            having to go into specific details. For example, you can describe
            someone’s appearance by talking about their gender, height, weight,
            age, hair color, or eye color. However, remember that some people
            can be sensitive about these descriptions (especially weight and
            age), so keep this in mind when you need to describe people.
          </p>
        </div>
        <div className="column-item">
          <h1>peop2</h1>
          <img src={pfp} alt="Climate" className="image2" />
          <p className="p13">
            Using general descriptions will help you describe someone without
            having to go into specific details. For example, you can describe
            someone’s appearance by talking about their gender, height, weight,
            age, hair color, or eye color. However, remember that some people
            can be sensitive about these descriptions (especially weight and
            age), so keep this in mind when you need to describe people.
          </p>
        </div>
        <div className="column-item">
          <h1>peop3</h1>
          <img src={pfp} alt="Financial Inclusion" className="image2" />
          <p className="p13">
            Using general descriptions will help you describe someone without
            having to go into specific details. For example, you can describe
            someone’s appearance by talking about their gender, height, weight,
            age, hair color, or eye color. However, remember that some people
            can be sensitive about these descriptions (especially weight and
            age), so keep this in mind when you need to describe people.
          </p>
        </div>
      </div>
      </div>
      <div className="next-button-container"></div>
      <div className="flex-container4">
        <img src={logo} className="logo" alt="company"  onClick={() => scrollToPosition(0)}/>
        <h4 className="number-comp">+91 00000000000</h4>
        <button className="mail-button" onClick={sendMail}>
          someone@example.com
        </button>
        <div className="flex-buttons-container">
          <button className="mail-button">
            <img src={insta} className="buttons-logo" alt="Instagram" />
          </button>
          <button className="mail-button">
            <img src={face} className="buttons-logo" alt="Facebook" />
          </button>
          <button className="mail-button">
            <img src={twitter} className="buttons-logo" alt="Twitter" />
          </button>
        </div>
      </div>
      <div className="column-end">
        <div className="column-item-end">
          <h2 className="wheat-font">Resources</h2>
          <button className="end-text">Career</button>
          <button className="end-text">Blog Posts</button>
          <button className="end-text">Press Release</button>
          <button className="end-text">Downloads</button>
        </div>
        <div className="column-item-end">
          <h2 className="wheat-font">Locations</h2>
          <h3 className="add-text">
            Unitus Capital, Kaiser-E-Hind, Second Floor, No. 9/3, Richmond Road,
            Bangalore – 560 025 – INDIA
          </h3>
          <h3 className="add-text">
            Unitus Capital, Kaiser-E-Hind, Second Floor, No. 9/3, Richmond Road,
            Bangalore – 560 025 – INDIA
          </h3>
        </div>
        <div className="column-item-end">
          <h2 className="wheat-font">Newsletter</h2>
          <h3 className="end-text">Join our Weekly Newsletter!</h3>
        </div>
      </div>
      <h5 className="copyright">© Copyright</h5>
    
    </>
    
  );
};

export default HeaderBox;
