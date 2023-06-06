<template>
  <div class="register">
    <div class="container">
      <div class="login-box">
        <div class="left-container">
          <img
            src="../../assets/images/register-image.jpg"
            alt="background-1.png"
          />
        </div>
        <div class="right-container">
          <form class="user" action="">
            <img class="logo" src="../../assets/images/sela-logo.jpg" alt="" />
            <div class="right-container-top"></div>
            <div class="form-group row name-input">
              <div class="col-sm-6">
                <input
                  type="text"
                  class="form-control form-control-user input-name"
                  id="exampleFirstName"
                  placeholder="First Name"
                />
              </div>
              <div class="col-sm-6">
                <input
                  type="text"
                  class="form-control form-control-user input-name"
                  id="exampleLastName"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control form-control-user input-name"
                id="nik"
                placeholder="NIK"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control form-control-user input-name"
                id="divisi"
                placeholder="Divisi"
              />
            </div>
            <div class="form-group">
              <input
                type="email"
                class="input form-control form-control-user"
                id="exampleInputEmail"
                aria-describedby="emailHelp"
                placeholder="Enter Email"
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                class="input form-control form-control-user"
                id="exampleInputPassword"
                placeholder="Password"
              />
            </div>

            <hr />
            <button type="button" class="btn button btn-blue">
              Register Account
            </button>

            <div class="text-center">
              <router-link to="/forgot-password">
                Forgot Password?
              </router-link>
            </div>
            <div class="text-center">
              <router-link to="/">
                Already have an account? Login!
              </router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
// Vue.use(axios);

export default {
  name: "Register",
  data() {
    return {
      result: {},
      employee: {
        employeename: "",
        email: "",
        password: "",
      },
    };
  },
  created() {},
  mounted() {
    console.log("mounted() called.......");
  },
  methods: {
    saveData() {
      axios
        .post("http://localhost:8085/api/v1/employee/save", this.employee)
        .then(({ data }) => {
          console.log(data);
          try {
            alert("Employee Registation Successfully");
          } catch (err) {
            alert("failed");
          }
        });
    },
  },
};
</script>
