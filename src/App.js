import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ApartmentList from './components/ApartmentList/ApartmentList';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <ApartmentList /> } />
      </Routes>
    </div>
  );
}

export default App;
