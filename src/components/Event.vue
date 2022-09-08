<script setup lang="ts">
import { events } from "../lib/events";
</script>

<template>
  <p v-if="!events.data.length">There are currently no events scheduled.</p>

  <table v-else class="table">
    <thead>
      <tr>
        <th>Tournament/Event</th>
        <th>Date</th>
        <th>Location</th>
        <th>Description</th>
        <th>Registration Link</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="(event, i) in events.data" :key="i">
        <td>{{ event.fields.Name }}</td>

        <td>
          {{ new Date(event.fields.DateTime).toLocaleDateString("en-US") }},
          {{
            new Date(event.fields.DateTime).toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "2-digit",
            })
          }}
        </td>

        <td>
          <a :href="`${event.fields.LocationUrl}`">{{
            event.fields.LocationName[0]
          }}</a>
        </td>

        <td>{{ event.fields.Description }}</td>

        <td>
          <a class="btn btn-primary" :href="`${event.fields.Link}`">Register</a>
        </td>
      </tr>
    </tbody>
  </table>
</template>
