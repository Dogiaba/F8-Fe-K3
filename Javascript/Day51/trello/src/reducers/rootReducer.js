export const initialState ={
    text:"",
}
export const reducer = (state, action) =>{
    switch(action.type){
        case "login/inputEmail":{
            return{...state, text:action.playload}
        }
    }
}