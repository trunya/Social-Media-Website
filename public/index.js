import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

export default function App() {
  const app = document.getElementById('root');

  const Profile = () => (
    <Switch>
      <Route exact path='/profile' component={Profile} />
    </Switch>
  )
  
  const Main = () => (
    <Main>
      <Switch>
        <Route exact path='/about' component={About} />
      </Switch>
    </Main>
  )
  
  const Header = () => (
    <header>
      <nav>
        <ul>
          <li><Link to='/about'>About</Link></li>
        </ul>
      </nav>
    </header>
  )
  
  ReactDOM.render(
    <HashRouter>
      <App />
    </HashRouter>,
  app);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);