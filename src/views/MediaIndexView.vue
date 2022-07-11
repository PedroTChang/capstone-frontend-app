<script>
import axios from "axios";

export default {
  data: function () {
    return {
      media: [],
      images: [],
      trackers: [],
      newTrackerParams: {},
      editTrackerParams: {},
      currentTracker: {},
    };
  },
  created: function () {
    this.indexMedia();
    this.indexTracker();
  },
  methods: {
    indexMedia: function () {
      axios.get("/media" + ".json").then((response) => {
        console.log("media index", response);
        this.media = response.data;
      });
    },
    indexTracker: function () {
      axios.get("/trackers" + ".json").then((response) => {
        console.log("trackers index", response);
        this.trackers = response.data;
      });
    },
    createTracker: function (medium) {
      var tracker = {
        medium_id: medium.id,
        current: medium.current,
        progress: medium.progress,
      };
      axios
        .post("/trackers.json", tracker)
        .then((response) => {
          console.log("tracker create", response);
          this.trackers.push(response.data);
          this.newTrackerParams = {};
        })
        .catch((error) => {
          console.log("trackers create error", error.response);
        });
    },
    showTracker: function (tracker) {
      tracker.isEdit = true;
    },
    updateTracker: function (tracker) {
      axios
        .patch("/trackers/" + tracker.id + ".json", tracker)
        .then((response) => {
          console.log("trackers edit", response);
          tracker.isEdit = false;
        })
        .catch((error) => {
          console.log("trackers update error", error.response);
        });
    },
  },
};
</script>

<template>
  <div class="media-index">
    <h1>Trackers</h1>
    <div v-for="tracker in trackers" v-bind:key="tracker.id">
      <h2>{{ tracker.name }}</h2>
      <h3>Latest: {{ tracker.latest }}</h3>
      <h3>Type: {{ tracker.media_type }}</h3>
      <h3>Status: {{ tracker.status }}</h3>
      <div v-if="!tracker.isEdit">
        <h3>Progress: {{ tracker.progress }}</h3>
        <h3>Current: {{ tracker.current }}</h3>
        <button v-on:click="showTracker(tracker)">Tracker</button>
      </div>
      <div v-if="tracker.isEdit">
        Current:
        <input type="text" v-model="tracker.current" />
        Progress:
        <input type="text" v-model="tracker.progress" />
        <button v-on:click="updateTracker(tracker)">Edit Tracker</button>
      </div>
    </div>
    <div>
      <h1>Media</h1>
      <div v-for="medium in media" v-bind:key="medium.id">
        <h2>{{ medium.name }}</h2>
        <h3>Latest: {{ medium.latest }}</h3>
        <!-- <h3>Type: {{ medium.media_type }}</h3> -->
        <h3>Status: {{ medium.status }}</h3>
        <div>
          <router-link v-bind:to="`/media/${medium.id}`">More Info</router-link>
          Current:
          <input type="text" v-model="medium.current" />
          Progress:
          <input type="text" v-model="medium.progress" />
          <button v-on:click="createTracker(medium)">Create Tracker</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
