<template>
  <div class="container-fluid">
    <div class="row align-items-center mt-2">
      <!-- -->
      <div class="col-lg-6">
        <img class="img-fluid hover-shadow" src="@/assets/settings.png" alt="" />
      </div>

      <div class="col-lg-6">
        <!-- -->
        <form class="row g-3 col-md-12">
          <h1>Hello <span style="color: blue">Ivan</span>!</h1>
          <div class="col-12 form-text">Change your profile information</div>
          <div class="col-md-6">
            <label for="name" class="form-label">First Name</label>
            <input type="text" class="form-control" id="name" placeholder="" />
          </div>
          <div class="col-md-6">
            <label for="lastName" class="form-label">Last Name</label>
            <input type="text" class="form-control" id="lastName" placeholder="" />
          </div>

          <div class="col-md-6">
            <label for="inputCountry" class="form-label">Country</label>
            <input v-model="country" type="text" class="form-control" id="inputCountry" placeholder="" />
          </div>
          <div class="col-md-4">
            <label for="inputCountry" class="form-label">City</label>
            <input v-model="city" type="text" class="form-control" id="inputCity" placeholder="" />
          </div>
          <div class="col-md-2">
            <label for="inputZip" class="form-label">Zip</label>
            <input v-model="zipCode" type="text" class="form-control" id="inputZip" placeholder="" />
          </div>

          <div class="col-12 mt-4">
            <button type="button" class="btn btn-primary shadow">Confirm changes</button>
          </div>
        </form>
        <!-- -->
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <h1 class="mt-2 don">Your donation list</h1>
        <table class="table table-striped table-bordered mt-4">
          <tbody class="table-group-divider">
            <tr>
              <th scope="row">Order number</th>
              <th>Title</th>
              <th>Price</th>
              <th>Cause</th>
              <th>Pickup location</th>
            </tr>
            <tr>
              <td>1</td>
              <td>f</td>
              <td>d</td>
              <td>d</td>
              <td>s</td>
            </tr>

              <listComp />
              
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store.js";
import List from '@/components/listComp.vue';

export default {};
</script>

<st
Listyle scoped></style>
