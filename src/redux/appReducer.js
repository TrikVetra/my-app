import { getCurrentUserThunkCreator } from "./authReducer"

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';


let initialState = {  
    initialized: false
}

const appReducer = (state = initialState, action) => {    
    switch (action.type) {
        case INITIALIZED_SUCCESS: 
            return {
                ...state,      // возвращаем копию состояния                
                initialized: true               
            };        
        default:
            return state;
    }    
}

//ActionCreators
export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})

//ThunkCreators
export const initializeApp = () => (dispatch) => {      
     
    let promise = dispatch(getCurrentUserThunkCreator());
    //dispatch(somethingelse());
    //dispatch(somethingelse());
    Promise.all([promise]).then(() => { //промисы могут приходить от нескольких диспатчей, поэтому оборачиваем их в массив
    //promise.then(() => {
        dispatch(initializedSuccess());
    });    
}


export default appReducer