<template>
  <Login />
</template>

<script>
import {reactive} from 'vue';
import {useRouter} from "vue-router";

import Login from "@/components/auth/Login.vue";
export default {
  name: "LoginView",
  setup() {
    const data = reactive({
      email: '',
      password: ''
    });
    const router = useRouter();

    const submit = async () => {
      await fetch('localhost:8080/api/v1/login/save', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
        body: JSON.stringify(data)
      });

      await router.push('/home');
    }

    return {
      data,
      submit
    }
  }
}
</script>
