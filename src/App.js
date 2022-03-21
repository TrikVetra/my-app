//import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Users from './components/Users/Users';
import Profile from './components/Profile/Profile';



const App = (props) => {  
  return (    
    <BrowserRouter>
      <div className="app_wrapper">
        <Header />
        <Navbar />
        <div className="app_wrapper_content">
          <Routes>
            <Route path='/profile' element={<Profile />} />
            <Route path='/dialogs/*' element={<DialogsContainer />} /> 
            <Route path='/users' element={ <Users /> } />    
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

