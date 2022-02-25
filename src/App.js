import './App.css';
import Footer from './Footer';
import Contact from './Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import BLOG2 from './BLOG2';
import Research from './Research';
import Home from './Home';
import { Anchor } from 'antd';
const { Link } = Anchor;
function App () {

  return (
    <>


      <Router>
        {/* <Navbar /> */}
        <Switch>
          <Route exact path='/' render={() => {
            return (
              <>
                <Home />
              </>
            )
          }}></Route>
          <Route exact path='/contact' render={() => {
            return (
              <>
                <Contact />
              </>
            )
          }} ></Route>
          <Route exact path='/blog' render={() => {
            return (
              <>
                <BLOG2/>
              </>
            )
          }}></Route>
          <Route exact path='/research' render={() => {
            return (
              <>
                <Research />
              </>

            )
          }}></Route>
        </Switch>
        <Footer />
      </Router>

    </>
  );
}

export default App;
