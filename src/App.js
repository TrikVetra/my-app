//import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
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
            <Route path='/profile' element={<Profile postData={props.postData}/>} />
            <Route path='/dialogs/*' element={<Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData}/>} /> 
            <Route path='/news' element={<News/>} /> 

            
            
          </Routes>
          {/* <Profile />  */}
          {/* <Dialogs /> */}
        </div>

      </div>
    </BrowserRouter>
  );
}



export default App;
