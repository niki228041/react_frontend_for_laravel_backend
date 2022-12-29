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

const Registration=()=>{
    
    return <>
    <div>
        <div style={{width:'30%',margin:"auto",marginTop:"7%"}}>
          <form>
            <MDBTabsPane show={true}>
                <div className="text-center mb-3">
                  <p>Sign un with:</p>

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

                <MDBInput wrapperClass='mb-4' label='Name' id='form1' type='text'/>
                <MDBInput wrapperClass='mb-4' label='Username' id='form1' type='text'/>
                <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'/>
                <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password'/>

                <div className='d-flex mb-4'>
                  <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
                </div>

                <div style={{marginBottom:"20px"}} >
                    <Link to='/login'>Do you have an account? Click to go at Login Page.</Link>
                </div>

                <MDBBtn className="mb-4 w-100">Sign up</MDBBtn>

                </MDBTabsPane>
          </form>
        </div>

    </div>

    </>;
}

export default Registration;
