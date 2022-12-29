export interface IProductItem{
    id:number|null,
    name:string,
    detail:string
}

export interface IProductState{
    list: Array<IProductItem>;
}

export enum ProductActionTypes{
    PRODUCT_LIST="PRODUCT_LIST",
    CREATE_NEW_PRODUCT="CREATE_NEW_PRODUCT"
}