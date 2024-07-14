<template>
  <div class="w-full md:w-1/2 p-0 md:pr-4">
    <div class="w-full mb-8">
      <h2
        class="text-xl md:text-2xl font-bold text-aradFontPink border-l-[5px] border-aradDirtyGold pl-2 mb-4"
      >
        Who Am I?
      </h2>
      <p class="text-md text-[--color-heading] text-justify">
        {{ user.description[0] }}
      </p>
      <p class="text-md text-[--color-heading] text-justify">
        {{ user.description[1] }}
      </p>
    </div>
  </div>
</template>
<script setup>
defineProps({
  user: {
    type: Object,
    required: true,
  },
});
</script>
