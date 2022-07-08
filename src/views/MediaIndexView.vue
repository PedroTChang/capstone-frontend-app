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
      <h2>Name: {{ medium.name }}</h2>
      <h3>Latest:{{ medium.latest }}</h3>
      <h4>Type: {{ medium.media_type }}</h4>
      <h5>Status: {{ medium.status }}</h5>
      <h6>Images: {{ medium.images }}</h6>
    </div>
  </div>
</template>

<style></style>
