// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
 import state, { addPost } from './redux/state';
// import {addPost} from './redux/state';



import {renderEntireTree} from './render.js';

// export let renderEntireTree = () => (
//   ReactDOM.render(
//     <React.StrictMode>
//       <App state={state} addPost={addPost}/>
//     </React.StrictMode>,
//     document.getElementById('root')
//   );
// )


renderEntireTree (state,addPost);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
