
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Detail from './components/Detail';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchMovies from './components/SearchMovies';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/">
            <Body />
          </Route>
          <Route exact path="/detail/:id">
            <Detail />
          </Route>
          <Route exact path="/search/:query">
            <SearchMovies />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
