import './App.css';
import Header from './components/Header';
import { ToastContainer, toast } from 'react-toastify';
import Home from './components/Home';
import Nav from './components/Nav';
import Books from './components/Books';
import Footer from './components/Footer';
import AddBook from './components/AddBook';
import Edit from './components/Edit';
import About from './components/About';
import {
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
    <Nav />
    <Switch>
              <div class="container">
              <Route exact path="/" >
                <Home />
              </Route>
              <Route exact path="/books" >
                <Books />
              </Route>
              <Route exact path="/add">
                <AddBook />
              </Route>
              <Route exact path="/edit/:id">
                <Edit />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              </div>
              
          </Switch>
      <Footer />
</>
  );
}

export default App;
