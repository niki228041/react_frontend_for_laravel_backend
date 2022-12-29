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

const Login=()=>{


    return <>
    
    <div>

        <div style={{width:'30%',margin:"auto",marginTop:"7%"}}>
          <form>

            <MDBTabsPane show={true}>

              <div className="text-center mb-3">
                <p>Sign in with:</p>

                <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
                  <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                    <MDBIcon fab icon='facebook-f' size="sm"/>
                  </MDBBtn>

                  <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                    <MDBIcon fab icon='twitter' size="sm"/>
                  </MDBBtn>

                  <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                    <MDBIcon fab icon='google' size="sm"/>
                  </MDBBtn>

                  <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                    <MDBIcon fab icon='github' size="sm"/>
                  </MDBBtn>
                </div>

                <p className="text-center mt-3">or:</p>
              </div>

              <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
              <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>

              <div className="d-flex justify-content-between  mb-4">
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                <a href="!#">Forgot password?</a>
              </div>

              <div style={{marginBottom:"20px"}} >
                <Link to='/registration'>Don`t have an account yet? Click to go at Registration Page.</Link>
              </div>

              <MDBBtn className="mb-4 w-100">Sign in</MDBBtn>

            </MDBTabsPane>
            </form>

        </div>
    </div>

    </>;
}

export default Login;