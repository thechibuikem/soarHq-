import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Elibrary from './pages/Elibrary'
import Events from './pages/Events'
const App = () => {
 
  return(
     <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Events" element={<Events />} />
    <Route path="/Elibrary" element={<Elibrary />} />
  </Routes>
  )
}

export default App