
import './App.css';
import NavBar  from './components/navbar/NavBar';
import HomePage from './components/homepage/HomePage';
import ContactList from './components/contact/ContactList';
import UpdateContact from './components/updatecontact/UpdateContact';
import ContactCard from './components/contact/ContactCard';
import AddContact from './components/addcontact/AddContact';
import{Routes , Route } from 'react-router-dom'

function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={ <NavBar/>} />
      
      <Route path="/home" element={ <HomePage/>} />
      <Route path="/contact" element={ <ContactCard/>} />
      <Route path="/add" element={ <AddContact/>} />
      <Route path="/update" element={ <UpdateContact/>} />


      </Routes>
     
     
     
     
    </div>
  );
}

export default App;
