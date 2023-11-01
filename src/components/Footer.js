import React from 'react'
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
export default function Footer() {
  return (
    <MDBFooter className='bg-dark text-center text-white p-4 pb-0 d-flex align-items-center'>
       <img
              alt=""
              src="./qutlogo.png"
              width="20"
              height="20"
              className="d-inline-block align-top logoImage logo-spacing mb-4"
            />
    <MDBContainer className='p-4 pb-0'>
   
      <section className='mb-4'>
      
        <MDBBtn outline color="light" floating className='m-1' href='https://www.facebook.com/QUTJapan/' role='button'>
          <MDBIcon fab icon='facebook-f' />
        </MDBBtn>

        <MDBBtn outline color="light" floating className='m-1' href=""role='button'>
          <MDBIcon fab icon='twitter' />
        </MDBBtn>

        <MDBBtn outline color="light" floating className='m-1' href='https://www.instagram.com/qutjapan/?hl=en' role='button'>
          <MDBIcon fab icon='instagram' />
        </MDBBtn>

        <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <MDBIcon fab icon='linkedin-in' />
        </MDBBtn>

        <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <MDBIcon fab icon='envelope' />
        </MDBBtn>
        
      </section>
    </MDBContainer>

    <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
     
      
    </div>
  </MDBFooter>
  )}
