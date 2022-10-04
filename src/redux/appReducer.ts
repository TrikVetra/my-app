import { getCurrentUserThunkCreator } from "./authReducer.ts"

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

type InitialStateType = {
    initialized: boolean
}

let initialState: InitialStateType = {  
    initialized: false
}

const appReducer = (state = initialState, action):InitialStateType => {    
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

//Инициализация типов
type InitializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS
}

//ActionCreators
export const initializedSuccess = ():InitializedSuccessActionType => ({type: INITIALIZED_SUCCESS})

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