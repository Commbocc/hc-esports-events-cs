<script setup lang="ts">
import { events } from "../lib/events";
</script>

<template>
  <p v-if="!events.data.length">There are currently no events scheduled.</p>

  <div class="card mb-3" v-for="(event, i) in events.data" :key="i">
    <h5 class="card-header">{{ event.fields.Name }}</h5>
    <div class="card-body">
      <h5 class="card-title">
        <a :href="`${event.fields.NewUrl}`" target="_top"
          >{{ event.fields.LocationName?.[0] }}
        </a>
        |
        {{
          event.fields?.DateTime
            ? new Date(event.fields?.DateTime).toLocaleString("en-US", {
                hour12: true,
                year: "numeric",
                month: "numeric",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
              })
            : null
        }}
      </h5>
      <p class="card-text">{{ event.fields.Description }}</p>
      <a class="btn btn-primary" :href="`${event.fields.Link}`" target="_blank"
        >Register</a
      >
    </div>
  </div>
</template>
