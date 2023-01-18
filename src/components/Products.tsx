import { MDBTableBody,MDBTable,MDBTableHead,MDBBtn, MDBInput} from 'mdb-react-ui-kit';

import '../index.css';
import { useEffect ,useState} from 'react';
import http from '../http_commen';
import { IProductItem, IProductSearch } from '../store/types';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { Link, useSearchParams } from 'react-router-dom';
import { useAction } from '../store/action-creators/useActions';


const Products=()=>{
    var {list,total,current_page,last_page} = useTypedSelector(store=>store.productReducer);
    const {GetProductList,DeleteProduct} = useAction();
    const [searchParams, setSearchParams] = useSearchParams();
    const [search,setSearch] = useState<IProductSearch>({
        name:searchParams.get("name")||"",
        page:searchParams.get("page")||1
    });

    const buttons = [];

    for(let i =1;i<total+1;i++){
        buttons.push(i);
    }


    useEffect(()=>{
        console.log("UseEffect Works!");
        console.log(search);

       
        GetProductList(search);
    },[search]);

    async function handleDeleteProduct(product_id:number){
        console.log(product_id);

        // await http.delete<Array<IProductItem>>(`/api/delete-product/${product_id}`)
        //     .then((resp)=>{
        //         console.log(resp);
        //         list=resp.data;
        //     });
        await DeleteProduct(product_id);
        window.location.reload();
    }

    function handleSearch(name:string){
        console.log(name);
        GetProductList(search);
        setSearch({name:name});
    }

    const data = list.map((product:any)=>(
        <tr key={product.id} className='row-for-table'>
              <th scope='row'>{product.id}</th>
              <td>{product.name}</td>
              <td>{product.detail}</td>
              <td><MDBBtn onClick={()=>{handleDeleteProduct(product.id!)}} style={{background:"#e0453a"}}>Delete</MDBBtn></td>
        </tr>
    ));
    var page = '?page=';
    const buttons_ui = buttons.map((id:any)=>(
        <Link key={id} to={page+id}>
            <MDBBtn onClick={()=>setSearch({name:search.name,page:id})} style={{marginLeft:"10px",fontSize:"15px"}}>{id}</MDBBtn>
        </Link>
    ));

    return <>
    
    <div style={{width:"50%",margin:"auto",marginTop:"7%"}}>
    <div>
        <MDBBtn className="mb-4 w-25" style={{float:"right",padding:"0px"}}>
            <Link to="/create-product" style={{display:"inline-block",width:"100%",height:"100%",padding:"10px",color:"white"}}>Add Product</Link>
        </MDBBtn>
    </div>

    <h4>All Products <strong>{total}</strong></h4>

    <div style={{display:"flex",flexDirection:"row",alignContent:"center",height:"50px",paddingBottom:"10px"}}>
        <MDBInput label='Search' id='form1' type='text' onChange={(event:any)=>{setSearch({name:event.target.value})}} />
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
        <div style={{display:"flex",flexDirection:"row",justifyContent:"center",padding:"10px"}}>
            {buttons_ui}
        </div>
    </div>
    
    
    </>;
}

export default Products;
