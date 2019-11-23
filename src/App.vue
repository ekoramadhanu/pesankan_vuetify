<template>
  <v-app>
    <Navbar :images="images[0]" :lists="lists" class="primary"/>
    <router-view class="top-fix" />
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'app',
  data() {
    return {
      images: [
        'logo.png',
        'jumbotron.png',
      ],
      lists: [
        { id: 1, name: 'Layanan' },
        { id: 2, name: 'Tim' },
        { id: 3, name: 'Testimoni' },
        { id: 4, name: 'Hubungi Kami' },
      ],
    };
  },
  components: {
    Navbar,
  },
};
</script>

<style lang="scss" scoped>
  .top-fix {
    margin-top: 8vh;
  }
</style>
