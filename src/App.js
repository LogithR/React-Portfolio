import Content from './Components/Content';
import Header from './Components/Header';
import Footer from './Components/Footer';
import YoutubeEmbed from './Components/YoutubeEmbed';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import Login from './Components/Login';



function App() {
  
  return (
   <div> my
    <Navbar/>
    <Home />
    <Header />
    <Content />
    <YoutubeEmbed />  
    <Blog /> 
    
    <br></br>
    <Contact />
    <Footer />
   </div>
    
  );
}

export default App;
