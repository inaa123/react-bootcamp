import logo from './logo.svg';
import './App.css';
import DarkMode from './context/DarkMode';
import DarkModeBtn from './context/DarkModeBtn';

function App() {
  return (
    <DarkMode>
      <DarkModeBtn />
    </DarkMode>
  );
}

export default App;
