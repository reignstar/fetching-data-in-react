import Home from './home';
import View from './View';
import './index.css';
import{BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Router>
    <Routes>
      <Route path="/" element={ <Home />}/>
      <Route path="/viewmore/:id" element={<View/>}/>
    </Routes>
  </Router>
  </div>
  );

}

export default App;
