<template>
  <div id="app">
    <main-header />

    <main class="main">
      <router-view />
    </main>
  </div>
</template>

<script>
import MainHeader from "./components/MainHeader.vue";
export default {
  name: "App",
  components: {
    MainHeader,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&family=Rubik:ital,wght@0,300;0,400;0,600;1,700&display=swap");
@font-face {
  font-family: "Open Sans";
  src: url("/OpenSans/OpenSans-Regular.ttf") format("truetype");
}

@font-face {
  font-family: "Open Sans";
  src: url("/OpenSans/OpenSans-SemiBold.ttf") format("truetype");
  font-weight: 600;
}

@font-face {
  font-family: "Open Sans";
  src: url("/OpenSans/OpenSans-Bold.ttf") format("ttf");
  font-weight: bold;
}


* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
    font-family: "Open Sans", Arial, sans-serif;
}

#app {
  font-family: "Open Sans", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // background-image: url('./assets/logo.jpg');
  // background-position: center center;
  // background-repeat: no-repeat;
  // background-size: 100%;
  min-height: 100vh;
  min-width: 100vw;
  background-color: $main-background;
  position: relative;

  .main {
  }
}
</style>
