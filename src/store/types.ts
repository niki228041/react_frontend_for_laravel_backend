export interface IProductItem{
    id:number|null,
    name:string,
    detail:string
}

export interface IProductState{
    list: Array<IProductItem>;
    current_page:number,
    total:number,
    last_page:number
}

export interface IProductResponse{
    data: Array<IProductItem>,
    current_page:number,
    total:number,
    last_page:number
}

export interface IProductSearch{
    name?:string,
    page?:number|string|null
}

export enum ProductActionTypes{
    PRODUCT_LIST="PRODUCT_LIST",
    CREATE_NEW_PRODUCT="CREATE_NEW_PRODUCT",
    DELETE_PRODUCT="DELETE_PRODUCT",

}

export interface GetProductAction{
    type: ProductActionTypes.PRODUCT_LIST,
    payload: IProductState
}

export interface DeleteProductAction{
    type: ProductActionTypes.DELETE_PRODUCT,
    payload: IProductState
}

export type ProductActions = | GetProductAction | DeleteProductAction;