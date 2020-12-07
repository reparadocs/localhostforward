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
          <Route exact path="/">
            <div style={{width: '80%', margin: 'auto', marginTop: 200}}>
              <h1>Local Forward</h1>
              <div>Working with an API that requires a callback URL? Local Forward gives you an https URL that redirects to localhost.</div>
              <br />
              <div>Usage: <code>https://localforward.dev/:port</code>. Everything after the port will be passed on to the redirect to localhost.</div>
              <br />
              <div>Example: <code>https://localforward.dev/3000/callback?test=true</code> redirects to <code>http://localhost:3000/callback?test=true</code></div>

            </div>
          </Route>
            <Route path="/*">
              <h2 style={{marginTop: 200}}>Redirecting to localhost</h2>
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
