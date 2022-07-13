<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newUserParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/users", this.newUserParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

<template>
  <div class="signup">
    <section
      class="bg-home d-flex align-items-center position-relative"
      style="
        background: url('/images/bg/anime-bg.jpg');
        background-size: contain;
      "
    >
      <div class="bg-overlay bg-gradient-primary opacity-8"></div>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="form-signin p-4 bg-light rounded shadow-md">
              <form v-on:submit.prevent="submit()">
                <ul>
                  <li v-for="error in errors" v-bind:key="error">
                    {{ error }}
                  </li>
                </ul>
                <a href="index.html"
                  ><img
                    src="/images/otakutracker-icon.png"
                    class="avatar avatar-md-md mb-4 d-block mx-auto"
                    alt=""
                /></a>
                <h5 class="mb-3">Register your account</h5>

                <div class="form-floating mb-2">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInput"
                    placeholder="Harry"
                    v-model="newUserParams.name"
                  />
                  <label for="floatingInput">First Name</label>
                </div>

                <div class="form-floating mb-2">
                  <input
                    type="email"
                    class="form-control"
                    id="floatingEmail"
                    placeholder="name@example.com"
                    v-model="newUserParams.email"
                  />
                  <label for="floatingEmail">Email Address</label>
                </div>

                <div class="form-floating mb-3">
                  <input
                    type="password"
                    class="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    v-model="newUserParams.password_confirmation"
                  />
                  <label for="floatingPassword">Password confirmation</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="password"
                    class="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    v-model="newUserParams.password"
                  />
                  <label for="floatingPassword">Password</label>
                </div>

                <div class="form-check mb-3">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    class="form-check-label text-muted"
                    for="flexCheckDefault"
                    >I Accept
                    <a href="#" class="text-primary"
                      >Terms And Condition</a
                    ></label
                  >
                </div>

                <button class="btn btn-primary w-100" type="submit">
                  Register
                </button>

                <div class="col-12 text-center mt-3">
                  <small
                    ><small class="text-muted me-2"
                      >Already have an account ?
                    </small>
                    <a href="/login" class="text-dark fw-medium"
                      >Sign in</a
                    ></small
                  >
                </div>
                <!--end col-->

                <p class="mb-0 text-muted mt-3 text-center">
                  ©
                  <!-- <script>
                  document.write(new Date().getFullYear());
                </script> -->
                  OtakuTracker
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- end Style switcher -->
  </div>
</template>
