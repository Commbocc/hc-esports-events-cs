<script setup lang="ts">
import { events, fetchEvents } from "./lib/events";
import Events from "./components/Events.vue";

fetchEvents();

const containerClass = import.meta.env.DEV
  ? "py-5 container"
  : "container-fluid pt-2";
</script>

<template>
  <div v-if="events.loading" class="d-flex justify-content-center">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>

  <article v-else :class="containerClass">
    <Events />
  </article>
</template>
