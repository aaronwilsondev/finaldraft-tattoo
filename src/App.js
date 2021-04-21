import './App.css';

import Header from "../src/components/header/header.component.jsx";
import { Switch, Route } from "react-router-dom";
import HomePage from './pages/homepage/homepage.component';
import Footer from './components/footer/footer.component';
import FaqPage from './pages/faq/faq.component';
import GalleryPage from "./pages/gallery/gallery.component.jsx";

function App() {
  return (
    <div className="App">
  
    <Header/>
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/gallery" component={GalleryPage}/>
      <Route exact path="/faq" component={FaqPage} />
      <Route exact to="/contact"/>
    </Switch>
    <Footer/>
    </div>
  );
}

export default App;
