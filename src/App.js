//import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';



const App = (props) => {  
  return (    
    <BrowserRouter>
      <div className="app_wrapper">
        <Header />
        <Navbar />
        <div className="app_wrapper_content">
          <Routes>
            {/* Если в конце пути /* значит вместо * может быть что угодно. Если * нет, то путь должен быть точным. */}
            {/* После : написано имя параметра по которому можно обратиться с помощью withRoute (useParams) к части адреса */}
            {/* ? означает, что параметр опциональный (может быть, а может нет) */}
            <Route path='/profile/' element={<ProfileContainer/>}/> 
            <Route path='/profile/:userId?' element={<ProfileContainer/>}/> 
            <Route path='/dialogs/*' element={<DialogsContainer/>}/> 
            <Route path='/users' element={<UsersContainer/>}/>    
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

