import headshot from './images/headshot.jpg';
import heroBackground from './images/hero-background.jpg';
import './App.scss';

import Header from './Header.js';
import HeroImage from './HeroImage.js';
import Article from './Article.js';
import Footer from './Footer.js';

function App() {
  return (
    <div className='app'>
      <Header />
      <HeroImage imgSrc={heroBackground} />
      <Article imgSrc={headshot} />
      <Footer />
    </div>
  );
}

export default App;
