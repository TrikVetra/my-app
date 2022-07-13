//import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
//import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
//import UsersContainer from './components/Users/UsersContainer';
//import ProfileContainer from './components/Profile/ProfileContainer';
import LoginPage from './components/Login/Login'
import React, {Suspense} from 'react';
import { connect, Provider } from 'react-redux';
import { initializeApp } from './redux/appReducer'
import Preloader from './components/Common/Preloader/Preloader';
import store from './redux/reduxStore';

//Позволяет подгружать компоненты только когда они понадобятся.
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) return <Preloader />
    else return (
      <BrowserRouter>
        <div className="app_wrapper">
          <HeaderContainer />
          <Navbar />
          <div className="app_wrapper_content">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>              
                {/* Если в конце пути /* значит вместо * может быть что угодно. Если * нет, то путь должен быть точным. */}
                {/* После : написано имя параметра по которому можно обратиться с помощью withRoute (useParams) к части адреса */}
                {/* ? означает, что параметр опциональный (может быть, а может нет) */}
                <Route path='/profile/' element={<ProfileContainer />} />
                <Route path='/profile/:userId' element={<ProfileContainer />} />
                <Route path='/dialogs/*' element={<DialogsContainer />} />
                <Route path='/users' element={<UsersContainer />} />
                <Route path='/login' element={<LoginPage />} />              
            </Routes>
            </Suspense>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

//export default connect(mapStateToProps, {initializeApp}) (App)
let AppContainer = connect(mapStateToProps, { initializeApp })(App)

const MainApp = (props) => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <AppContainer />
        {/* <App state={state} 
       dispatch={store.dispatch.bind(store)} 
       store = {store}/> */}
      </Provider>
    </React.StrictMode>
  )
}

export default MainApp
