<template>
  <v-app>
    <Navigation :images="images[0]" :lists="lists" class="primary"></Navigation>
    <Jumbotron :images="images[1]"></Jumbotron>
    <h2 class="font-weight-normal" align="center"
          justify="center">{{title[0]}}</h2>
    <v-row class="padding-left padding-right-layanan">
      <v-col cols="12" xl="4" lg="4" sm="6" md="4" xs="6" v-for="items in layanan" :key="items.id">
        <CardLayanan :images="items.images" :title="items.title"
        :subtitle="items.subtitle"></CardLayanan>
      </v-col>
    </v-row >
    <div class="grey-secondary padding-left padding-right">
      <h2 class="font-weight-normal" align="center"
            justify="center">{{title[1]}}</h2>
      <v-row class="">
        <v-col cols="12" xl="6" lg="6" sm="12" md="6" xs="12" v-for="items in tim" :key="items.id">
          <CardTim :images="items.images" :name="items.name"
        :job="items.job"></CardTim>
        </v-col>
      </v-row>
    </div>
    <h2 class="font-weight-normal" align="center"
            justify="center">{{title[2]}}</h2>
    <Carousel></Carousel>
    <h2 class="font-weight-normal" align="center"
            justify="center">{{title[3]}}</h2>
    <v-row>
      <v-col cols="12" xl="6" lg="6" sm="12" md="6" xs="12">
        <FormPesankan class="padding-left"></FormPesankan>
      </v-col>
    </v-row>
    <Footer  class="padding-left padding-right"></Footer>
  </v-app>
</template>

<script>
import Navigation from '@/components/Navbar.vue';
import Jumbotron from '@/components/Jumbotron.vue';
import CardLayanan from '@/components/CardLayanan.vue';
import CardTim from '@/components/CardTim.vue';
import Carousel from '@/components/Carousel.vue';
import FormPesankan from '@/components/Form.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'home',
  data() {
    return {
      images: [
        'logo-pesankan.png',
        'jumbotron.png',
      ],
      lists: [
        { id: 1, name: 'Layanan' },
        { id: 2, name: 'Tim' },
        { id: 3, name: 'Testimoni' },
        { id: 4, name: 'Hubungi Kami' },
      ],
      title: [
        'Layanan',
        'Tim',
        'Testimoni',
        'Hubungi Kami',
      ],
      layanan: [
        {
          id: 1, images: '24-hours-delivery.svg', title: 'AKTIF SELAMA 24/7', subtitle: 'Seluruh layanan kami  akan membantu selama 24 jam non stop sehingga belanja bisa kapapun tanpa perlu khawatir jika barang kehabisan',
        },
        {
          id: 2, images: 'shipped.svg', title: 'OPSI PENGIRIMAN ', subtitle: 'Pengguna bisa menentukan tempat pengiriman belanja produk segar seperti telur, sayur, dan yang lain -lainnya. ',
        },
        {
          id: 3, images: 'preorder.svg', title: 'PEMBELIAN BERSIFAT PREORDER ', subtitle: 'pengguna akan membeli terlebih dahulu , lalu barang akan dikirim besok pagi oleh tukang sayur kami sehingga bisa beli dimana saja ',
        },
        {
          id: 4, images: 'tracking.svg', title: 'MELACAK BARANG BELANJAAN ', subtitle: 'Pengguna bisa melakukan cek barang belanjaan sudah sampai dimana.',
        },
        {
          id: 5, images: 'guarantee.svg', title: 'GARANSI PEMBELIAN ', subtitle: 'Setelah produk segar telah sampai pengguna akan mendapatkan garansi selama kurang leebih 3 jam setelah barang diterima.  ',
        },
        {
          id: 6, images: 'diet.svg', title: 'PENGECEKAN GIZI  ', subtitle: 'Setiap minggu layanan kami akan memberikan pengecekan kepada pengguna untuk memberitahukan gizi  ',
        },
      ],
      tim: [
        {
          id: 1, images: 'default.jpg', name: 'Eko Ramadhanu Aryputra', job: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur. ',
        },
        {
          id: 2, images: 'default.jpg', name: 'Mohammad Khaufillah', job: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur. ',
        },
      ],
    };
  },
  components: {
    Navigation,
    Jumbotron,
    CardLayanan,
    CardTim,
    Carousel,
    FormPesankan,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
.font-weight-normal{
    font-weight: normal !important;
}

.padding-left{
    padding-left: 5rem;
}

.padding-right{
    padding-right: 5rem;
}

.grey-secondary{
  background-color: #F8F8F8 !important;
}

.padding-right-layanan{
  padding-right: 1.6rem;
}

</style>
