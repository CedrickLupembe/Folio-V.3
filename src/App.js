import GlobalStyle from './components/styles/globalStyles';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Featured from './components/Featured';
import Archive from './components/Archive';
import Footer from './components/Footer';
import Seo from './components/Medias/Seo'


function App() {
  
  return (
    <div className="App">

      
     <Seo />

     <GlobalStyle/>
     <Navbar />
     <Hero />
     <Intro />
     <Featured />
     <Archive />
     <Footer />
     
     
     

    </div>
  );
}

export default App;
