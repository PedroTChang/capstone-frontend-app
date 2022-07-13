<script>
import axios from "axios";
// import "/public/css/materialdesignicons.css.map";

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
  <div
    class="media-index"
    style="
      background: url('/images/bg/purple-house.jpeg');
      background-size: contain;
    "
  >
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
                      class="fw-normal text-left text-muted py-4"
                      style="width: 150px; min-width: 150px"
                    >
                      Current
                    </th>
                    <th
                      scope="col"
                      class="fw-normal text-right text-muted py-4"
                      style="width: 25px; min-width: 25px"
                    >
                      Update
                    </th>
                  </tr>
                </thead>

                <tbody v-for="tracker in trackers" v-bind:key="tracker.id">
                  <tr>
                    <th class="py-3">
                      <a class="align-items-center">
                        <!-- <img
                          src="images/coin/bitcoin.png"
                          class="me-3"
                          height="32"
                          alt=""
                        /> -->
                        <div>
                          <router-link
                            class="mb-0 d-inline text-dark fw-normal h6"
                            v-bind:to="`/media/${tracker.medium_id}`"
                          >
                            {{ tracker.name }} <span class="text-muted"></span>
                          </router-link>
                        </div>
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
                    <td class="text-center text-muted">
                      {{ tracker.media_type }}
                    </td>
                    <td class="text-center">
                      <ul class="list-unstyled text-warning mb-0">
                        <li class="list-inline-item mb-0">
                          {{ tracker.latest }}
                        </li>
                      </ul>
                    </td>
                    <td class="text-justified">
                      <ul class="list-unstyled text-warning mb-0">
                        <li class="list-inline-item mb-0">
                          &nbsp;&nbsp;&nbsp;&nbsp;{{ tracker.current }}
                        </li>
                      </ul>
                    </td>
                    <td class="text-center">
                      <ul
                        class="pagination justify-content-flex-end mb-0 mt-3 mt-sm-0"
                      >
                        <li class="page-item">
                          <div v-if="!tracker.isEdit">
                            <a
                              class="btn btn-primary btn-sm"
                              v-on:click="show(tracker)"
                              >Edit</a
                            >
                          </div>
                        </li>
                      </ul>
                      <div v-if="tracker.isEdit">
                        <div class="col-xs-1">
                          Current:
                          <input
                            type="text"
                            v-model="tracker.current"
                            style="width: 50px"
                            class="form-control input-sm"
                            id="inputsm"
                          />
                          Progress:
                          <input
                            type="text"
                            v-model="tracker.progress"
                            style="width: 90px"
                            class="form-control input-sm"
                            id="inputsm"
                          />
                          <a
                            class="btn btn-primary btn-sm"
                            v-on:click="updateTracker(tracker)"
                            ><label for="inputsm">Edit</label>
                          </a>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <a
                            class="btn btn-primary btn-sm"
                            v-on:click="destroyTracker(tracker)"
                          >
                            Delete
                          </a>
                        </div>
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
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Type
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
                      class="fw-normal text-center text-muted py-4"
                      style="width: 1px; min-width: 1px"
                    >
                      Create
                    </th>
                  </tr>
                </thead>

                <tbody v-for="medium in media" v-bind:key="medium.id">
                  <tr>
                    <th class="py-3">
                      <a class="align-items-center">
                        <!-- <img
                          src="images/coin/bitcoin.png"
                          class="me-3"
                          height="32"
                          alt=""
                        /> -->
                        <!-- <a
                          class="mb-0 d-inline text-dark fw-normal h6"
                          v-bind:href="`/media/${medium.id}`"
                        >
                          {{ medium.name }}
                          <span class="text-muted"></span>
                        </a> -->
                        <div>
                          <router-link
                            class="mb-0 d-inline text-dark fw-normal h6"
                            v-bind:to="`/media/${medium.id}`"
                            >{{ medium.name }}</router-link
                          >
                        </div>
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
                        <li class="list-inline-item mb-0">
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{
                            medium.media_type
                          }}
                        </li>
                      </ul>
                    </td>

                    <td class="text-center">
                      <ul class="list-unstyled text-warning mb-0">
                        <li class="list-inline-item mb-0">
                          {{ medium.latest }}
                        </li>
                      </ul>
                    </td>
                    <td class="text-muted">
                      <ul class="pagination justify-content-end">
                        <li class="page-item">
                          <div v-if="!medium.isEdit">
                            <a
                              class="btn btn-primary btn-sm"
                              v-on:click="show(medium)"
                              >Add</a
                            >
                          </div>
                        </li>
                        <div v-if="medium.isEdit">
                          Current:
                          <input type="text" v-model="medium.current" />
                          <a
                            class="btn btn-primary btn-sm"
                            v-on:click="createTracker(medium)"
                          >
                            Create
                          </a>
                        </div>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!--end col-->

          <!-- PAGINATION START -->
          <!-- <div class="col-12 mt-4 pt-2"> -->
          <!-- <div
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
                <a class="page-link" href="javascript:void(0)" aria-label="Next"
                  >Next</a
                >
              </li>
            </ul>
          </div> -->
          <!-- </div> -->
          <!--end col-->
          <!-- PAGINATION END -->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->
    <!-- End -->
  </div>
</template>

<style></style>
