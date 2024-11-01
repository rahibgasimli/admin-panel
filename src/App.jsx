import './App.css'
import AddUser from './components/AddUser'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Users from './components/Users'

import { BrowserRouter,Route,Routes} from 'react-router-dom'




function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <div className="page-left">
        <Sidebar/>
      <div className="home">
      <Routes>
        <Route path="/" element={<Users/>}></Route>
        <Route path="adduser" element={<AddUser/>}></Route>
      </Routes>
      </div>
      
      </div>
    </BrowserRouter>
  )
}

export default App
