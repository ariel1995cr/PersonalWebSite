<template>
  <div>
    <nav class="flex bg-white flex-wrap items-center justify-between p-4">
      <div class="lg:order-2 w-auto lg:w-1/5 lg:text-center">
        <a class="text-xl text-gray-800 font-semibold font-heading" href="#">
          {{ $t('Hi') }}
        </a>
      </div>
      <div class="block lg:hidden">
        <button
          class="navbar-burger flex items-center py-2 px-3 text-indigo-500 rounded border border-indigo-500"
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
      </div>
      <div class="navbar-menu hidden lg:order-1 lg:block w-full lg:w-2/5">
        <NuxtLink
          class="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-black"
          to="/"
        >
          Home
        </NuxtLink>
        <NuxtLink
          class="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-black"
          to="/about"
        >
          About me
        </NuxtLink>
        <NuxtLink
          class="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-black"
          to="/projects"
        >
          Projects
        </NuxtLink>
      </div>
      <div
        class="navbar-menu hidden lg:order-3 lg:block w-full lg:w-2/5 lg:text-right"
      >
        <NuxtLink
          class="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-black"
          to="/resume"
        >
          Resume
        </NuxtLink>
      </div>
    </nav>
    <Nuxt />
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

a.nuxt-link-active {
  font-weight: bold;
}
/* exact link will show the primary color for only the exact matching link */
a.nuxt-link-exact-active {
  color: #00c58e;
}
</style>
