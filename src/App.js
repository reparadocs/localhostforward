import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  let pathArr = window.location.pathname.substr(1).split('/');
  let port = pathArr[0];
  pathArr.shift();
  let path = pathArr.join('/');
  if (port) {
    window.location.replace("http://localhost:" + port + "/" + path + window.location.search)
  }
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/">
            <div>Home Page</div>
          </Route>
            <Route path="/*">
              <div>Redirecting to localhost</div>
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
