import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Dashboard from './app/pages/Dashboard';
import Login from './app/pages/Login';
import Register from './app/pages/Register';
import Header from './components/Header';

function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Header/>
          <Routes>
            {/* In React Router 6 only routes can be placed in routes tags */}
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
          </Routes>
        </div>
    </Router>
    </>
  );
}

export default App;
