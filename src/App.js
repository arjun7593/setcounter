
import './App.css';
import Counter from './components/Counter';

import {BrowserRouter as Router,Route,Routes} from "react-router-dom"

function App() {
  return (
    <Router>

      <div>
        <Routes>

          <Route path="Counter" element={<Counter/>} />
        </Routes>

      </div>


    </Router>
  );
}

export default App;
