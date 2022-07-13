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
      style="background: url('/images/bg/user.jpg') center"
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
                    src="/images/icon-gradient.png"
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
  <div class="signup">
    <form v-on:submit.prevent="submit()">
      <h1>Signup</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Name:</label>
        <input type="text" v-model="newUserParams.name" />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" v-model="newUserParams.email" />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" v-model="newUserParams.password" />
      </div>
      <div>
        <label>Password confirmation:</label>
        <input type="password" v-model="newUserParams.password_confirmation" />
      </div>
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>
