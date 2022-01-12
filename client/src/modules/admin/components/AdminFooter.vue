<template>
  <!-- FOOTER -->
  <footer class="w-100mt-auto fixed-bottom py-4 flex-shrink-0">
    <div class="container py-4">
      <div class="row gy-4 gx-5">
        <div class="col-lg-4 col-md-6">
          <h5 class="h1 text-white">Rotary Clubs of of Canada Admin</h5>
          <p class="small text-muted">
            Built by two algoquinn super programmers.Built with BootStrap,
            Vue.js, and Adons.js. This admin portal runs the Rotay District!
            Contact Information for the two devolpers is listed ------------>
          </p>
          <p class="small text-muted mb-0">
            &copy; Copyrights. All rights reserved.
            <a
              class="text-primary"
              href="https://github.com/sain0136/rotary_club_devolpment"
              >Git hub Code Repo</a
            >
          </p>
        </div>
        <div class="col-lg-2 col-md-6">
          <h5 class="text-white mb-3">Apo</h5>
          <li>
            <p>Email:</p>
          </li>
        </div>
        <div class="col-lg-2 col-md-6">
          <h5 class="text-white mb-3">Sebastien</h5>
          <ul class="social__media">
            <li>
              <p>Email: jssr26@gmail.com</p>
            </li>
          </ul>
        </div>
        <div class="col-lg-4 col-md-6">
          <h5 class="text-white mb-3">Devoloper Tools</h5>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AdminFooter",
  components: {},
};
</script>

<style scoped>
/* ==========================================
    FOR DEMO PURPOSE
  ========================================== */
body {
  background: #292d31;
}
ul.social__media {
  margin: 0;
  padding: 0;
  display: inline-block;
  margin-top: 15px;
}
ul.social__media li {
  list-style-type: none;
  display: inline-block;
  margin-right: 15px;
}
ul.social__media li a {
  color: rgb(0, 0, 0);
  font-size: 1.5em;
}
ul.social__media li {
  text-align: center;
  background-color: rgb(255, 255, 255);
}
ul.bus__list {
  padding: 0;
  margin: 0;
}

ul.bus__list li {
  list-style-type: none;
  margin-bottom: 5px;
}

.text-small {
  font-size: 0.9rem;
}

a {
  color: inherit;
  text-decoration: none;
  transition: all 0.3s;
}

a:hover,
a:focus {
  text-decoration: none;
}

.form-control {
  background: #212529;
  border-color: #545454;
}

.form-control:focus {
  background: #212529;
}

footer {
  background: #212529;
}

/* ==========================================
    CUSTOM UTILS CLASSES
  ========================================== */
</style>
