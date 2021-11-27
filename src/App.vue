<template>
  <div id="app">
    <main-header />

    <main class="main">
      <router-view @alert="showAlert" />
    </main>

    <alert
      v-if="alertMessage"
      :message="alertMessage"
      :mode="alertMode"
      @close="closeAlert"
    />
  </div>
</template>

<script>
import Alert from "./components/Alert.vue";
import MainHeader from "./components/MainHeader.vue";
export default {
  name: "App",
  components: {
    MainHeader,
    Alert,
  },
  data() {
    return {
      alertMessage: "wdww",
      alertMode: "",
    };
  },
  methods: {
    showAlert({ message, mode }) {
      this.alertMessage = message;
      this.alertMode = mode;
    },
    closeAlert() {
      this.alertMessage = "";
      this.alertMode = "";
    },
  },
};
</script>

<style lang="scss">
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

@font-face {
  font-family: "Nunito";
  src: url("/Nunito/Nunito-Regular.ttf") format("truetype");
}

@font-face {
  font-family: "Nunito";
  src: url("/Nunito/Nunito-SemiBold.ttf") format("truetype");
  font-weight: 600;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  // font-family: "Open Sans", Arial, sans-serif;
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
