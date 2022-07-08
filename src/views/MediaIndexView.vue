<script>
import axios from "axios";

export default {
  data: function () {
    return {
      media: [],
    };
  },
  created: function () {
    this.indexMedia();
  },
  methods: {
    indexMedia: function () {
      axios.get("/media" + ".json").then((response) => {
        console.log("media index", response);
        this.media = response.data;
      });
    },
  },
};
</script>

<template>
  <div class="media-index">
    <h1>Media</h1>
    <div v-for="medium in media" v-bind:key="medium.id">
      <h2>{{ medium.name }}</h2>
    </div>
  </div>
</template>

<style></style>
