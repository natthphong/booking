import React from "react";
import Home from "./pages/home/home.jsx"
import List from "./pages/list/list.jsx";
import Hotel from "./pages/hotel/Hotel.jsx";
import {
  BrowserRouter ,
 
  Route,
  Routes

} from "react-router-dom";
import Login from "./pages/login/login.jsx";
function App() {
  return (
    <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/hotels" element = {<List />} />
              <Route path="/hotels/:id" element={<Hotel />}/>
              <Route path="/login" element={<Login />} />
          </Routes>
    </BrowserRouter>
    
  );
}

export default App;
