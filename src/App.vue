<template>
  <v-app>
    <div class="bg">
      <v-main class="container">
        <Navbar />

        <Landing />

        <section id="section2">
          <div></div>
        </section>
      </v-main>
    </div>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import logo from './assets/images/logo.png';
import Navbar from './components/Navbar.vue';
import Landing from './components/home/Landing.vue';

export default defineComponent({
  components: { Navbar, Landing },
  setup() {
    return { logo };
  }
})
</script>

<style lang="scss">
html,
body {
  height: 100%;
  overflow-x: hidden;
}

body {
  margin: 0;
  font-family: "Montserrat", sans-serif;
}

.container {
  padding: 1% 2% !important;
}

.bg {
  background-image: url("./assets/images/background.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  width: 100vw;
  position: relative;
  padding-left: 5%;
}

.v-progress-circular__underlay {
  stroke: none;
}
</style>