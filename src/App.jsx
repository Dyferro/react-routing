import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

import Contacto from "./components/Contacto";
import Inicio from "./components/Inicio";
import Nosotros from "./components/Nosotros";
import Users from "./components/Users";

function App() {

  return (
    <Router>
      <div className="container mt-5">
        <div className="container mt-2 border border-danger">
          <h1>Routing Section REACT</h1>
        </div>
        <div className="btn btn-group">
          <Link to='/' className="btn btn-dark">Home</Link>
          <Link to='/contacto' className="btn btn-dark">Contacto</Link>
          <Link to='/nosotros' className="btn btn-dark">Nosotros</Link>
          <NavLink to='/users' className="btn btn-dark">Users</NavLink>

        </div>
        <hr />
        <Switch>
          <Route path='/nosotros' component={Nosotros} />
          <Route path='/contacto' component={Contacto} />
          <Route path='/users' component={Users} />
          <Route path='/' component={Inicio} />
        </Switch>
      </div>
    </Router >
  );
}

export default App;
