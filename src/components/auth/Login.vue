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
          <form>
            <img class="logo" src="../../assets/images/sela-logo.jpg" alt="" />
            <div class="right-container-top"></div>
            <div class="form-group">
              <input
                type="email"
                v-model="email"
                class="input form-control form-control-user"
                id="exampleInputEmail"
                aria-describedby="emailHelp"
                placeholder="Enter Email..."
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                v-model="password"
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
            <!-- <router-link to="/homediv">
                   <button
                type="submit"
                value="save"
                class="btn button mt-4"
              >
                Login
              </button>
              </router-link> -->
            <div>
              <button
                type="button"
                value="save"
                class="btn button mt-4"
                @click=login
              >
                Login
              </button>
              <p>{{ data }}</p>
            </div>
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

<script lang="ts">
import { defineComponent } from "vue";
import { loginApi } from "@/api";

export default defineComponent({
  data() {
    return {
      userEmail: "tesla@gmail.com",
      password: "sela",
    };
  },
  methods: {
    async login() {
      try {
        const response = await loginApi(this.userEmail, this.password);
        // Tanggapi respons sukses dari API
        // simpan token di LocalStorage dan arahkan ke dashboard admin divisi
        // localStorage.setItem("token", response.token);
        this.$router.push("/homediv");
      } catch (error) {
        // Tanggapi kesalahan dari API
        console.error(error);
      }
    },
  },
});
</script>
