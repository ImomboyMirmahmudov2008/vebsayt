import './App.css';
import ReactDOM from 'react-dom/client';
import EventPage from './Events/EventPage';
import Content from './Content';
import Footer from './Footer';

function App() {

  return (
    <div className="App">
      <header>
        <EventPage />
        <Content />
        <Footer />
      </header>
    </div>
  );
}

export default App;
