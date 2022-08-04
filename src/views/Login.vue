<template>
  <div class="container-fluid">
    <div class="row align-items-center mt-2">
      <!-- -->
      <div class="col-lg-6">
        <img class="img-fluid hover-shadow" src="@/assets/login.svg" alt="" />
      </div>

      <div class="col-lg-6">
        <form class="row g-3 col-md-12">
          <!-- -->
          <h1 class="m-auto">Welcome back</h1>
          <div class="col-3"></div>
          <div class="col">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

            <label for="exampleInputPassword1" class="form-label mt-3">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" />
          </div>
          <div class="col-3"></div>

          <div class="col-12 mt-4">
            <button type="" class="btn btn-primary">Login</button>
          </div>
        </form>
        <!-- -->
      </div>
    </div>
  </div>
</template>

<style scoped></style>
