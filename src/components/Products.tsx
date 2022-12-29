import { MDBTableBody,MDBTable,MDBTableHead,MDBBtn} from 'mdb-react-ui-kit';

import '../index.css';
import { useEffect ,useState} from 'react';
import http from '../http_commen';
import { useDispatch } from 'react-redux';
import { IProductItem } from '../store/types';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { Link } from 'react-router-dom';


const Products=()=>{
    var {list} = useTypedSelector(store=>store.productReducer);
    const dispatch = useDispatch();


    useEffect(()=>{
        console.log("UseEffect Works!");

        const fetchData = async ()=>{
            try{
                await http.get<Array<IProductItem>>("/api/products")
                .then((resp)=>{
                    console.log("Response data",resp);
                    dispatch({type:"PRODUCT_LIST",payload:resp.data});
                    list=resp.data;
                });
            }
            catch(err){
                console.log(err);
            }
        }

        fetchData();
        
    },[]);

    function handleDeleteProduct(product_id:number){
        console.log(product_id);

        http.delete<Array<IProductItem>>(`/api/delete-product/${product_id}`)
            .then((resp)=>{
                console.log(resp);
                list=resp.data;
            });
       
    }

    const data = list.map((product:any)=>(
        <tr key={product.id} className='row-for-table'>
              <th scope='row'>{product.id}</th>
              <td>{product.name}</td>
              <td>{product.detail}</td>
              <td><MDBBtn onClick={()=>{handleDeleteProduct(product.id!)}} style={{background:"#e0453a"}}>Delete</MDBBtn></td>
        </tr>
    ));


    return <>
    
    <div style={{width:"50%",margin:"auto",marginTop:"7%"}}>
    <div>
        <MDBBtn className="mb-4 w-25" style={{float:"right",padding:"0px"}}>
            <Link to="/create-product" style={{display:"inline-block",width:"100%",height:"100%",padding:"10px",color:"white"}}>Add Product</Link>
        </MDBBtn>
    </div>
    <MDBTable>
        
        <MDBTableHead style={{background:"#90a7f0"}}>
            <tr>
              <th className='col-3'>#</th>
              <th className='col-3'>First</th>
              <th className='col-3'>Last</th>
              <th className='col-2'>Handle</th>
            </tr>
      </MDBTableHead>

        <MDBTableBody>
            {data}
        </MDBTableBody>
    </MDBTable>

    </div>
    
    
    </>;
}

export default Products;
