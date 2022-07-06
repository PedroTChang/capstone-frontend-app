<script>
import axios from "axios";
export default {
  data: function () {
    return {
      trackers: [],
      newTrackerParams: {},
      editTrackerParams: {},
      currentTracker: {},
    };
  },
  created: function () {
    this.indexTrackers();
  },
  methods: {
    indexTrackers: function () {
      axios.get("/trackers").then((response) => {
        console.log("trackers index", response);
        this.trackers = response.data;
      });
    },
    createTracker: function () {
      axios
        .post("/trackers", this.newTrackerParams)
        .then((response) => {
          console.log("trackers create", response);
          this.trackers.push(response.data);
          this.newTrackerParams = {};
        })
        .catch((error) => {
          console.log("trackers create error", error.response);
        });
    },
    showTracker: function (tracker) {
      this.currentTracker = tracker;
      this.editTrackerParams = tracker;
      document.querySelector("#Tracker-details").showModal();
    },
    updateTracker: function (tracker) {
      axios
        .patch("/trackers/" + tracker.id, this.editTrackerParams)
        .then((response) => {
          console.log("trackers update", response);
          this.currentTracker = {};
        })
        .catch((error) => {
          console.log("trackers update error", error.response);
        });
    },
    destroyTracker: function (tracker) {
      axios.delete("/trackers/" + tracker.id).then((response) => {
        console.log("trackers destroy", response);
        var index = this.trackers.indexOf(tracker);
        this.trackers.splice(index, 1);
      });
    },
  },
};
</script>

<template>
  <div class="home">
    <h1>New Tracker</h1>
    <div>
      Name:
      <input type="text" v-model="newTrackerParams.name" />
      Width:
      <input type="text" v-model="newTrackerParams.width" />
      Height:
      <input type="text" v-model="newTrackerParams.height" />
      Url:
      <input type="text" v-model="newTrackerParams.url" />
      <button v-on:click="createTracker()">Create Tracker</button>
    </div>
    <h1>All Trackers</h1>
    <div v-for="tracker in trackers" v-bind:key="tracker.id">
      <h2>{{ tracker.name }}</h2>
      <img v-bind:src="tracker.url" v-bind:alt="tracker.name" />
      <p>Width: {{ tracker.width }}</p>
      <p>Height: {{ tracker.height }}</p>
      <button v-on:click="showTracker(tracker)">More info</button>
    </div>
    <dialog id="Tracker-details">
      <form method="dialog">
        <h1>Tracker info</h1>
        <p>
          Name:
          <input type="text" v-model="editTrackerParams.name" />
        </p>
        <p>
          Width:
          <input type="text" v-model="editTrackerParams.width" />
        </p>
        <p>
          Height:
          <input type="text" v-model="editTrackerParams.height" />
        </p>
        <p>
          Url:
          <input type="text" v-model="editTrackerParams.url" />
        </p>
        <button v-on:click="updateTracker(currentTracker)">Update</button>
        <button v-on:click="destroyTracker(currentTracker)">Destroy Tracker</button>
        <button>Close</button>
      </form>
    </dialog>
  </div>
</template>

<style></style>
