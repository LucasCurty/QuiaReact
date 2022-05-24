import Start from './Components/Pages/Start'
import Questions from './Components/Pages/Questions';
import './Components/App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Start/>}/>
        <Route path="/questions" element={<Questions/>}/>
        <Route path="*" element={<Start/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;