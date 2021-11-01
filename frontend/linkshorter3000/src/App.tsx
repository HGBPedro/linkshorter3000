import indexImage from './Assets/indexImage.png'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Home from 'Views/Home'
import About from 'Views/About'
import Links from 'Views/Links'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/links'>
          <Links />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
