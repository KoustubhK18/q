import logo from './logo.svg';
import './App.css';
import SignInSide from './modules/SignIn';
import SignUp from './modules/SignUp';

function App() {
  return (
    <div className="App">
      <SignInSide />
      <SignUp />
    </div>
  );
}

export default App;
