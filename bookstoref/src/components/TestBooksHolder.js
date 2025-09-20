import React, { useState } from "react";
import './App.css';
import { FormGroup, Form, Button , Image} from "react-bootstrap";
import cart from '../assets/svgs/cart.svg'
import { Link } from "react-router-dom";
import blob1 from '../assets/images/blob1.png'




const TestBooksHolder = () =>{

    const [isVisible, setIsVisible] = useState(false);

const handleMouseEnter = () => {
    setIsVisible(true);
};

const handleMouseLeave =() =>{
    setIsVisible(false);
};
    return(

        <FormGroup className="holder">
                <div className="formset">
                    <div className="inner-div">

                        
                        <Form onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='form'>
                            
                            <Image className="holder-image" src={blob1} alt="image" onError={() =>console.log("Image Loading Error")}></Image>
                            <div className="inner-button">
                                {<Link to={'/Addtocart'} > <Button className="inner-cart"><Image className="inner-carticon" src={cart} alt=""></Image></Button></Link>}
                            </div>
                           

                        </Form>
                            
                    </div>

                        <div className="text">
                            <div>

                                <h5>Title</h5>
                                <h6>Author</h6>
                                <h6>Category</h6>
                                <h6>Subcategory</h6>
                                <h6>Price</h6>
                                <p>Desctiption</p>

                            </div>

                        </div>
                </div>
            </FormGroup>
        
    );
    


}
export default TestBooksHolder;