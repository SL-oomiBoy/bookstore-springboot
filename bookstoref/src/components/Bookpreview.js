import React, { useEffect, useState } from "react";
import './App.css'
import { useParams } from "react-router-dom";
import axios from "axios";




const Bookpreview =()=>{

  const {bookID} = useParams();

  const [book,setBook] = useState(null);

    useEffect(()=>{

      axios.get(`/books/${bookID}`)
        .then(response=>{
          setBook(response.data);
        })
        .catch(error=>{console.error('loding error',error);})


    },[bookID])
  
      

      return (
        <>
          
          {book ? (

           
              <>
              <div className="bprev">
              <img src={`data:image/png;base64,${book.image}`}></img>
            
                <h1>{book.title}</h1>
                <h1>{}</h1>
            
                </div>
              </>

            
            
            
            ):("")}
          
            
          
        </>
      );


}
export default Bookpreview;