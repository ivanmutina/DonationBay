<template>
  <div class="container-fluid">
    <div class="row align-items-center mt-2" data-aos="fade-up">
      <div class="col-lg-6">
        <h1 class="text-start">Got something you no longer need?</h1>
        <p class="text-start mt-2">Welcome to Donation Bay, a place to donate your stuff to a good cause or donate and get yourself something!</p>
        <div class="d-flex flex-column flex-sm-row">
          <a class="btn btn-lg btn-primary fw-500 me-sm-3 mb-sm-0 mt-2" href="/login">
            Login
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
            </svg>
          </a>
          <a class="btn btn-lg btn-light text-primary fw-500 mt-2" href="/signup">Create account</a>
        </div>
      </div>
      <div class="col-lg-6">
        <img class="img-fluid w-100 h-75 hover-shadow" src="@/assets/donate_phone.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

export default {};

// AOS animacija
AOS.init({
  duration: 1500,
});
</script>

<style scoped></style>
