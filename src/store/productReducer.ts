import { Action } from "@remix-run/router"
import { IProductItem,IProductState, ProductActionTypes } from "./types"


const initialState: IProductState = {
    list:[]
}

export const productReducer = (state=initialState,action:any): IProductState=>{
    switch(action.type){
        case ProductActionTypes.PRODUCT_LIST:{
            return {
                ...state,
                list:[...action.payload]
            }
        }
        case ProductActionTypes.CREATE_NEW_PRODUCT:{
            return {
                ...state
            }
        }
        default:{
            return state;
        }
    }
}