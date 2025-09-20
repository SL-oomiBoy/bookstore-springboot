import React from "react";
import './App.css';
import { useState , useEffect} from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import BookHolder from "./BookHolder";
import { Link } from "react-router-dom";
import Bookpreview from "./Bookpreview";





const Carousel = ()=> {

  const [books, setBooks] = useState(null);


  useEffect(() =>{

      const loadData = async () => {


        try {
          
          const response = await axios.get('http://localhost:8080/books');

          if(response.status === 200){
              setBooks(response.data);
          }

        } catch (error) {
          console.error('Error Found No Books',error);
        }
      
         
       
          
      };

      loadData();
         



  }, []);
  

  var settings = {
    infinite:true,
    speed: 4000,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 1700,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const [selectedItem,setSelectedItem] = useState(null);



    return (
        <>
        <div className="carousel" >
           
            <div className="slide" >
              

            {
                  books ? (
                    (
                      
                      <div>
                      <Slider {...settings}>
                        
                        {books.map((book,index,bookID) => (
                          <>
                            <Link to={`/book/${book.bookID}`} key={book.bookID}>
                            <BookHolder key={bookID} book={book}/>

                            {/* <h2>{index}</h2> */}
                            </Link>

                            <Bookpreview book = {book}/>
                            </>
                        ))} 
                        
                        </Slider>
                        
                        </div>
                        
                    )
                  ) : 'no books'
                        
                }
                
            </div>
            
        </div>

          <div className="xtra"></div>

        

        <div className="xtra"></div>


        <div className="carousel">
                    
            <div className="slide">

            <Slider>
            {/* {bookset} */}
            </Slider>
           
      

            </div>
                    
        </div>

        <div className="xtra"></div>


        <div className="carousel">
                    
            <div className="slide">
                
            <Slider >
            {/* {bookset} */}
            </Slider>
           
        
               
            </div>
                
        </div>

        <div className="xtra"></div>


          <div className="carousel">
                    
            <div className="slide">
                
            <Slider >
            {/* {bookset} */}
            </Slider>
           
            
                
            </div>
            
          </div>

          <div className="xtrae"></div>
    </>
    );

}
export default Carousel;