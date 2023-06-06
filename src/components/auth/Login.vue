<template>
  <div class="login">
    <div class="container">
      <div class="login-box">
        <div class="left-container">
          <img
            src="../../assets/images/login-image.jpg"
            alt="background-1.png"
          />
        </div>
        <div class="right-container">
          <form @submit.prevent="submit">
            <img class="logo" src="../../assets/images/sela-logo.jpg" alt="" />
            <div class="right-container-top"></div>
            <div class="form-group">
              <input
                type="email"
                class="input form-control form-control-user"
                id="exampleInputEmail"
                aria-describedby="emailHelp"
                placeholder="Enter Email..."
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
            <div class="form-group p-2">
              <div class="custom-control custom-checkbox small">
                <input
                  class="form-check-input checkbox me-2"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label checkbox" for="flexCheckDefault">
                  Remember Me
                </label>
              </div>
            </div>
            <hr />
            <button type="button" class="btn button mt-4">Login</button>
            <hr />

            <div class="text-center">
              <router-link to="/forgot-password">
                Forgot Password?
              </router-link>
            </div>
            <div class="text-center">
              <router-link to="/register"> Create an Account! </router-link>
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
  name: "Login",
  data() {
    return {
      result: {},
      employee: {
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
    LoginData() {
      axios
        .post("http://localhost:8085/api/v1/employee/login", this.employee)
        .then(({ data }) => {
          console.log(data);
          try {
            if (data.message === "Email not exits") {
              alert("Email not exits");
            } else if (data.message == "Login Success") {
              this.$router.push({ name: "Home" });
            } else {
              alert("Incorrect Email and Password not match");
            }
          } catch (err) {
            alert("Error, please try again");
          }
        });
    },
  },
};
</script>
