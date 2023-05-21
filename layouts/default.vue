<template>
  <div>
    <div class="bg-gray-100 dark:bg-gray-800">
      <div
        class="
          max-w-4xl
          flex flex-col
          min-h-screen
          px-4
          mx-auto
          overflow-x-hidden
          sm:px-10
        "
      >
        <header class="flex-none sm:px-12">
          <NavBar />
        </header>

        <main class="flex-grow sm:px-12">
          <slot />
        </main>
      </div>
    </div>
  </div>
</template>
