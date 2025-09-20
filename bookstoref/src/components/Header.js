import React, { useState } from "react";
import './App.css'
import { Image, Form, FormGroup, Button, Table, ModalFooter } from 'react-bootstrap';
import jbookstorelogo from '../assets/images/jbookstorelogo.png'
import searchalt from '../assets/svgs/searchalt.svg'
import order from '../assets/svgs/order.svg'
import cart from '../assets/svgs/cart.svg'
import home from '../assets/svgs/home.svg'
import search720 from '../assets/svgs/search720.svg'
import search7201 from '../assets/svgs/search7201.svg'
import check720 from '../assets/svgs/check720.svg'
import cart720 from '../assets/svgs/cart720.svg'
import { Input } from '@mui/joy';
import { Link, NavLink, Route, Routes } from 'react-router-dom';




const Header = () => {

  const [openMenu, setOpenMenu] = useState(false);

  const [openSearch, setOpenSearch] = useState(false);

  const handleSearch = () =>{

    if(openSearch===true){
      setOpenSearch(false);
    }else{
      setOpenSearch(true);
    }
  }




    return(

        <>
            {/* header */}


<header class="bg-gray-50">
  <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div class="flex items-center sm:justify-between sm:gap-4">
    <a href="/">
          <span class="sr-only">Prawalabooks</span>
          <img src="https://i.postimg.cc/0NsdbLHP/test-removebg-preview.png" alt="" class="h-8 w-auto"/>
        </a>
      <div class="relative hidden sm:block">
        <label class="sr-only" for="search"> Search </label>

        <input
          class="h-10 w-full rounded-lg border-none bg-white pe-10 ps-4 text-sm shadow-sm sm:w-56"
          id="search"
          type="search"
          placeholder="Search website..."
        />

        <button
          type="button"
          class="absolute end-1 top-1/2 -translate-y-1/2 rounded-md bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
        >
          <span class="sr-only">Search</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>

      <div>

  <select
    name="HeadlineAct"
    id="HeadlineAct"
    class="h-10 w-full rounded-lg border-none bg-white pe-10 ps-4 text-sm shadow-sm sm:w-56"
  >
    <option value="">Select Category</option>
    <option value="">Fantacy</option>
    <option value="">Fiction</option>
    <option value="">Horror</option>
    <option value="">Mystery</option>
    <option value="">Romance</option>
    <option value="">Science</option>
  </select>
</div>

      <div
        class="flex flex-1 items-center justify-between gap-8 sm:justify-end"
      >
        <div class="flex gap-4">
          <button
            type="button"
            class="block shrink-0 rounded-lg bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700 sm:hidden"
          >
            <span class="sr-only">Search</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>

          <a
            href="/"
            class="block shrink-0 rounded-lg bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700"
          >
            <span class="sr-only">Home</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>


          </a>

          <a
  href="/Addtocart"
  class="block shrink-0 rounded-lg bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700"
>
  <span class="sr-only">Cart</span>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
</svg>
</a>

        </div>

        <button
          type="button"
          class="group flex shrink-0 items-center rounded-lg transition"
        >
          <span class="sr-only">Menu</span>
          <img
            alt="Man"
            src="https://img.icons8.com/parakeet/48/gender-neutral-user.png"
            class="h-10 w-10 rounded-full object-cover"
          />

          <p class="ms-2 hidden text-left text-xs sm:block">
            <strong class="block font-medium">Induwara Prawala</strong>

            <span class="text-gray-500"> induwara@prawalabooks.lk </span>
          </p>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="ms-4 hidden h-5 w-5 text-gray-500 transition group-hover:text-gray-700 sm:block"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>

  </div>
</header>
        
        
        </>
    );
}
export default Header;