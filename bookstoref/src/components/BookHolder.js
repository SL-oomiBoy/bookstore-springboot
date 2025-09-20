import React, {useEffect, useState } from "react";
import './App.css';
import cart from '../assets/svgs/cart.svg'
import { FormGroup, Form, Button , Image} from "react-bootstrap";
import { Link } from "react-router-dom";







const BookHolder = ({book}) => {

    const [isVisible, setIsVisible] = useState(false);

    const handleMouseEnter = () => {
        setIsVisible(true);
    };
    
    const handleMouseLeave =() =>{
        setIsVisible(false);
    };



    return(
        <>
        
        <div className="content">
            <FormGroup className="holder">
                <div className="formset">
                    <div className="inner-div">
                        <Form onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='form'>
                            <Image className="holder-image" src={`data:image/png;base64,${book.image}`} alt="image" onError={() =>console.log("Image Loading Error")}></Image>
                            <div className="inner-button">
                                {<Link to={'/Addtocart'} > <Button className="inner-cart"><Image className="inner-carticon" src={cart} alt=""></Image></Button></Link>}
                            </div>
                        </Form>
                    </div>
                        <div className="text">
                            <div>

                                <h5>{book.title}</h5>
                                <h6>{book.auhtor.authorName}</h6>
                                <h6>Rs:{book.price}.00</h6>
                                <h6>{book.isbnNumber}</h6>
                                <h6>{book.description}</h6>
                                <h6>{book.category.name}</h6>
                                <h6>{book.subcategory.name}</h6>
                                {/* <h6>{book.bookID}</h6> */}
                                <h6>{book.subcategory_id}</h6>
                            </div>
                            
                        </div>
                </div>
            </FormGroup>
                            
        </div>

        
        </>

       
        
        
    
    )
}

export default BookHolder;