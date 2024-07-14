<!-- <script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

interface User {
  id: number;
  name: string;
  profilePicture: string;
  title: string;
  description: string;
  contact: {
    phone: string[];
    address: string[];
    telephone: string;
  };
  videos: string[];
  pictures: string[];
}

const route = useRoute();
const user = ref<User | null>(null);

const fetchUser = async () => {
  const data = await import("~/server/data.json");
  user.value =
    data.users.find((u: User) => u.id === Number(route.params.id)) || null;
};

onMounted(fetchUser);
</script> -->

<script setup>
import data from "../../server/data.json";
const user = data.users[0];
</script>

<!-- 
<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useRoute } from "vue-router";

interface User {
  id: number;
  name: string;
  profilePicture: string;
  title: string;
  description: string;
  contact: {
    phone: string[];
    address: string[];
    telephone: string;
  };
  videos: string[];
  pictures: string[];
}

export default defineComponent({
  setup() {
    const route = useRoute();
    const user = ref<User | null>(null);

    const fetchUser = async () => {
      const data = await import("~/server/data.json");
      user.value =
        data.users.find((u: User) => u.id === Number(route.params.id)) || null;
    };

    onMounted(fetchUser);

    return { user };
  },
});
console.log(user.value);
</script> -->

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
