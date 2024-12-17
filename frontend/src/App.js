import { Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      
      <div style={{padding:'20px'}}>
        
        <Routes>
          <Route path='/' element={<Home /> }></Route>
        </Routes>
       
      </div>
      
    </div>
  );
}

export default App;
