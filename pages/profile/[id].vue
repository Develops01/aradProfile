<script setup>
const route = useRoute();
const pageId = +route.params.id.slice(1, -1);
import data from "../../server/data.json";
const user = data.users[pageId];
</script>

<template>
  <div v-if="user">
    <Profile :user="user" />
    <div class="w-full flex justify-center p-4 md:p-0">
      <div class="w-full md:w-4/5 flex flex-wrap items-start">
        <AboutMe :user="user" />
        <ContactMe :user="user" />
      </div>
    </div>
    <MyVideos :user="user" />
    <MyPhotos :user="user" />
  </div>
</template>
