import{useContext} from 'react'
import { GlobaContext } from '../store/Provider'

export const useSelector = (callBack)=>{
    const{state} = useContext(GlobaContext);
    if(typeof callBack !== "function"){
        throw new Error("callback is not function");
    }
    return callBack(state);
}

export const useDispatch = () => {
    const{dispatch} = useContext(GlobaContext);
    return dispatch
}