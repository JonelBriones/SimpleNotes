import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './routes/home/Home.routes'

function App() {
  return (
    <>
      <div className="container">
        <Routes>
          <Route element={<Home />} path="/" />
        </Routes>
      </div>
    </>
  )
}

export default App
