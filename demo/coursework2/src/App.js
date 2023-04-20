import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Login from "./views/Login/Login";
import Layout from "./views/Layout/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/layout' element={<Layout/>} />
      </Routes>  
    </Router>
  );
}

export default App;
