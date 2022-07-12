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
    show: function (item) {
      item.isEdit = true;
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
  <div class="media-index">
    <!-- Start -->
    <section class="section">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-title mb-4">
              <h4>Trackers</h4>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->

        <div class="row justify-content-center">
          <div class="col-12">
            <div class="table-responsive bg-white shadow rounded">
              <table class="table mb-0 table-center">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      class="fw-normal text-muted py-4"
                      style="min-width: 250px"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      class="fw-normal text-center text-muted py-4"
                      style="width: 200px; min-width: 150px"
                    >
                      Progress
                    </th>
                    <th
                      scope="col"
                      class="fw-normal text-center text-muted py-4"
                      style="width: 200px; min-width: 150px"
                    >
                      Latest
                    </th>
                    <th
                      scope="col"
                      class="fw-normal text-center text-muted py-4"
                      style="width: 250px; min-width: 150px"
                    >
                      Current
                    </th>
                    <th
                      scope="col"
                      class="fw-normal text-end text-muted py-4"
                      style="width: 150px; min-width: 150px"
                    >
                      Type
                    </th>
                  </tr>
                </thead>

                <tbody v-for="tracker in trackers" v-bind:key="tracker.id">
                  <tr>
                    <th class="py-3">
                      <a href="#!" class="align-items-center">
                        <!-- <img
                          src="images/coin/bitcoin.png"
                          class="me-3"
                          height="32"
                          alt=""
                        /> -->
                        <p class="mb-0 d-inline text-dark fw-normal h6">
                          {{ tracker.name }} <span class="text-muted"></span>
                        </p>
                      </a>
                    </th>
                    <td class="text-center">
                      <div v-if="tracker.progress == 'Watching'">
                        <span class="badge rounded-md bg-soft-success">{{
                          tracker.progress
                        }}</span>
                      </div>
                      <div v-if="tracker.progress == 'Reading'">
                        <span class="badge rounded-md bg-soft-success">{{
                          tracker.progress
                        }}</span>
                      </div>
                      <div v-if="tracker.progress == 'Dropped'">
                        <span class="badge rounded-md bg-soft-danger">{{
                          tracker.progress
                        }}</span>
                      </div>
                      <div v-if="tracker.progress == 'Completed'">
                        <span class="badge rounded-md bg-soft-info">{{
                          tracker.progress
                        }}</span>
                      </div>
                    </td>
                    <td class="text-center">
                      <ul class="list-unstyled text-warning mb-0">
                        <li class="list-inline-item mb-0 text-muted small">
                          {{ tracker.latest }}
                        </li>
                      </ul>
                    </td>
                    <td class="text-center">
                      <small class="title text-muted mb-0"
                        ><div v-if="!tracker.isEdit">
                          {{ tracker.current }}
                          <button v-on:click="show(tracker)">Edit</button>
                        </div>
                        <div v-if="tracker.isEdit">
                          Current:
                          <input type="text" v-model="tracker.current" />
                          Progress:
                          <input type="text" v-model="tracker.progress" />
                          <button v-on:click="updateTracker(tracker)">
                            Edit Tracker
                          </button>
                          <button v-on:click="destroyTracker(tracker)">
                            Delete
                          </button>
                        </div></small
                      >
                    </td>
                    <td class="text-muted text-end">
                      {{ tracker.media_type }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!--end col-->

          <!-- PAGINATION START -->
          <!-- <div class="col-12 mt-4 pt-2">
            <div
              class="d-md-flex align-items-center text-center justify-content-between"
            >
              <span class="text-muted me-3">Showing 1</span>
              <ul class="pagination justify-content-center mb-0 mt-3 mt-sm-0">
                <li class="page-item">
                  <a
                    class="page-link"
                    href="javascript:void(0)"
                    aria-label="Previous"
                    >Prev</a
                  >
                </li>
                <li class="page-item active">
                  <a class="page-link" href="javascript:void(0)">1</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="javascript:void(0)">2</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="javascript:void(0)">3</a>
                </li>
                <li class="page-item">
                  <a
                    class="page-link"
                    href="javascript:void(0)"
                    aria-label="Next"
                    >Next</a
                  >
                </li>
              </ul>
            </div>
          </div> -->
          <!--end col-->
          <!-- PAGINATION END -->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->
    <!-- End -->

    <section class="section">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-title mb-4">
              <h4>Media</h4>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->

        <div class="row justify-content-center">
          <div class="col-12">
            <div class="table-responsive bg-white shadow rounded">
              <table class="table mb-0 table-center">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      class="fw-normal text-muted py-4"
                      style="min-width: 250px"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      class="fw-normal text-center text-muted py-4"
                      style="width: 200px; min-width: 150px"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      class="fw-normal text-center text-muted py-4"
                      style="width: 200px; min-width: 150px"
                    >
                      Type
                    </th>
                    <th
                      scope="col"
                      class="fw-normal text-center text-muted py-4"
                      style="width: 250px; min-width: 150px"
                    >
                      Latest
                    </th>
                    <th
                      scope="col"
                      class="fw-normal text-end text-muted py-4"
                      style="width: 150px; min-width: 150px"
                    ></th>
                  </tr>
                </thead>

                <tbody v-for="medium in media" v-bind:key="medium.id">
                  <tr>
                    <th class="py-3">
                      <a
                        v-bind:href="/media/ + medium.id"
                        class="align-items-center"
                      >
                        <!-- <img
                          src="images/coin/bitcoin.png"
                          class="me-3"
                          height="32"
                          alt=""
                        /> -->
                        <p class="mb-0 d-inline text-dark fw-normal h6">
                          {{ medium.name }} <span class="text-muted"></span>
                        </p>
                      </a>
                    </th>
                    <td class="text-center">
                      <div v-if="medium.status == 'Finished Airing'">
                        <span class="badge rounded-md bg-soft-info">{{
                          medium.status
                        }}</span>
                      </div>
                      <div v-if="medium.status == 'Currently Airing'">
                        <span class="badge rounded-md bg-soft-success">{{
                          medium.status
                        }}</span>
                      </div>
                    </td>
                    <td class="text-center">
                      <ul class="list-unstyled text-warning mb-0">
                        <!-- <li class="list-inline-item mb-0">
                          <i class="mdi mdi-star"></i>
                        </li>
                        <li class="list-inline-item mb-0">
                          <i class="mdi mdi-star"></i>
                        </li>
                        <li class="list-inline-item mb-0">
                          <i class="mdi mdi-star"></i>
                        </li>
                        <li class="list-inline-item mb-0">
                          <i class="mdi mdi-star"></i>
                        </li>
                        <li class="list-inline-item mb-0">
                          <i class="mdi mdi-star-half"></i>
                        </li> -->
                        <li class="list-inline-item mb-0 text-muted small">
                          {{ medium.media_type }}
                        </li>
                      </ul>
                    </td>
                    <td class="text-center">
                      <div class="progress-box px-3">
                        <small class="title text-muted mb-0">{{
                          medium.latest
                        }}</small>

                        <!-- <div class="progress rounded-md mt-2">
                          <div
                            class="progress-bar position-relative bg-gradient-primary rounded-md"
                            style="width: 60%"
                          ></div>
                        </div> -->
                      </div>
                      <!--end process box-->
                    </td>
                    <td class="text-muted text-end">
                      <div v-if="!medium.isEdit">
                        <button v-on:click="show(medium)">Add</button>
                      </div>
                      <div v-if="medium.isEdit">
                        Current:
                        <input type="text" v-model="medium.current" />
                        <button v-on:click="createTracker(medium)">
                          Create Tracker
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!--end col-->

          <!-- PAGINATION START -->
          <!-- <div class="col-12 mt-4 pt-2">
            <div
              class="d-md-flex align-items-center text-center justify-content-between"
            >
              <span class="text-muted me-3"></span>
              <ul class="pagination justify-content-center mb-0 mt-3 mt-sm-0">
                <li class="page-item">
                  <a
                    class="page-link"
                    href="javascript:void(0)"
                    aria-label="Previous"
                    >Prev</a
                  >
                </li>
                <li class="page-item active">
                  <a class="page-link" href="javascript:void(0)">1</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="javascript:void(0)">2</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="javascript:void(0)">3</a>
                </li>
                <li class="page-item">
                  <a
                    class="page-link"
                    href="javascript:void(0)"
                    aria-label="Next"
                    >Next</a
                  >
                </li>
              </ul>
            </div>
          </div> -->
          <!--end col-->
          <!-- PAGINATION END -->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->
    <!-- End -->
    <h1>Trackers</h1>
    <div v-for="tracker in trackers" v-bind:key="tracker.id">
      <h2>{{ tracker.name }}</h2>
      <h3>Latest: {{ tracker.latest }}</h3>
      <h3>Type: {{ tracker.media_type }}</h3>
      <h3>Status: {{ tracker.status }}</h3>
      <div v-if="!tracker.isEdit">
        <h3>Progress: {{ tracker.progress }}</h3>
        <h3>Current: {{ tracker.current }}</h3>
        <button v-on:click="show(tracker)">Tracker</button>
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
        <h3>{{ medium.status }}</h3>
        <button>
          <router-link v-bind:to="`/media/${medium.id}`">More Info</router-link>
        </button>
        <div v-if="!medium.isEdit">
          <button v-on:click="show(medium)">Create</button>
        </div>
        <div v-if="medium.isEdit">
          Current:
          <input type="text" v-model="medium.current" />
          <button v-on:click="createTracker(medium)">Create Tracker</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
