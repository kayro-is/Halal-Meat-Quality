import './App.scss'
import Hero from './Components/Hero/Hero';
import Mission from './Components/Mission/Mission';
import NavBar from './Components/NavBar/NavBar'
import Article from './Components/Article/Article';

const App = () => {
  return (
    <div>
      <header id="page-d-accueil">
        <NavBar />
        <Hero />
      </header>
      <main>
        <section id='service'>
          <Mission type="services"/>
        </section>
        <section id='article'>
          <Article type="article"/>
        </section>
      </main>
    </div>
  );
}

export default App;
