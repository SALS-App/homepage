<template>

  <Head>

    <Title>SALS Website - Landing</Title>

    <Link rel="preconnect" href="https://fonts.googleapis.com" />
    <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
    <Link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap" rel="stylesheet" />

    <Meta name="description" content="SALS is a fast and simple Mod Syncing Tool and Launcher for the Game ArmA 3." />
    <Meta name="keywords" content="sals, arma, arma 3, launcher" />
    <Meta name="robots" content="index, follow" />
    <Meta name="language" content="English" />
    <Meta name="author" content="TAINCER" />

    <Meta name="twitter:card" content="summary_large_image" />
    <Meta name="twitter:site" content="@sals_app" />
    <Meta name="twitter:title" content="SALS Website" />
    <Meta name="twitter:description" content="SALS - Syncer and Launcher for ArmA 3" />
    <Meta name="twitter:image" content="https://sals-app.com/simple_logo_big.png" />
  </Head>

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
import Navbar from './components/Navbar.vue';
import Landing from './components/home/Landing.vue';

export default defineComponent({
  components: { Navbar, Landing },
})
</script>

<style lang="scss">
html,
body {
  height: 100%;
  overflow-x: hidden;
  background-color: #131b27;
}

body {
  margin: 0;
  font-family: "Montserrat", sans-serif;
}

p,
span,
h1,
h2,
h3,
h4,
a,
button,
h5 {
  color: #fff !important;
}

.container {
  padding: 1% 2% !important;
}

.bg {
  background-image: url("./assets/images/background.webp");
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
