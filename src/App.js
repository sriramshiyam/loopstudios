import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';
import Grid from './components/Grid';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Content />
      <Grid />
      <Footer />
      <div class="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="blank"
        >Frontend Mentor</a
        >. Coded by
        <a href="https://github.com/sriramshiyam" target="blank">Sriram</a>.
      </div>
    </>
  );
}

export default App;
