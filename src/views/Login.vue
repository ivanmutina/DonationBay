<template>
  <div class="container-fluid mt-2">
    <div class="row content">
      <div class="col-md-6 mb-3">
        <img class="img-fluid" src="@/assets/login.svg" alt="image" />
      </div>

      <div class="col-md-6 border">
        <div class="col border">
          <form>
            <div class="mb-3 border">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" />
            </div>
            <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1" />
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
        <div class="col border">adas</div>
      </div>
      <!-- <div class="col-md-6">
        <h3 class="login-text mb-3">Login</h3>
        <form>
          <div class="form-group">
            <label class="form-label" for="email">Email</label>
            <input class="form-control" type="email" name="email" />
          </div>
          <div class="form-group">
            <label class="form-label" for="password">Password</label>
            <input class="form-control" type="password" name="password" />
          </div>
          <div class="form-group form-check">
            <input class="form-check-input" type="checkbox" name="checkbox" id="checkbox" />
            <label class="form-check-label" for="checkbox">Remember me</label>
          </div>
        </form>
        <button class="btn btn-class">Login</button>
      </div> -->
    </div>
  </div>
</template>

<style scoped>
/*
@import url("https://fonts.googleapis.com/css2?family=Poppins&family=Roboto&display=swap");

.container {
  font-family: "Poppins", sans-serif;
}

.content {
  margin: 8%;
  padding: 4rem 1rem 4rem 1rem;
  box-shadow: 0 0 px 5px rgb(0, 0, 0, 0.05);
}

.login-text {
  font-style: normal;
  font-weight: 600 !important;
}

.form-control {
  display: block;
  width: 100%;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  border-color: #00ac96 !important;
  border-style: solid !important;
  border-width: 0 0 1px 0 !important;
  padding: 0px !important;
  color: #495057;
  height: auto;
  border-radius: 0;
  background-color: #fff;
  background-clip: padding-box;
}

.form-control:focus {
  color: #495057;
  background-color: #fff;
  border-color: #fff;
  outline: 0;
  box-shadow: none;
}

*/
</style>
