import Navbar from "./navbar";
import Home from "./home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";

function App() {
    const naslov = 'Dobredojde na Kiko-blog';
    //const likes = 50;
    //const licnost = { name: 'kiko', godini: 21 }; objekt ne moze da se printa
    const link = 'http://www.google.com'
  return (
      <Router>
          <div className="App">
              <div className="content">
                  <Navbar />
                  <Switch>
                      <Route exact path='/'>
                        <Home />
                      </Route>
                      <Route path="/create">
                          <Create />
                      </Route>
                      <Route path="/blogs/:id">
                          <BlogDetails />
                      </Route>
                      <Route path="*">
                          <NotFound />
                      </Route>
                  </Switch>
                  <h1>{naslov}</h1>
                  <a href={link}>Google Site</a>
              </div>
          </div>
      </Router>
  );
}

export default App;
