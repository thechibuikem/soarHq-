import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Elibrary from './pages/Elibrary'
import Events from './pages/Events'
import BookPage from './pages/book'
import FlipbookViewer from './components/BookTemplate'
const App = () => {
 
  return(
     <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Events" element={<Events />} />
    <Route path="/Elibrary" element={<Elibrary />} />
    <Route path="/Book/" element={<BookPage />} />
    <Route path="/FlipBook" element={<FlipbookViewer/>}/>
  </Routes>
  )
}

export default App