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
            <img src="/images/logo-dark.png" alt="" />
          </span>
          <img src="/images/logo-light.png" class="logo-dark-mode" alt="" />
        </a>
        <!-- Logo end-->

        <!--Login button Start-->
        <ul class="buy-button list-inline mb-0">
          <li class="list-inline-item search-icon mb-0">
            <a
              href="javascript:void(0)"
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
        <div class="menu-extras">
          <div class="menu-item">
            <!-- Mobile menu toggle-->
            <a class="navbar-toggle" id="isToggle" v-on:click="toggleMenu()">
              <div class="lines">
                <span>Tracker</span>
                <span>Login</span>
                <span>Signup</span>
                <span>Logout</span>
              </div>
            </a>
            <!-- End mobile menu toggle-->
          </div>
        </div>

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
                ><i data-feather="arrow-up" class="icons"></i
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
  </div>
</template>

<style></style>
