import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/nav/Navbar.component'
import Authentication from './routes/authentication/Authentication.components'
import Home from './routes/home/Home.routes'

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="container">
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Authentication />} path="/auth" />
        </Routes>
      </div>
    </>
  )
}

export default App
