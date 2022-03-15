import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Canvas } from './components/canvas'
import Edit from './components/edit'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Canvas />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
