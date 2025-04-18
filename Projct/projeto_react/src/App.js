import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contatos from './components/pages/contatos';
import NewProjct from './components/pages/NewProjct';

import Container from './layout/Container';
import Footer from './layout/Footer';
import NavBar from './layout/NavBar';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Container>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Company" element={<Company />} />
            <Route path="/Contatos" element={<Contatos />} />
            <Route path="/NewProjct" element={<NewProjct />} />
          </Routes>
        </Container>
      </Router>
      <Footer/> 
    </div>
  );
}

export default App;
