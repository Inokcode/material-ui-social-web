import logo from './logo.svg';
import './App.css';
import { makeStyles } from '@material-ui/core';
import Navbar from './components/Navbar';

const useStyles = makeStyles({});

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
