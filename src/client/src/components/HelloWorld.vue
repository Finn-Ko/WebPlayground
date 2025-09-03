<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>

<script language="ts" setup>
import axios from "axios";
import { onMounted, ref } from "vue";

const message = ref("");

onMounted(async () => {
  try {
    const response = await axios.get(`http://localhost:3000/api/message`);
    message.value = response.data.message;
  } catch (error) {
    console.error("Error fetching message:", error);
  }
});
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>
