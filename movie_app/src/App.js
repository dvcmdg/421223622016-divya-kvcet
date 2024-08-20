import { BrowserRouter, Routes, Route } from 'react-router-dom';


import './index.css'
import './App.css'


import Home from './components/home';
import View from './components/view';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/home' element={<Home />}  />
            <Route path='/view' element={<View />} />
            <Route path='/*' element={<h1>Not Found</h1>} />
            
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;