import { Dispatch } from "react";
import { IProductResponse, IProductSearch, ProductActionTypes, ProductActions } from "./types";
import http from "../http_commen";

export const GetProductList = (search:IProductSearch) => async (dispath:Dispatch<ProductActions>)=>{
    try{
        const resp = await http.get<IProductResponse>("/api/products",{
            params:search
        });
        const {data} = resp;
        dispath({type:ProductActionTypes.PRODUCT_LIST,payload:{
            list: data.data,
            total: data.last_page,
            current_page: data.current_page,
            last_page:data.last_page
        }});
    }
    catch(err:any){

    }
}

export const DeleteProduct = (product_id:number) => async (dispath:Dispatch<ProductActions>)=>{
    try{
        const resp = await http.delete<IProductResponse>(`/api/delete-product/${product_id}`);
        const {data} = resp;
        dispath({type:ProductActionTypes.DELETE_PRODUCT,payload:{
            list: data.data,
            total: data.last_page,
            current_page: data.current_page,
            last_page: data.last_page
        }});
    }
    catch(err:any){

    }
}