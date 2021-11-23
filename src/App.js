// This is the ideal place for us to have the layout
// Functional Component 
import './App.css';  // css

import Header from './components/Header';
import Footer from './components/Footer';
import LatestMovies from './components/LatestMovies';

// JS 
function App() {
  // JSX 
  // Every comp in React should return JSX 
  return (
    <div>
      <Header></Header>

      <main className="mt-5 container">
        <h1>Welcome to Netflix Clone App</h1>

        <h2>Latest Movies | Props</h2>
        <LatestMovies title="Encanto" 
                      category="Fantasy">
          A young Colombian girl has to face the frustration of being the only member of her family without magical powers.
        </LatestMovies>
        
        <LatestMovies title="Drive My Car" 
                      category="Drama">
          Nishijima Hidetoshi is a stage actor and director happily married to his playwright wife. Then one day she disappears.
        </LatestMovies>
      </main>

      <Footer></Footer>
    </div>
  );
}

export default App;
