// This is the ideal place for us to have the layout
// Functional Component 
import './App.css';  // css -> Comp-wide styles

import Header from './components/Header';
import Footer from './components/Footer';
import LatestMovie from './components/LatestMovie';
import Movie from './containers/Movie';
import TrendingShows from './containers/TrendingShows';
import Subscription from './containers/Subscription';
import MyProfile from './containers/MyProfile';
import LifecycleDemo from './containers/LifecycleDemo';
import Signin from './containers/Signin';
import WithLastLogin from './hoc/WithLastLogin';
import SubscriberList from './containers/SubscriberList';

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
        <TrendingShows period="this week" />

        <hr />
        <h2 className="redText greenText">Subscription | Styling Demo</h2>
        <Subscription />

        <hr/>
        <h2>My Profile | Two Way Binding Demo</h2>
        <MyProfile />

        <hr/>
        <h2>Life Cycle Hooks Demo</h2>
        <LifecycleDemo />

        <hr/>
        <h2>Signin | Forms, Refs and DOM Demo</h2>
        <Signin />

        <hr/>
        <h2>Last Login | Higher Order Component - HOC</h2>
        <WithLastLogin>
          <p>Last Login: 24/Nov/2021</p>
          <p>Updated at: 6 PM Today</p>
        </WithLastLogin>

        <WithLastLogin>
          <p>Do you want to signout?</p>
        </WithLastLogin>

        <hr />
        <h2>Subscriber List | AJAX Call</h2>
        <SubscriberList />

      </main>

      <Footer></Footer>
    </div>
  );
}

export default App;
