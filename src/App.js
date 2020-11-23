import logo from './comp-logo-with-name.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p />
        <iframe 
          src="https://complementcap.substack.com/embed" 
          width="480" 
          height="320" 
          frameBorder="0" 
          scrolling="no">
        </iframe>
            
      </header>
    </div>
  );
}

export default App;
