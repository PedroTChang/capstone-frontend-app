<script>
import axios from "axios";

export default {
  data: function () {
    return {
      medium: {},
      images: {},
    };
  },
  created: function () {
    axios.get("/media/" + this.$route.params.id + ".json").then((response) => {
      console.log("media show", response);
      this.medium = response.data;
    });
  },
  methods: {},
};
</script>

<template>
  <div class="media-show">
    <h1>{{ medium.name }}</h1>
    <img v-bind:src="medium.images[0].url" v-bind:alt="images.id" />
    <h3>{{ medium.media_type }}</h3>
    <div>{{ medium.synopsis }}</div>
    <router-link to="/media/">Back to media</router-link>
  </div>
</template>

<style></style>
