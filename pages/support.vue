<template>
  <div
    class="flex flex-col justify-center min-h-full px-6 py-12 lg:px-8 w-full"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2
        class="
          mt-10
          text-2xl
          font-bold
          leading-9
          tracking-tight
          text-center text-gray-900
          dark:text-gray-200
        "
      >
        Support
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <h3
        class="
          mt-10
          text-lg
          font-bold
          leading-9
          tracking-tight
          text-center text-gray-900
          dark:text-gray-200
        "
      >
        How can we help?
      </h3>
      <FormKit
        type="form"
        autocomplete="support-form"
        id="support-form"
        submit-label="Submit Request"
        @submit="handleSubmitSupportRequest"
        :actions="false"
        #default="{ value }"
        class="space-y-6"
      >
        <div class="mt-2.5">
          <FormKit
            id="issue_category"
            name="issue_category"
            type="select"
            label="Issue Category"
            validation="required"
            help="What area are you having problems with?"
            :options="[
              'Rescheduling',
              'Medication Refills',
              'Billing',
              'Technical Issues',
            ]"
          />
        </div>
        <div class="mt-2.5">
          <FormKit
            id="subject"
            name="subject"
            type="text"
            label="Subject"
            validation="required"
            help="Please provide a short headline for your issue"
          />
        </div>
        <div class="mt-2.5">
          <FormKit
            id="description"
            name="description"
            type="textarea"
            label="Description"
            validation="required"
            help="Please describe your problem in detail"
          />
        </div>
        <div class="mt-2.5">
          <FormKit
            id="contact_preference"
            name="contact_preference"
            type="radio"
            label="Contact Preference"
            validation="required"
            help="Please select how you'd like to be contacted"
            :options="['Email', 'Phone Call']"
          />
        </div>
        <div class="mt-2.5 py-6">
          <h3>Attachments</h3>
          <p class="text-sm dark:text-gray-400 mb-4">
            Upload up to 3 screenshots that might be relevant to the issue that
            you're facing
          </p>
          <UButton
            icon="i-heroicons-plus-solid"
            size="xl"
            color="gray"
            square
            variant="outline"
          />
        </div>
        <div class="mt-2.5">
          <FormKit type="submit" label="Submit Request" />
        </div>
      </FormKit>

      <p class="mt-10 text-sm text-center text-gray-500">
        Have other questions? Reach out to us
        <NuxtLink
          to="/contact"
          class="
            font-semibold
            leading-6
            text-primary-600
            hover:text-primary-500
          "
        >
          here
        </NuxtLink>
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
function handleSubmitSupportRequest() {
  console.log('awesome');
}
</script>
