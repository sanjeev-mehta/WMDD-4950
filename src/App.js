import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

const Nav = () => {
  return (
    <nav className="App-nav">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#contact">Contact</a>
    </nav>
  );
};

const Main = () => {
  return (
    <main className="App-main">
      <section id="home">
        <h2>Home</h2>
        <p>This is the main content area. You can add more content here.</p>
      </section>
      <section id="about">
        <h2>About Us</h2>
        <p>Information about your company or project.</p>
      </section>
      <section id="services">
        <h2>Services</h2>
        <p>Details about the services you offer.</p>
      </section>
      <section id="contact">
        <h2>Contact Us</h2>
        <p>How to get in touch with you.</p>
      </section>
    </main>
  );
};

const Footer = () => {
  return (
    <footer className="App-footer">
      <p>&copy; 2024 Sanjeev Mehta. All rights reserved.</p>
    </footer>
  );
};


export default App;
