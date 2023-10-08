import logo from './logo.svg';
import Contest from './components/contest'
import './App.css';
import Login from './components/loginpage'
import Chatbox from './components/chatbox'
function App() {
  return (
    <div className="App">
      <Contest />
      <Login/>
      <Chatbox/>
    </div>
  );
}

export default App;
