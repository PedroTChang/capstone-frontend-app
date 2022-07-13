<script>
// import axios from "axios"; // eslint-disable-line

export default {
  data: function () {
    return {
      isLoggedIn: false,
    };
  },
  watch: {
    $route: function () {
      this.isLoggedIn = !!localStorage.jwt;
    },
  },
};
</script>

<template>
  <div id="app">
    <!-- HEADER -->
    <!-- Navbar STart -->
    <header id="topnav" class="defaultscroll sticky">
      <div class="container">
        <!-- Logo Start-->
        <a class="logo" href="/">
          <span class="logo-light-mode">
            <img src="/images/otakutracker-light.png" alt="" />
          </span>
          <img
            src="/images/otakutracker-light.png"
            class="logo-dark-mode"
            alt=""
          />
        </a>
        <!-- Logo end-->

        <!--Login button Start-->
        <ul class="buy-button list-inline mb-0">
          <li class="list-inline-item search-icon mb-0">
            <a
              href="/"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <div class="btn btn-icon btn-pills btn-primary">
                <i class="uil uil-user"></i>
              </div>
            </a>
          </li>
        </ul>
        <!--Login button End-->

        <!-- Mobile menu toggle-->
        <!-- <div class="menu-extras">
          <div class="menu-item">
            <a class="navbar-toggle" id="isToggle" on:click="toggleMenu()">
              <div class="lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </a>
          </div>
        </div> -->
        <!-- End mobile menu toggle-->

        <div id="navigation">
          <!-- Navigation Menu-->
          <ul class="navigation-menu nav-right">
            <li>
              <a href="/" class="sub-menu-item">Tracker</a>
            </li>
            <li class="nav-item" v-if="!isLoggedIn">
              <a href="/login" class="sub-menu-item">Login</a>
            </li>
            <li class="nav-item" v-if="!isLoggedIn">
              <a href="/signup" class="sub-menu-item">Signup</a>
            </li>
            <li class="nav-item" v-if="isLoggedIn">
              <a href="/logout" class="sub-menu-item">Logout</a>
            </li>
          </ul>

          <!--end navigation menu-->
        </div>
        <!--end navigation-->
      </div>
      <!--end container-->
    </header>
    <!--end header-->
    <!-- Navbar End -->

    <!-- Hero Start -->
    <!-- <section class="bg-half-170 bg-light d-table w-100">
      <div class="container position-relative" style="z-index: 1">
        <div class="row justify-content-center mt-5">
          <div class="col-12">
            <div class="section-title text-center">
              <h4 class="title fw-medium mb-4">Otaku Tracker</h4>
              <p class="text-muted para-desc mx-auto mb-0">
                Track your favorite anime and manga.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="position-absolute top-50 start-50 translate-middle">
        <img
          src="/images/icon-gradient.png"
          class="/img-fluid opacity-2"
          style="max-height: 400px"
          alt=""
        />
      </div>
    </section> -->
    <!--end section-->
    <!-- Hero End -->

    <!-- ROUTER VIEW -->
    <router-view />

    <!-- Footer Start -->
    <footer id="footer" class="bg-footer">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="footer-py-100">
              <div class="row">
                <div class="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
                  <!-- <a href="/" class="logo-footer">
                    <img src="/images/logo-light.png" alt="" />
                  </a> -->
                  <p class="text-foot mt-4">Track your favorite anime!</p>
                  <ul
                    class="list-unstyled social-icon foot-social-icon mb-0 mt-4"
                  >
                    <li class="list-inline-item">
                      <a
                        href="https://wrapbootstrap.com/theme/upcrypto-nft-cryptocurrency-template-WB0580331?ref=shreethemesstudio"
                        target="_blank"
                        class="rounded"
                        ><i
                          class="uil uil-shopping-cart align-middle"
                          title="Buy Now"
                        ></i
                      ></a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        href="https://dribbble.com/shreethemes"
                        target="_blank"
                        class="rounded"
                        ><i
                          class="uil uil-dribbble align-middle"
                          title="dribbble"
                        ></i
                      ></a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        href="https://www.behance.net/shreethemes"
                        target="_blank"
                        class="rounded"
                        ><i class="uil uil-behance" title="Behance"></i
                      ></a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        href="http://linkedin.com/company/shreethemes"
                        target="_blank"
                        class="rounded"
                        ><i class="uil uil-linkedin" title="Linkedin"></i
                      ></a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        href="https://www.facebook.com/shreethemes"
                        target="_blank"
                        class="rounded"
                        ><i
                          class="uil uil-facebook-f align-middle"
                          title="facebook"
                        ></i
                      ></a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        href="https://www.instagram.com/shreethemes/"
                        target="_blank"
                        class="rounded"
                        ><i
                          class="uil uil-instagram align-middle"
                          title="instagram"
                        ></i
                      ></a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        href="https://twitter.com/shreethemes"
                        target="_blank"
                        class="rounded"
                        ><i
                          class="uil uil-twitter align-middle"
                          title="twitter"
                        ></i
                      ></a>
                    </li>
                    <li class="list-inline-item">
                      <a href="mailto:support@shreethemes.in" class="rounded"
                        ><i
                          class="uil uil-envelope align-middle"
                          title="email"
                        ></i
                      ></a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        href="https://forms.gle/QkTueCikDGqJnbky9"
                        target="_blank"
                        class="rounded"
                        ><i
                          class="uil uil-file align-middle"
                          title="Hire Us"
                        ></i
                      ></a>
                    </li>
                  </ul>
                  <!--end icon-->
                </div>
                <!--end col-->

                <!-- <div class="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <h5 class="text-light footer-head">Company</h5>
                  <ul class="list-unstyled footer-list mt-4">
                    <li>
                      <a href="#" class="text-foot"
                        ><i class="uil uil-angle-right-b me-1"></i>About</a
                      >
                    </li>
                    <li>
                      <a href="#" class="text-foot"
                        ><i class="uil uil-angle-right-b me-1"></i>Careers</a
                      >
                    </li>
                    <li>
                      <a href="#" class="text-foot"
                        ><i class="uil uil-angle-right-b me-1"></i>Business
                        Contacts</a
                      >
                    </li>
                    <li>
                      <a href="#" class="text-foot"
                        ><i class="uil uil-angle-right-b me-1"></i>Community</a
                      >
                    </li>
                    <li>
                      <a href="#" class="text-foot"
                        ><i class="uil uil-angle-right-b me-1"></i>Upcrypto
                        Blog</a
                      >
                    </li>
                    <li>
                      <a href="#" class="text-foot"
                        ><i class="uil uil-angle-right-b me-1"></i>Terms</a
                      >
                    </li>
                    <li>
                      <a href="#" class="text-foot"
                        ><i class="uil uil-angle-right-b me-1"></i>Privacy</a
                      >
                    </li>
                    <li>
                      <a href="#" class="text-foot"
                        ><i class="uil uil-angle-right-b me-1"></i
                        >Announcements</a
                      >
                    </li>
                    <li>
                      <a href="#" class="text-foot"
                        ><i class="uil uil-angle-right-b me-1"></i>News</a
                      >
                    </li>
                  </ul>
                </div> -->
                <!--end col-->

                <!-- <div class="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <h5 class="text-light footer-head">Products</h5>
                  <ul class="list-unstyled footer-list mt-4">
                    <li>
                      <a href="#" class="text-foot"
                        ><i class="uil uil-angle-right-b me-1"></i>Exchange</a
                      >
                    </li>
                    <li>
                      <a href="#" class="text-foot"
                        ><i class="uil uil-angle-right-b me-1"></i>Academy</a
                      >
                    </li>
                    <li>
                      <a href="#" class="text-foot"
                        ><i class="uil uil-angle-right-b me-1"></i>BCF</a
                      >
                    </li>
                    <li>
                      <a href="#" class="text-foot"
                        ><i class="uil uil-angle-right-b me-1"></i>Card</a
                      >
                    </li>
                    <li>
                      <a href="#" class="text-foot"
                        ><i class="uil uil-angle-right-b me-1"></i>Labs</a
                      >
                    </li>
                    <li>
                      <a href="#" class="text-foot"
                        ><i class="uil uil-angle-right-b me-1"></i>Launchpad</a
                      >
                    </li>
                    <li>
                      <a href="#" class="text-foot"
                        ><i class="uil uil-angle-right-b me-1"></i>Research</a
                      >
                    </li>
                    <li>
                      <a href="#" class="text-foot"
                        ><i class="uil uil-angle-right-b me-1"></i>Trust
                        Wallet</a
                      >
                    </li>
                  </ul>
                </div> -->
                <!--end col-->

                <!-- <div class="col-lg-4 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <h5 class="text-light footer-head">
                    Start trading with Upcrypto
                  </h5>

                  <ul class="list-unstyled footer-list mt-4 mb-2">
                    <li class="list-inline-item mx-1">
                      <a href="#" class="btn btn-soft-primary">Signin</a>
                    </li>
                    <li class="list-inline-item mx-1">
                      <a href="#" class="btn btn-primary">Signup</a>
                    </li>
                  </ul>
                  <small class="text-foot d-block"
                    >Institutional Investor?
                    <a href="#" class="text-foot fw-medium"
                      >Learn More</a
                    ></small
                  >

                  <img
                    src="/images/icon-gradient.png"
                    class="avatar avatar-medium mt-4"
                    alt=""
                  />
                </div> -->
                <!--end col-->
              </div>
              <!--end row-->
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->

      <div class="container">
        <div class="row align-items-center footer-py-30 footer-border-top">
          <div class="col-sm-8">
            <div class="text-sm-start text-center">
              <p class="mb-0 text-foot">
                ©
                <!-- <script>
                  document.write(new Date().getFullYear());
                </script> -->
                OtakuTracker by Pedro T Chang
                <!-- <i class="mdi mdi-heart text-danger"></i> by
                <a
                  href="https://shreethemes.in/"
                  target="_blank"
                  class="text-reset"
                  >Shreethemes</a
                >. -->
              </p>
            </div>
          </div>
          <!--end col-->

          <div class="col-sm-4 mt-4 mt-sm-0">
            <div class="text-sm-end text-center">
              <a
                href="#"
                onclick="topFunction()"
                id="back-to-top"
                class="btn btn-pills btn-icon btn-primary back-to-top"
                ><i class="uil uil-top-arrow-from-top"></i
              ></a>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </footer>
    <!--end footer-->
    <!-- Footer End -->

    <!-- Offcanvas Start -->
    <div
      class="offcanvas offcanvas-end bg-white shadow"
      tabindex="-1"
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      <div class="offcanvas-header p-4 border-bottom">
        <h6 id="offcanvasRightLabel" class="mb-0">OTAKUTRACKER</h6>
        <button
          type="button"
          class="btn-close d-flex align-items-center text-dark"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <i class="uil uil-times fs-4"></i>
        </button>
      </div>
      <div class="offcanvas-body p-4">
        <div class="row">
          <div class="col-12">
            <div class="card border-0" style="z-index: 1">
              <div class="card-body p-0">
                <form class="login-form">
                  <div class="row">
                    <div class="col-12">
                      <img
                        src="/images/otakutracker-icon.png"
                        class="avatar avatar-large d-block mx-auto my-5"
                        alt=""
                      />
                    </div>
                    <!--end col-->

                    <div class="col-lg-12 mt-4">
                      <div class="mb-3">
                        <label class="form-label"
                          >Your Email <span class="text-danger">*</span></label
                        >
                        <div class="form-icon position-relative">
                          <i data-feather="user" class="fea icon-sm icons"></i>
                          <input
                            type="email"
                            class="form-control ps-5"
                            placeholder="Email"
                            name="email"
                            required=""
                          />
                        </div>
                      </div>
                    </div>
                    <!--end col-->

                    <div class="col-lg-12">
                      <div class="mb-3">
                        <label class="form-label"
                          >Password <span class="text-danger">*</span></label
                        >
                        <div class="form-icon position-relative">
                          <i data-feather="key" class="fea icon-sm icons"></i>
                          <input
                            type="password"
                            class="form-control ps-5"
                            placeholder="Password"
                            required=""
                          />
                        </div>
                      </div>
                    </div>
                    <!--end col-->

                    <div class="col-lg-12">
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
                              class="form-check-label"
                              for="flexCheckDefault"
                              >Remember me</label
                            >
                          </div>
                        </div>
                        <small class="forgot-pass mb-0"
                          ><a href="reset-password.html" class="text-dark"
                            >Forgot password ?</a
                          ></small
                        >
                      </div>
                    </div>
                    <!--end col-->

                    <div class="col-lg-12 mb-0">
                      <div class="d-grid">
                        <button class="btn btn-primary">Sign in</button>
                      </div>
                    </div>
                    <!--end col-->

                    <div class="col-12 text-center mt-3">
                      <small
                        ><small class="text-dark me-2"
                          >Don't have an account ?</small
                        >
                        <a href="signup.html" class="text-dark"
                          >Sign Up</a
                        ></small
                      >
                    </div>
                    <!--end col-->
                  </div>
                  <!--end row-->
                </form>
              </div>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>

      <div class="offcanvas-footer p-4 text-center">
        <ul class="list-unstyled social-icon social mb-0">
          <li class="list-inline-item mb-0">
            <a
              href="https://wrapbootstrap.com/theme/upcrypto-nft-cryptocurrency-template-WB0580331?ref=shreethemesstudio"
              target="_blank"
              class="rounded"
              ><i class="uil uil-shopping-cart align-middle" title="Buy Now"></i
            ></a>
          </li>
          <li class="list-inline-item mb-0">
            <a
              href="https://dribbble.com/shreethemes"
              target="_blank"
              class="rounded"
              ><i class="uil uil-dribbble align-middle" title="dribbble"></i
            ></a>
          </li>
          <li class="list-inline-item mb-0">
            <a
              href="https://www.facebook.com/shreethemes"
              target="_blank"
              class="rounded"
              ><i class="uil uil-facebook-f align-middle" title="facebook"></i
            ></a>
          </li>
          <li class="list-inline-item mb-0">
            <a
              href="https://www.instagram.com/shreethemes/"
              target="_blank"
              class="rounded"
              ><i class="uil uil-instagram align-middle" title="instagram"></i
            ></a>
          </li>
          <li class="list-inline-item mb-0">
            <a
              href="https://twitter.com/shreethemes"
              target="_blank"
              class="rounded"
              ><i class="uil uil-twitter align-middle" title="twitter"></i
            ></a>
          </li>
          <li class="list-inline-item mb-0">
            <a href="mailto:support@shreethemes.in" class="rounded"
              ><i class="uil uil-envelope align-middle" title="email"></i
            ></a>
          </li>
          <li class="list-inline-item mb-0">
            <a href="https://shreethemes.in" target="_blank" class="rounded"
              ><i class="uil uil-globe align-middle" title="website"></i
            ></a>
          </li>
        </ul>
        <!--end icon-->
      </div>
    </div>
    <!-- Offcanvas End -->

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
</template>

<style></style>
