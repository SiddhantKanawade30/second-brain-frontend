
import Dashboard from './pages/Dashboard'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import {BrowserRouter , Route, Routes} from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Signup />}/>
      <Route path="/signin" element={<Signin />}/>
      <Route path="/dashboard" element={<Dashboard />}/>
      
    </Routes>
    </BrowserRouter>
  )
}

export default App
