import logo from './logo.svg';
import './App.css';
import { Button } from '@material-ui/core';
import { Person } from '@material-ui/icons';

function App() {
  return (
    <div className="App">
      <Button variant="outlined" size="large" startIcon={<Person />}>
        GBU
      </Button>
    </div>
  );
}

export default App;
