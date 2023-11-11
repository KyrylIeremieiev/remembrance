import logo from './logo.svg';
import './App.css';
import Sky from './img/sky.jpg'
import forefront from './img/white.png'
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="App">
      <Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;1,400;1,500;1,600&family=Sometype+Mono:wght@400;500;600&family=Ubuntu:ital,wght@0,400;0,500;1,400;1,500&display=swap" rel="stylesheet"/>
      </Helmet>
      <img className="banner"src={Sky}></img>
      <div className='welcome__line'></div>
      <nav className='nav'>
        <ul className='nav__list'>
          <li className='nav__Item'>
            <button className='nav__button'>
              New
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
      <section className='welcome'>
        <h1 className='welcome__title'>Remembrance</h1>
        <button className='welcome__button'>Get Started</button>
      </section>
      
     {/*  <section className='transition'>Welcome To Remembrance</section> */}
      <section className='dashboard'></section>
    </div>
  );
}

export default App;
