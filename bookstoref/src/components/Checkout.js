import React from "react";
import { useEffect, useState } from 'react';
import TestBooksHolder from '../components/TestBooksHolder';
import axios from 'axios';
import { Image, Form, FormGroup, Button, Table, ModalFooter } from 'react-bootstrap';
import jbookstorelogo from '../assets/images/jbookstorelogo.png'
import searchalt from '../assets/svgs/searchalt.svg'
import order from '../assets/svgs/order.svg'
import cart from '../assets/svgs/cart.svg'
import instagram from '../assets/svgs/instagram.svg'
import facebook from '../assets/svgs/facebook.svg'
import twitter from '../assets/svgs/twitter.svg'
import linkedin from '../assets/svgs/linkedin.svg'
import home from '../assets/svgs/home.svg'
import { Input } from '@mui/joy';
import './App.css';
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Checkoutbody from "./Checkoutbody";



const Checkout = () => {

    return(

      <>
      <div className='checkout'>
        <div className='pagehead'>

          <Header/> 

        </div>

        <div className='checkoutbody'>

        <Checkoutbody/>
          

        </div>  


         <div className='pagefoot'>

          <Footer/>

        </div> 

          

      </div>
      </>
    );
}
export default Checkout;