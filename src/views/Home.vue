<template>
  <div class="home">
    
    <c-form />
  </div>
</template>

<script>
import CForm from '../components/CForm.vue';
export default {
  name: "Home",
  components: {
    CForm
  },
}
    CForm;
</script>

<style scoped lang="scss">
.home {
  padding: 3rem;
  .logo {
    height: 8rem;
    width: 8rem;
    border-radius: 50%;
  }
}
</style>
