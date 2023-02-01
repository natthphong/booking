import React from "react";
import Home from "./pages/home/home.jsx"
import List from "./pages/list/list.jsx";
import Hotel from "./pages/hotel/Hotel.jsx";
import {
  BrowserRouter ,
 
  Route,
  Routes

} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/hotels" element = {<List />} />
              <Route path="/hotels/:id" element={<Hotel />}/>
              
          </Routes>
    </BrowserRouter>
    
  );
}

export default App;
