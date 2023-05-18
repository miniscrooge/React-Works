// import logo from './logo.svg';

import { useState, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';

import LightContext from "./contexts/LightContext";
import AddContactsContext from  './contexts/AddContactsContext';

import useFetch from "./hooks/useFetch"

import Header from './components/Header';
import Home from './components/Pages/Home'
import NoMatch from './components/Pages/NoMatch'
import Contact from './components/Contact/Contact'
import ContactDetail from './components/Contact/ContactDetail';
import FormNewContact from './components/Contact/FormNewContact';

import "./assets/general.css"

const App = () => {

  const [{theme, setTheme}] = useState("light-theme")
  
   // Retrieve data
   const [
    contacts,
    setContacts,
    loadingContacts,
    errorContacts
  ] = useFetch("https://jsonplaceholder.typicode.com/users")
  
  return (
      <div>
          <LightContext.Provider value={{theme, setTheme}}>
            <Header/>
          </LightContext.Provider>

          <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="contact" element={ 
              // Paso datos por context
              <AddContactsContext.Provider value={{contacts,setContacts,loadingContacts, errorContacts}}>
                <Contact/>
              </AddContactsContext.Provider>
            } />
            
            
            {/* Paso datos por props */}
            <Route path="/new" element={ <FormNewContact dataContacts={{contacts, setContacts}}/>} />
            <Route path="*" element={ <NoMatch/> } />

            <Route path="contact/:id" element={ 
                <AddContactsContext.Provider value={{contacts}}>
                <ContactDetail/>
              </AddContactsContext.Provider>
           } />


          </Routes>
          
      </div>
  );
}

export default App;
