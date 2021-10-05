import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import Contact from './components/Contact/Contact';
import Services from './components/Services/Services';
import About from './components/About/About';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import Details from './components/Details/Details';

// App component with all route
function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/cart">
            <Cart></Cart>
          </Route>
          <Route path="/details">
            <Details></Details>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
