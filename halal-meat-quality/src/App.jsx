import './App.scss'
import Hero from './Components/Hero/Hero';
import Mission from './Components/Mission/Mission';
import NavBar from './Components/NavBar/NavBar'

const App = () => {
  return (
    <div>
      <section id="page d'accueil">
    <NavBar />
    <Hero />
    </section>
    <section id='service'>
     <Mission />
    </section>
    </div>
  );
}

export default App;
