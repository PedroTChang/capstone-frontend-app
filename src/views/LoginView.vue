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
      style="background: url('/images/bg/umbrellaaaa.jpg') center"
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

    <!-- Style switcher -->
    <div
      id="style-switcher"
      class="bg-light border p-3 pt-2 pb-2"
      onclick="toggleSwitcher()"
    >
      <div>
        <h6 class="title text-center">Select Your Color</h6>
        <ul class="pattern">
          <li class="list-inline-item">
            <a
              class="color1"
              href="javascript:void(0);"
              onclick="setColor('default')"
            ></a>
          </li>
          <li class="list-inline-item">
            <a
              class="color2"
              href="javascript:void(0);"
              onclick="setColor('green')"
            ></a>
          </li>
          <li class="list-inline-item">
            <a
              class="color3"
              href="javascript:void(0);"
              onclick="setColor('purple')"
            ></a>
          </li>
          <li class="list-inline-item">
            <a
              class="color4"
              href="javascript:void(0);"
              onclick="setColor('red')"
            ></a>
          </li>
          <li class="list-inline-item">
            <a
              class="color5"
              href="javascript:void(0);"
              onclick="setColor('skobleoff')"
            ></a>
          </li>
          <li class="list-inline-item">
            <a
              class="color6"
              href="javascript:void(0);"
              onclick="setColor('yellow')"
            ></a>
          </li>
        </ul>

        <h6 class="title text-center pt-3 mb-0 border-top">Theme Option</h6>
        <ul class="text-center list-unstyled mb-0">
          <!-- <li class="d-grid"><a href="javascript:void(0)" class="btn btn-sm btn-block btn-primary rtl-version t-rtl-light mt-2" onclick="setTheme('style-rtl')">RTL</a></li>
                    <li class="d-grid"><a href="javascript:void(0)" class="btn btn-sm btn-block btn-primary ltr-version t-ltr-light mt-2" onclick="setTheme('style')">LTR</a></li>
                    <li class="d-grid"><a href="javascript:void(0)" class="btn btn-sm btn-block btn-primary dark-rtl-version t-rtl-dark mt-2" onclick="setTheme('style-dark-rtl')">RTL</a></li>
                    <li class="d-grid"><a href="javascript:void(0)" class="btn btn-sm btn-block btn-primary dark-ltr-version t-ltr-dark mt-2" onclick="setTheme('style-dark')">LTR</a></li> -->
          <li class="d-grid">
            <a
              href="javascript:void(0)"
              class="btn btn-sm btn-block btn-dark dark-version t-dark mt-2"
              onclick="setTheme('style-dark')"
              >Dark</a
            >
          </li>
          <li class="d-grid">
            <a
              href="javascript:void(0)"
              class="btn btn-sm btn-block btn-dark light-version t-light mt-2"
              onclick="setTheme('style')"
              >Light</a
            >
          </li>
        </ul>
      </div>
      <div class="bottom">
        <a href="javascript:void(0);" class="settings bg-white shadow d-block"
          ><i
            class="mdi mdi-cog ms-1 mdi-24px position-absolute mdi-spin text-primary"
          ></i
        ></a>
      </div>
    </div>
    <!-- end Style switcher -->
  </div>
  <div class="login">
    <form v-on:submit.prevent="submit()">
      <h1>Login</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Email:</label>
        <input type="email" v-model="newSessionParams.email" />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" v-model="newSessionParams.password" />
      </div>
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>
