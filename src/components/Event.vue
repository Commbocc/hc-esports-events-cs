<script setup lang="ts">
import { breakpointsBootstrapV5, useBreakpoints } from "@vueuse/core";
import { events } from "../lib/events";

const breakpoints = useBreakpoints(breakpointsBootstrapV5);

const smAndLarger = breakpoints.greater("sm");
</script>

<template>
  <div class="table-responsive">
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
            {{ new Date(event.fields.DateTime).toLocaleDateString("en-US") }},
            {{ new Date(event.fields.DateTime).toLocaleTimeString("en-US") }}
          </td>
          <td>{{ event.fields.LocationName[0] }}</td>
          <td>{{ event.fields.Description }}</td>
          <td>
            <a href="{{event.fields.Link}}">{{ event.fields.Link }}</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
