<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newSessionParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/sessions", this.newSessionParams)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error.response);
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    },
  },
};
</script>

<template>
  <div class="login">
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
                <a href="index.html"
                  ><img
                    src="images/otakutracker-icon.png"
                    class="avatar avatar-md-md mb-4 d-block mx-auto"
                    alt=""
                /></a>
                <h5 class="mb-3">Please sign in</h5>

                <div class="form-floating mb-2">
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    v-model="newSessionParams.email"
                  />
                  <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="password"
                    class="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    v-model="newSessionParams.password"
                  />
                  <label for="floatingPassword">Password</label>
                </div>

                <div class="d-flex justify-content-between">
                  <div class="mb-3">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        class="form-check-label text-muted"
                        for="flexCheckDefault"
                        >Remember me</label
                      >
                    </div>
                  </div>
                  <small class="forgot-pass text-muted mb-0"
                    ><a href="reset-password.html" class="text-muted fw-medium"
                      >Forgot password ?</a
                    ></small
                  >
                </div>

                <button class="btn btn-primary w-100" type="submit">
                  Sign in
                </button>

                <div class="col-12 text-center mt-3">
                  <small
                    ><small class="text-muted me-2"
                      >Don't have an account ?</small
                    >
                    <a href="/signup" class="text-dark fw-medium"
                      >Sign Up</a
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
  </div>
</template>
