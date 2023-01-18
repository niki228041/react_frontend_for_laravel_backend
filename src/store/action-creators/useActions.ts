import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux";
import actions from "../action-creators/index";

export const useAction = ()=>{
    const dispath = useDispatch();
    return bindActionCreators(actions,dispath);
}