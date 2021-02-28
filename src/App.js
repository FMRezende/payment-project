<<<<<<< HEAD
=======
// Encriptar pass crypto  / js-sha256
>>>>>>> 5c2a21e1815de1e1ad597b1d5d2284f13085236a
import './App.css';
import LoginForm from "./components/LoginForm/loginForm";
import SignUpForm from "./components/SignUpForm/signUpForm";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Landing from './pages/Landing';
import DashboardPage from './pages/DashboardPage';


function App() {

  return (
    <div>
      <Router>
        <Switch>
          <Route path='/login'>
            <LoginForm />
          </Route>
          <Route path='/signup'>
            <SignUpForm />
          </Route>
          <Route path='/dashboard'>
            <DashboardPage />
          </Route>
          <Route path='/'>
            <Landing />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

<<<<<<< HEAD
export default App;


/* function App() {
  return (
    <div className="App">
      <>
       <Header/>
      <IntroducePage/>
      <TrustBox/>
      <div className="secondprincipal__container">
      <BoxInfo/>
      <img src={SecondPicture} alt="sexy lady" className="sexyLady"/>
      </div>
      <Footer/>
      </>
    </div>
  );
}

export default App; */
=======
export default App;
>>>>>>> 5c2a21e1815de1e1ad597b1d5d2284f13085236a
