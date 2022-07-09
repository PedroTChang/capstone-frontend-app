<script>
import axios from "axios";

export default {
  data: function () {
    return {
      media: [],
      images: [],
      newTrackerParams: {},
      trackers: [],
      currentTracker: {},
    };
  },
  created: function () {
    this.indexMedia();
    this.showTrackers();
  },
  methods: {
    indexMedia: function () {
      axios.get("/media" + ".json").then((response) => {
        console.log("media index", response);
        this.media = response.data;
      });
    },
    showTrackers: function () {
      axios.get("/trackers" + ".json").then((response) => {
        console.log("trackers index", response);
        this.trackers = response.data;
      });
    },
    newTracker: function (medium) {
      var tracker = {
        medium_id: medium.id,
        current: this.newTrackerParams.current,
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
  },
};
</script>

<template>
  <div class="media-index">
    <div id="trackers">
      <h1>Trackers</h1>
      <div v-for="tracker in trackers" v-bind:key="tracker.id">
        <h2>Name: {{ tracker.name }}</h2>
        <h3>Latest: {{ tracker.latest }}</h3>
        <h4>Type: {{ tracker.media_type }}</h4>
        <h4>Status: {{ tracker.status }}</h4>
        <h4>Progress: {{ tracker.progress }}</h4>
        <h4>Current: {{ tracker.current }}</h4>
      </div>
    </div>
    <div>
      <h1>Media</h1>
      <div v-for="medium in media" v-bind:key="medium.id">
        <h2>Name: {{ medium.name }}</h2>
        <h3>Latest: {{ medium.latest }}</h3>
        <h4>Type: {{ medium.media_type }}</h4>
        <h4>Status: {{ medium.status }}</h4>
        <h4>Images: {{ medium.images }}</h4>
        <div>
          <router-link v-bind:to="`/media/${medium.id}`">More Info</router-link>
          Current:
          <input type="text" v-model="newTrackerParams.current" />
          <button v-on:click="newTracker(medium)">Create Tracker</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
