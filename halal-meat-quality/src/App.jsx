import './App.scss'
import Hero from './Components/Hero/Hero';
import Mission from './Components/Mission/Mission';
import NavBar from './Components/NavBar/NavBar'
import Article from './Components/Article/Article';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';

const App = () => {
  return (
    <div>
      <header id="page-d-accueil">
        <NavBar />
        <section id='hero'>
        <Hero type="hero"/>
        </section>
        
      </header>
      <main>
        <section id='service'>
          <Mission type="services"/>
        </section>
        <section id='article'>
          <Article type="article"/>
        </section>
      </main>
      <section id='contact'>
          <Contact />
        </section>
        <footer>
        <section id='footer'>
      <Footer type='footer'/>
        </section>
      </footer>
    </div>
  );
}

export default App;
