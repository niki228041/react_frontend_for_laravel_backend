
import { Link, Outlet } from 'react-router-dom';

const Header=()=>{
    return<>
    
    <header className='d-flex align-items-center for-links' style={{width:"100%",height:"60px",background:"#475cc4",display:"flex"}}>
      <Link to='products' className='ms-3'>Home</Link>
      <Link to='registration' className='ms-3'>Registration</Link>
      <Link to='login' className='ms-3'>Login</Link>
    </header>

    <Outlet/>

    </>
}


export default Header;