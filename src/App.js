import logo from './logo.svg';
import './App.css';

import { Routes, Route } from 'react-router-dom';

import Menu from './components/Menu'
import Home from './components/Pages/Home'
import Contact from './components/Contact/Contact'
import ContactDetail from './components/Contact/ContactDetail';

const App = () => {

  return (
      <div>

        <Menu/>
          
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="contact" element={ <Contact/> } />
          <Route path="contact/:id" element={ <ContactDetail/> } />
          {/* <Route path="*" element={ <NoMatch/> } /> Error 404 */}
        </Routes>

      </div>
  );
}

export default App;
