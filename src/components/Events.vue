<script setup lang="ts">
import { events } from "../lib/events";
</script>

<template>
  <p v-if="!events.data.length">There are currently no events scheduled.</p>

  <div v-else class="table-responsive">
    <!-- <pre>{{ events }}</pre> -->

    <table class="table">
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
            {{
              event.fields?.DateTime
                ? new Date(event.fields?.DateTime).toLocaleString()
                : null
            }}
          </td>

          <td>
            <a :href="`${event.fields.LocationUrl}`" target="_top"
              >{{ event.fields.LocationName?.[0] }}
            </a>
          </td>

          <td>
            {{ event.fields.Description }}
          </td>

          <td>
            <a
              class="btn btn-primary"
              :href="`${event.fields.Link}`"
              target="_blank"
              >Register</a
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
