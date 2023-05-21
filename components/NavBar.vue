<template>
  <nav class="border border-red-500 w-full">
    <div class="flex flex-row items-center justify-between py-6 w-full">
      <div class="flex flex-row justify-between items-center space-x-2">
        <div>
          <NuxtLink to="/">
            <span
              class="
                self-center
                text-xl
                font-semibold
                uppercase
                whitespace-nowrap
                sm:text-2xl
                mr-4
                text-primary-600
              "
              >Astro</span
            ></NuxtLink
          >
          <ul class="flex flex-row items-center justify-center space-x-2">
            <li>
              <UButton
                icon="i-heroicons-home"
                size="lg"
                color="gray"
                variant="ghost"
                label="Dashboard"
                @click.prevent="navigateTo('/')"
                :trailing="false"
              />
            </li>
            <li>
              <UDropdown
                class="cursor-pointer"
                :items="items"
                :popper="{ placement: 'bottom-start' }"
              >
                <UButton
                  icon="i-heroicons-user-circle"
                  size="lg"
                  color="gray"
                  variant="ghost"
                  label="Account"
                  :trailing="false"
                />
              </UDropdown>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <UButton
                icon="i-heroicons-arrow-right-on-rectangle-20-solid"
                size="lg"
                color="gray"
                variant="ghost"
                label="Support"
                :trailing="false"
                @click="navigateTo('/support')"
              />
            </li>
            <li>
              <UButton
                icon="i-heroicons-arrow-right-on-rectangle-20-solid"
                size="lg"
                color="gray"
                variant="ghost"
                label="Sign out"
                :trailing="false"
                @click.prevent="signout()"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
<script setup lang="ts">
const toast = useToast();
const items = [
  [
    {
      label: 'Profile',
      avatar: {
        src: 'https://avatars.githubusercontent.com/u/739984?v=4',
      },
      to: '/profile',
    },
  ],
  [
    {
      label: 'Appointments',
      icon: 'i-heroicons-calendar-days-20-solid',
      to: '/appointments',
    },
  ],
  [
    {
      label: 'Support',
      icon: 'i-heroicons-question-mark-circle-20-solid',
      to: '/support',
    },
  ],
];

function signout() {
  toast.add({ title: 'Bye!' });
}
</script>
```
