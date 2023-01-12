import React from 'react';
import {  useDispatch, useSelector } from 'react-redux';

import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRow,
    MDBCol,
    MDBContainer
} from 'mdb-react-ui-kit';
import {addcart}   from '../features/Slice';

export default function App() {
   

const cart = useSelector((state) => state.allcarts.items)
console.log(cart)
const  dispatch = useDispatch();

    return (
        <div className='m-2'>
            <MDBContainer>
            <MDBRow md="3">
                {cart.map((item) => (
                   <MDBCol key={item.id} size="4">
                   <MDBCard>
                       <MDBCardImage src={item.img} position='top' alt='...' />
                       <MDBCardBody>
                           <MDBCardTitle>{item.title}</MDBCardTitle>
                           <MDBCardText>{item.price}</MDBCardText>
                           <MDBBtn onClick= { () => dispatch(addcart(item))}>Button</MDBBtn>
                       </MDBCardBody>
                   </MDBCard>
               </MDBCol>
                ))}
            </MDBRow>
            </MDBContainer>
        </div>
    );
}