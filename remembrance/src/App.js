import logo from './logo.svg';
import './App.css';
import Sky from './img/sky.jpg'
import forefront from './img/white.png'

function App() {
  return (
    <div className="App">
      <img className="banner"src={Sky}></img>
      <section className='welcome'></section>
      <section className='dashboard'>Welcome To Remembrance</section>
    </div>
  );
}

export default App;
