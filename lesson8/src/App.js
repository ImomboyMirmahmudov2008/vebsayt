import Navbar from './Navbar';
import './App.css';
import Blog from './Blog';
import About from  './About';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
          <Navbar />
          <Switch>
          <Route path="/blog" component={<Blog />} />
          <Route path="/about" component={<About />} />
          </Switch>
    </div>
    </BrowserRouter>
  );
}

const Home = () => {
  return(
    <div>
      <h1>Home</h1>
      <p>This is home</p>
    </div>
  )
}

export default App;
