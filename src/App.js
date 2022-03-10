//import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Post from './components/Profile/MyPosts/Post/Post';
import Profile from './components/Profile/Profile';



const App = (props) => {  
  return (    
    <BrowserRouter>
      <div className="app_wrapper">
        <Header />
        <Navbar />
        <div className="app_wrapper_content">
          <Routes>
            <Route path='/profile' element={<Profile state={props.state.profilePage} 
                                                     store={props.store} />} />
            <Route path='/dialogs/*' element={<DialogsContainer state={props.state.dialogsPage} 
                                                       store={props.store}/>} /> 
            <Route path='/news' element={<News/>} />    
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

