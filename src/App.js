// This is the ideal place for us to have the layout
// Functional Component 
import './App.css';  // css

import Header from './components/Header';
import Footer from './components/Footer';
import LatestMovie from './components/LatestMovie';
import Movie from './containers/Movie';
import TrendingShows from './containers/TrendingShows';

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
        <LatestMovie title="Encanto" 
                      category="Fantasy">
          A young Colombian girl has to face the frustration of being the only member of her family without magical powers.
        </LatestMovie>
        
        <LatestMovie title="Drive My Car" 
                      category="Drama">
          Nishijima Hidetoshi is a stage actor and director happily married to his playwright wife. Then one day she disappears.
        </LatestMovie>

        <hr />
        <h2>Movie List | Class Comp, States, Events </h2>
        <Movie />

        <hr />
        <h2>Trending Shows | Class Comp, Conditional Rendering, Lists and Keys Demo</h2>
        <TrendingShows />

      </main>

      <Footer></Footer>
    </div>
  );
}

export default App;
