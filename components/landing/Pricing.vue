<script setup>
  defineProps(["plan"]);
</script>

<template>
  <div>
    <div
      class="rounded-xl divide-y divide-gray-200 dark:divide-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 shadow bg-white dark:bg-gray-900 relative flex flex-col self-stretch w-full">

      <div class="flex-1 flex flex-col gap-y-6 sm:p-6 p-8 xl:p-10">

        <div>
          <div class="flex items-center justify-between">
            <p class="text-2xl text-gray-900 dark:text-white sm:text-3xl font-semibold truncate">
              {{ plan.name }}
            </p>

          </div>
          <p class="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-2">
            {{ plan.subText }}
          </p>
        </div>
        <div class="flex flex-row items-baseline gap-x-1">

          <p class="text-gray-900 dark:text-white text-2xl sm:text-4xl font-semibold">
            {{
            plan.price && typeof plan.price === "object"
              ? plan.price.monthly
              : plan.price
          }}
          </p>
        </div>
        <div class="order-last flex-1">
          <!--[-->
          <ul class="space-y-1 text-sm">
            <li class="flex items-center gap-x-3" v-for="item of plan.features">
              <Icon class="h-8 md:h-14 text-green-500" name="uil:angle-double-right" size="48" />
              <span class="text-gray-600 dark:text-gray-400">{{ item }}</span></li>
           
          </ul>
        </div>
        <LandingButton :href="plan.button.link || '#'" block :styleName="plan.popular ? 'primary' : 'outline'">
          {{ plan.button.text || "Get Started" }}
        </LandingButton>
      </div>
    </div>


  </div>
</template>