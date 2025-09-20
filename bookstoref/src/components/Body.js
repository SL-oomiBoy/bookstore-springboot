import React from "react";
import BookHolder from "./BookHolder";
import TestBooksHolder from "./TestBooksHolder";
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css'
import Slider from "react-slick";
import Carousel from "./Carousel";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";






const Body = () => {

  
 

    // axios.get('http://localhost:8080/books')
    //     .then(response=>{
    //       setBooks(response.data);
    //     })
    //     .catch(error=>{console.error('loding error',error);})
    

    return(

        <>
        <body>

<section
  class="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center"
>
  <div class="p-8 md:p-12 lg:px-16 lg:py-24">
    <div
      class="mx-auto max-w-xl text-left ltr:sm:text-left rtl:sm:text-right"
    >
      <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
        10% Of Discount for Any of Our Fantacy Books
      </h2>

      <p class="hidden text-gray-500 md:mt-4 md:block">
      Browse our wide selection of fantasy books today, including bestsellers, new releases, and classics. We have something for everyone, from epic adventures to heartwarming tales. Stock up on your favorite books or discover new authors with our 10% off discount.

      </p>

      <div class="mt-4 md:mt-8">
        <a
          href="#"
          class="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Get Started Today
        </a>
      </div>
    </div>
  </div>

  <img
    alt="Read"
    src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0"
    class="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
  />
</section>

          
            <div className='body-container'>

              <div className='bcontainer'>
              
              <Carousel/>

              </div>
              
            </div>
            
            
          </body>
        
        </>
    );
}

export default Body;