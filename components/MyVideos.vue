<template>
  <div class="w-full flex justify-center p-4 md:p-0">
    <div class="w-full md:w-4/5 flex flex-wrap items-start">
      <div class="w-full mb-4">
        <h2
          class="text-xl md:text-2xl font-bold text-aradPink border-l-[5px] border-aradDirtyGold pl-2 mb-4"
        >
          My Videos and Tutorials
        </h2>

        <div class="w-full flex flex-wrap gap-[1%]">
          <div
            v-for="video in user.videos"
            key="video"
            class="w-[49%] md:w-[32%] h-32 md:h-52 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out rounded-md mb-[1%]"
          >
            <video
              preload="metadata"
              controls=""
              :src="video"
              class="w-full h-full object-cover rounded-md border-b-2 border-aradDirtyGold"
            ></video>
          </div>
        </div>
      </div>
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
