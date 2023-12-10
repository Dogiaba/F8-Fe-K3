export const initialState = {
    text:"",
}

export const reducer = (state, action)=>{
    switch(action.type){
        case "login/inpuEmail":{
            return{...state, text:action.payload}
        }
    }
}
