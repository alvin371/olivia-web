import logo from './logo.svg';
import { Route, Router, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Home from './Pages/index'
// import ErrorPage from './component/js/ErrorPage';
import { useLocation } from 'react-router';
import inspirasi from './Pages/inspirasi';
import panduan from './Pages/panduan';
import Error from './Pages/Error'
import Explore from './Pages/explore';
function App() {
  function NoMatch() {
    let location = useLocation();
    return (
      < Error />
    );
  }
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/inspirasi" component={inspirasi} />
        <Route path="/panduan" component={panduan} />
        <Route path="/explore" component={Explore} />
        <Route>
          <NoMatch />
        </Route>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
