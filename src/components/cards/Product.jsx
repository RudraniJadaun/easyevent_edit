import React from 'react'

function Product() {
  return (
    <>
      <div class="lg:pt-32">
        <div class="px-4 py-16 sm:mx-auto sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 class="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

          <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <div class="group relative">
              <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img src="" alt="" />
              </div>
              <div class="mt-4 flex justify-between">
                <div>
                  <h2 className='font-bold text-lg'>Shiv Ashoka</h2>
                  <p class="mt-1 text-sm text-gray-500">Nearby Indian Oil</p>
                  <small>45646646</small>
                </div>
                <p class="text-sm font-medium text-gray-900">4.2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product
