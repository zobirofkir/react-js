import React from 'react'

function Footer() {
  return (
      <footer class="bg-black rounded-lg shadow m-4">
          <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span class="text-sm text-gray-500 sm:text-center text-white">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.
          </span>
          <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
              <li>
                  <a href="#" class="hover:underline me-4 md:me-6 text-white">About</a>
              </li>
              <li>
                  <a href="#" class="hover:underline me-4 md:me-6 text-white">Privacy Policy</a>
              </li>
              <li>
                  <a href="#" class="hover:underline me-4 md:me-6 text-white">Licensing</a>
              </li>
              <li>
                  <a href="#" class="hover:underline text-white">Contact</a>
              </li>
          </ul>
          </div>
      </footer>
  )
}

export default Footer