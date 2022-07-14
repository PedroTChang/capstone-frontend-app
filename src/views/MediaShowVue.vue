<script>
import axios from "axios";

export default {
  data: function () {
    return {
      medium: {},
      images: {},
      trackers: [],
      newTrackerParams: {},
      isLoggedIn: false,
      currentTracker: {},
    };
  },
  created: function () {
    axios.get("/media/" + this.$route.params.id + ".json").then((response) => {
      console.log("media show", response);
      this.medium = response.data;
    });
  },
  watch: {
    $route: function () {
      this.isLoggedin = !!localStorage.jwt;
    },
  },
  methods: {
    createTracker(medium) {
      this.$emit("Successfully Added");
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
  },
};
</script>

<template>
  <div class="container mt-100 mt-60">
    <div class="row justify-content-center">
      <div class="col-12">
        <div class="section-title text-center mb-4 pb-2">
          <h6 class="text-primary"></h6>
          <h4 class="title mb-3 mt-2">{{ medium.name }}</h4>
        </div>
      </div>
      <!--end col-->
    </div>
    <!--end row-->

    <div class="row justify-content-center my-4 py-2">
      <div class="col-md-6">
        <img
          v-bind:src="medium.images[0].url"
          v-bind:alt="images.id"
          class="img-fluid"
        />
      </div>
      <!--end col-->
    </div>
    <!--end row-->

    <div class="row justify-content-center">
      <div class="col-lg-3 col-md-6 mt-4 pt-2">
        <div class="text-center" v-if="!isLoggedin">
          <h5 class="text-muted mb-0"></h5>
          <h2 class="mb-0 display-5 mt-4 fw-bold text-primary">
            <span class="counter-value" data-target="2021"
              ><router-link
                class="btn btn-primary btn-lg"
                v-on:click="createTracker(medium)"
                router-link
                to="/"
                >Track</router-link
              ></span
            >
          </h2>
        </div>
      </div>
      <!--end col-->

      <div class="col-lg-3 col-md-6 mt-4 pt-2">
        <div class="text-center">
          <h5 class="text-muted mb-0">Media Type</h5>
          <h2 class="mb-0 display-5 mt-4 fw-bold text-primary">
            <span class="counter-value" data-target="1000">{{
              medium.media_type
            }}</span>
          </h2>
        </div>
      </div>
      <!--end col-->

      <div class="col-lg-3 col-md-6 mt-4 pt-2">
        <div class="text-center">
          <h5 class="text-muted mb-0">Current Release</h5>
          <h2 class="mb-0 display-5 mt-4 fw-bold text-primary">
            <span class="counter-value" data-target="10">{{
              medium.latest
            }}</span>
          </h2>
        </div>
      </div>

      <!--end col-->

      <div class="col-lg-3 col-md-6 mt-4 pt-2">
        <div class="text-center">
          <h5 class="text-muted mb-0"></h5>
          <h2 class="mb-0 display-5 mt-4 fw-bold text-primary">
            <span class="counter-value" data-target="410"
              ><router-link class="btn btn-primary btn-lg" router-link to="/"
                >Back</router-link
              ></span
            >
          </h2>
        </div>
      </div>
      <p
        class="text-muted para-desc mx-auto mb-0"
        style="
          padding-top: 50px;
          padding-right: 20px;
          padding-bottom: 200px;
          padding-left: 20px;
        "
      >
        {{ medium.synopsis }}
      </p>

      <!--end col-->
    </div>
    <!--end row-->
  </div>
  <!--end container-->
</template>

<style></style>
