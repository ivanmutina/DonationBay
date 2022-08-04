<template>
  <div class="container-fluid">
    <div class="row align-items-center mt-2">
      <div class="col-lg-6">
        <!-- -->
        <form class="row g-3 col-md-12">
          <h1>Sign up!</h1>
          <div class="col-md-6">
            <label for="name" class="form-label">First Name</label>
            <input type="text" class="form-control" id="name" />
          </div>
          <div class="col-md-6">
            <label for="lastName" class="form-label">Last Name</label>
            <input type="text" class="form-control" id="lastName" />
          </div>
          <div class="col-md-6">
            <label for="inputEmail" class="form-label">Email</label>
            <input type="email" class="form-control" id="inputEmail" />
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label">Password</label>
            <input type="password" class="form-control" id="inputPassword4" />
          </div>

          <div class="col-md-6">
            <label for="inputCountry" class="form-label">Country</label>
            <input type="text" class="form-control" id="inputCountry" />
          </div>
          <div class="col-md-4">
            <label for="inputCountry" class="form-label">City</label>
            <input type="text" class="form-control" id="inputCity" />
          </div>
          <div class="col-md-2">
            <label for="inputZip" class="form-label">Zip</label>
            <input type="text" class="form-control" id="inputZip" />
          </div>
          <div class="col-12"></div>

          <div class="col-12">
            <button type="" class="btn btn-primary">Create account</button>
          </div>
        </form>

        <!-- -->
      </div>

      <div class="col-lg-6">
        <img class="img-fluid hover-shadow" src="@/assets/signup.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
