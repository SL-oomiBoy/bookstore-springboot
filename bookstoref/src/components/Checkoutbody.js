import React from "react";
import './App.css';

const Checkoutbody = () =>{

    return(
        <>

<main class="lg:flex lg:min-h-full lg:flex-row-reverse lg:overflow-hidden">
  <div class="px-4 py-6 sm:px-6 lg:hidden">
    <div class="mx-auto flex max-w-lg">
      <a href="#">
        <span class="sr-only">Your Company</span>
        <img src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" class="h-8 w-auto"/>
      </a>
    </div>
  </div>

  <h1 class="sr-only">Checkout</h1>

  <section aria-labelledby="summary-heading" class="hidden w-full max-w-md flex-col bg-gray-50 lg:flex">
    <h2 id="summary-heading" class="sr-only">Order summary</h2>

    <ul role="list" class="flex-auto divide-y divide-gray-200 overflow-y-auto px-6">
      <li class="flex space-x-6 py-6">
        <img src="https://i.postimg.cc/RV0G4L5Z/download-1.jpg" alt="Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps." class="h-40 w-40 flex-none rounded-md bg-gray-200 object-cover object-center"/>
        <div class="flex flex-col justify-between space-y-4">
          <div class="space-y-1 text-sm font-medium">
            <h3 class="text-gray-900">Harry Potter and the Philosopher's Stone</h3>
            <p class="text-gray-900">RS:1350.00</p>
            <p class="text-gray-500">9780747532699</p>
            <p class="text-gray-500">1</p>
          </div>
        </div>
      </li>


      <li class="flex space-x-6 py-6">
        <img src="https://i.postimg.cc/cJTrxwNd/the-hobbit.webp" alt="Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps." class="h-40 w-40 flex-none rounded-md bg-gray-200 object-cover object-center"/>
        <div class="flex flex-col justify-between space-y-4">
          <div class="space-y-1 text-sm font-medium">
            <h3 class="text-gray-900">The Hobbit</h3>
            <p class="text-gray-900">RS:3299.00</p>
            <p class="text-gray-500">9780547928227</p>
            <p class="text-gray-500">1</p>
          </div>
        </div>
      </li>

    </ul>

    <div class="sticky bottom-0 flex-none border-t border-gray-200 bg-gray-50 p-6">

      <dl class="mt-10 space-y-6 text-sm font-medium text-gray-500">
        <div class="flex justify-between">
          <dt>Subtotal</dt>
          <dd class="text-gray-900">Rs:4649.00</dd>
        </div>
        <div class="flex justify-between">
          <dt class="flex">
            Discount
            <span class="ml-2 rounded-full bg-gray-200 py-0.5 px-2 text-xs tracking-wide text-gray-600">prawalabooks.lk</span>
          </dt>
          <dd class="text-gray-900">-00</dd>
        </div>
        <div class="flex justify-between">
          <dt>Taxes</dt>
          <dd class="text-gray-900">00</dd>
        </div>
        <div class="flex justify-between">
          <dt>Shipping-Enter postal code</dt>
          <dd class="text-gray-900">00</dd>
        </div>
        <div class="flex items-center justify-between border-t border-gray-200 pt-6 text-gray-900">
          <dt class="text-base">Total</dt>
          <dd class="text-base">Rs:4649.00</dd>
        </div>
      </dl>
    </div>
  </section>


  <section aria-labelledby="payment-heading" class="flex-auto overflow-y-auto px-4 pt-12 pb-16 sm:px-6 sm:pt-16 lg:px-8 lg:pt-0 lg:pb-24">
    <div class="mx-auto max-w-lg">
      <div class="hidden pt-10 pb-16 lg:flex">
        <a href="#">
          <span class="sr-only">Prawalabooks</span>
          <img src="https://i.postimg.cc/0NsdbLHP/test-removebg-preview.png" alt="" class="h-8 w-auto"/>
        </a>
      </div>

      <button type="button" class="flex w-full items-center justify-center rounded-md border border-transparent bg-black py-2 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2">
        <span class="sr-only">Pay with Credit/Debit Card</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
</svg>

      </button>

      <div class="relative mt-8">
        <div class="absolute inset-0 flex items-center" aria-hidden="true">
          <div class="w-full border-t border-gray-200"></div>
        </div>
        <div class="relative flex justify-center">
          <span class="bg-white px-4 text-sm font-medium text-gray-500">or</span>
        </div>
      </div>

      <form class="mt-6">
        <div class="grid grid-cols-12 gap-y-6 gap-x-4">
          <div class="col-span-full">
            <label for="email-address" class="block text-sm font-medium text-gray-700">Email address</label>
            <div class="mt-1">
              <input type="email" id="email-address" name="email-address" autocomplete="email" class="block w-full h-10 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
            </div>
          </div>

          <div class="col-span-full">
            <label for="card-number" class="block text-sm font-medium text-gray-700">Phone Number</label>
            <div class="mt-1">
              <input type="text" id="card-number" name="card-number" autocomplete="cc-number" class="block w-full h-10 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
            </div>
          </div>

          <div class="col-span-full">
            <label for="address" class="block text-sm font-medium text-gray-700">Address</label>
            <div class="mt-1">
              <input type="text" id="address" name="address" autocomplete="street-address" class="block w-full h-10 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
            </div>
          </div>

          <div class="col-span-full sm:col-span-4">
            <label for="city" class="block text-sm font-medium text-gray-700">City</label>
            <div class="mt-1">
              <input type="text" id="city" name="city" autocomplete="address-level2" class="block w-full h-10 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
            </div>
          </div>

          <div class="col-span-full sm:col-span-4">
            <label for="region" class="block text-sm font-medium text-gray-700">State / Province</label>
            <div class="mt-1">
              <input type="text" id="region" name="region" autocomplete="address-level1" class="block w-full h-10 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
            </div>
          </div>

          <div class="col-span-full sm:col-span-4">
            <label for="postal-code" class="block text-sm font-medium text-gray-700">Postal code</label>
            <div class="mt-1">
              <input type="text" id="postal-code" name="postal-code" autocomplete="postal-code" class="block w-full h-10 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
            </div>
          </div>
        </div>

        <div class="mt-6 flex space-x-2">
          <div class="flex h-5 items-center">
            <input id="same-as-shipping" name="same-as-shipping" type="checkbox" checked class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
          </div>
          <label for="same-as-shipping" class="text-sm font-medium text-gray-900">Billing address is the same as shipping address</label>
        </div>

        <div class="mt-6 flex space-x-2">
          <div class="flex h-5 items-center">
            <input id="" name="" type="checkbox" checked class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
          </div>
          <label for="s" class="text-sm font-medium text-gray-900">Create an account and Send passowrd via Email</label>
        </div>

        <button type="submit" class="mt-6 w-full rounded-md border border-transparent bg-emerald-600 hover:bg-emerald-700 py-2 px-4 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Pay Rs:4649.00</button>

        <p class="mt-6 flex justify-center text-sm font-medium text-gray-500">

          <svg class="mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
          </svg>
          <b>Prawalabooks.lk</b>_Value Your Privacy
        </p>
      </form>
    </div>
  </section>
</main>

        
        </>
    );
}
export default Checkoutbody;