import { Action } from "@remix-run/router"
import { IProductItem,IProductState, ProductActionTypes } from "./types"


const initialState: IProductState = {
    list:[],
    current_page:0,
    total:0,
    last_page:0
}

export const productReducer = (state=initialState,action:any): IProductState=>{
    switch(action.type){
        case ProductActionTypes.PRODUCT_LIST:{
            return {
                ...state,
                ...action.payload
            }
        }
        case ProductActionTypes.CREATE_NEW_PRODUCT:{
            return {
                ...state
            }
        }
        case ProductActionTypes.DELETE_PRODUCT:{
            return {
                ...state
            }
        }
        default:{
            return state;
        }
    }
}