import logo from './logo.svg';
import './App.css';
import Sky from './img/sky.jpg'
import darkSky from './img/nightSky.jpg'
import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';


function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const currentPosition = window.scrollY;
    setScrollPosition(currentPosition);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="App">
      <Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;1,400;1,500;1,600&family=Sometype+Mono:wght@400;500;600&family=Ubuntu:ital,wght@0,400;0,500;1,400;1,500&display=swap" rel="stylesheet"/>
      <script src="https://kit.fontawesome.com/1a0fbdd901.js" crossorigin="anonymous"></script>
      </Helmet>
      <img src={Sky} className={`banner ${scrollPosition > 60 ? 'darken' : ''}`}></img>
      <nav className={`nav fadein ${scrollPosition > 60 ? 'scrolled' : ''}`}>
        <figure className='nav__logo'>Kyrylo Ieremieiev.</figure>
        <ul className='nav__list'>
          <li className='nav__Item'>
            <button className='nav__button'>
              New
            </button>
          </li>
          <li className='nav__Item'>
            <button className='nav__button'>
              About
            </button>
          </li>
          <li className='nav__Item'>
            <button className='nav__button'>
              Contact
            </button>
          </li>
          <li className='nav__Item'>
            <button className='nav__button'>
              Login
            </button>
          </li>
        </ul>
      </nav>
      <section className='welcome fadein'>      
          <h1 className='welcome__title'>Remembrance</h1>
        
        <button className='welcome__button'>Get Started</button>

      </section>
      
     {/*  <section className='transition'>Welcome To Remembrance</section> */}
      <section className='dashboard'>
        <arcile className='dashboard__article'>
          <h2 className='dashboard__title'>About</h2>
          <p className='dashboard__about'>I've built a simple site to make and keep track of notes. You can use it for passwords, to keep track of meetings, or whatever you want.</p>
        </arcile>
        <arcile className='dashboard__article dashboard__article--right'>
          <h2 className='dashboard__title dashboard__title--right'>Get Started</h2>
          <p className='dashboard__about dashboard__about--right'>Get Started by clicking <a href='https://colorhunt.co/' className='dashboard__link'>here</a></p>
        </arcile>

        
      </section>
      <section className='contact'>
        <ul className='contact__logos'>
          <li className='contact__logo'>
            <i class="fa-brands fa-github"></i>
          </li>
          <li className='contact__logo'>
            <i class="fa-brands fa-linkedin"></i>
          </li>
        </ul>
        <h3>kyrylo.ieremieiev@gmail.com</h3>
      </section>
    </div>
  );
}

export default App;
