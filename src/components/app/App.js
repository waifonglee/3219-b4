import './App.css';
import Main from '../posts/main'
import PostForm from '../posts/PostForm'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom';
import NavBar from '../nav/NavBar'



function App() {
  return (
    <div>
      <NavBar />
      <Switch>
          <Route path={'/'} component={Main} exact />
          <Route path={'/create'} component={PostForm} />
        </Switch>
    </div>
  );
}

export default App