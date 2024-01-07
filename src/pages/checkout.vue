<template>
  <main class="px-4 py-10">
    <div
      class="max-w-[1440px] mx-auto flex flex-col md:flex-row gap-5 md:gap-x-10"
    >
      <section class="w-full h-fit md:w-1/2 rounded-lg bg-gray-50 shadow px-4">
        <h1 class="py-4 border-b-[2px] border-b-gray-100 font-medium text-xl">
          Shopping Cart
        </h1>
        <div class="py-4">
          <CheckoutItem />
        </div>
      </section>
      <section class="w-full md:w-1/2 flex flex-col gap-5 h-fit">
        <div class="rounded-lg bg-gray-50 shadow px-4">
          <h1 class="py-4 border-b-[2px] border-b-gray-100 font-medium text-xl">
            Delivery Info
          </h1>
          <div class="py-4 space-y-4">
            <!-- <div class="flex items-start gap-x-4">
              <GlobalInput label="First Name*" />
              <GlobalInput label="Last Name*" />
            </div> -->
            <GlobalInput label="Address*" />
            <div class="flex items-start gap-x-4">
              <GlobalInput label="City*" />
              <GlobalInput label="State*" />
            </div>
            <!-- <div class="flex items-start gap-x-4">
              <GlobalInput label="Zip*" />
              <GlobalInput label="Phone*" />
            </div> -->
          </div>
        </div>
        <div>
          <GlobalButton grow text="make order" />
        </div>
      </section>
    </div>
  </main>
</template>
