<script>
import axios from "axios";

export default {
  data: function () {
    return {
      media: [],
      images: [],
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
      <h3>Latest: {{ medium.latest }}</h3>
      <h4>Type: {{ medium.media_type }}</h4>
      <h4>Status: {{ medium.status }}</h4>
      <h4>Images: {{ medium.images }}</h4>
      <router-link v-bind:to="`/media/${medium.id}`">More Info</router-link>
    </div>
  </div>
</template>

<style></style>
