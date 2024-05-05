import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sidebar from "./components/contents/sidebar";
import Cards from "./components/contents/commissionBox";
import Navbar from "./components/contents/Navbar";
import NewContent from "./components/contents/NewContent";

function App() {
  return (
    <>

      <BrowserRouter>
        <div className="d-flex">
          <Sidebar />                                             {/* Component 1 */} 
          <div className="container-fluid bg-light px-0">
            <Navbar />                                            {/* Component 2 */} 
            <div className="container">
              <Routes>
                <Route path="/" element={<Cards />}></Route>       {/* Component 3 */} 
                <Route path="/content" element = {<NewContent/>}></Route>
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
