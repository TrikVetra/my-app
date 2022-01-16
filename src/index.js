import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let postData = [
  {id: 1, message: 'My first post'},
  {id: 2, message: 'Расскажу о муравьях'},
  {id: 3, message: 'И о снеговиках'}
 ]

 let dialogsData = [
  {id: 1, name: 'Vika'},
  {id: 2, name: 'Tanya'},
  {id: 3, name: 'Mika'}
];

let messagesData = [
 { id: 1, message: 'Привет' },
 { id: 2, message: 'Как дела?' },
 { id: 3, message: 'Хорошо' },
 { id: 4, message: 'Как всегда' }
]

ReactDOM.render(
  <React.StrictMode>
    <App postData={postData} dialogsData={dialogsData} messagesData={messagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
