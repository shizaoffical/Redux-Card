import React, { useEffect } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBBtn,
    // MDBInputGroup
} from 'mdb-react-ui-kit';
import {Link} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import {getCartTotal} from "../features/Slice"

 function MainNavbar() { 
    const {cart, totalQuantity} = useSelector((state) => state.allcarts)
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(getCartTotal());
    },[cart]);
   
    return (
        <MDBNavbar light bgColor='light' sticky="top">
            <MDBContainer fluid>
                <MDBNavbarBrand>Home</MDBNavbarBrand>
                <span><Link to="/">All Product</Link></span>
                <MDBBtn color='dark'>
                    <Link to="/cart" className='text-light'> Card({totalQuantity})</Link>
                    
                </MDBBtn>
            </MDBContainer>
        </MDBNavbar>
    );
}
export default MainNavbar;