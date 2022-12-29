
import { Link } from "react-router-dom";

import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

import { IProductItem } from '../store/types';
import http from "../http_commen";


const CreateProduct=()=>{

    const submitHandle=(e:any)=>
    {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const name = data.get('name')?.toString()!;
        const detail = data.get('detail')?.toString()!;

        const newProduct:IProductItem = {id:null,name:name,detail:detail};

        http.post<IProductItem>("/api/create-product",newProduct)
        .then((resp)=>{
            console.log(resp);
        });
    }

    return<>

        <div style={{width:'30%',margin:"auto",marginTop:"7%"}}>
            <form onSubmit={submitHandle}>
                <MDBTabsPane component="form" show={true}>

                  <div className="text-center mb-3">
                    <p>Create New Product:</p>
                  </div>

                  <MDBInput wrapperClass='mb-4' label='Name' name="name" id='name' type='text'/>
                  <MDBInput wrapperClass='mb-4' label='Details' name="detail" id='detail' type='text'/>

                  <MDBBtn className="mb-4 w-100" type="submit">Create Product</MDBBtn>

                </MDBTabsPane>
            </form>
        </div>

    </>
}


export default CreateProduct;