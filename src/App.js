import AddPost from "./components/AddPost";
import EditPost from "./components/EditPost";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div style={{ maxWidth: "30rem", margin: "4rem auto" }}>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/add" component={AddPost} />
          <Route path="/edit/:id" component={EditPost} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
