<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
  <div className="App">
    <div class="relative min-h-screen md:flex">
      <div class="bg-gray-800 text-gray-100 flex justify-between md:hidden">
        <a href="#" class="block p-4 text-white font-bold"> Better Dev </a>

        <button
          class="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700"
        >
          <svg
            class="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <div
        class="
          sidebar
          bg-blue-800
          text-blue-100
          w-64
          space-y-6
          py-7
          px-2
          absolute
          inset-y-0
          left-0
          transform
          -translate-x-full
          lg:relative lg:translate-x-0
          transition
          duration-200
          ease-in-out
        "
      >
        <a href="#" class="text-white flex items-center space-x-2 px-4">
          <svg
            class="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
            />
          </svg>
          <span class="text-1xl font-extrabold">Better Dev</span>
        </a>

        <nav>
          <a
            href="#"
            class="
              block
              py-2.5
              px-4
              rounded
              transition
              duration-200
              hover:bg-blue-700 hover:text-white
            "
          >
            Home
          </a>
          <a
            href=""
            class="
              block
              py-2.5
              px-4
              rounded
              transition
              duration-200
              hover:bg-blue-700 hover:text-white
            "
          >
            About
          </a>
          <a
            href=""
            class="
              block
              py-2.5
              px-4
              rounded
              transition
              duration-200
              hover:bg-blue-700 hover:text-white
            "
          >
            Features
          </a>
          <a
            href=""
            class="
              block
              py-2.5
              px-4
              rounded
              transition
              duration-200
              hover:bg-blue-700 hover:text-white
            "
          >
            Pricing
          </a>
        </nav>
      </div>

      <div class="flex-1 p-10 text-2xl font-bold">
        <div class="grid grid-cols-12">
          <div class="col-span-12 lg:col-span-3">
            <div
              class="
                sidebar
                text-blue-800
              "
            >
              <nav>
                <a
                  href="#"
                  class="
                    block
                    py-2.5
                    px-4
                    rounded
                    hover:bg-blue-700 hover:text-white
                  "
                >
                  Home
                </a>
                <a
                  href=""
                  class="
                    block
                    py-2.5
                    px-4
                    rounded
                    hover:bg-blue-700 hover:text-white
                  "
                >
                  About
                </a>
                <a
                  href=""
                  class="
                    block
                    py-2.5
                    px-4
                    rounded
                    hover:bg-blue-700 hover:text-white
                  "
                >
                  Features
                </a>
                <a
                  href=""
                  class="
                    block
                    py-2.5
                    px-4
                    rounded
                    hover:bg-blue-700 hover:text-white
                  "
                >
                  Pricing
                </a>
              </nav>
            </div>
          </div>
          <div class="col-span-12 lg:col-span-9">
            2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
body {
  color: gray;
}
</style>
