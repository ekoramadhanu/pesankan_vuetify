<template>
    <div  class="grey lighten-5"
      >
        <v-row class="grey lighten-5">
            <v-col cols="12" lg="6"  xl="6" sm="6" md="6" xs="6" class="padding-left padding-top">
              <h1 class="font-weight-normal">Pesankan</h1>
              <h3 class="font-weight-normal">Sebuah Aplikasi yang memudahkan Ibu rumah tangga
                  untuk berbelanja produk segar dan memasak berdasarkan konsumsi gizi keluarga.</h3>
                <v-row>
                  <v-col cols="12" xl="6" lg="6" sm="6" md="6" xs="6" >
                    <div class="my-2">
                      <v-btn rounded  color="primary btn-width" >Unduh Sekarang</v-btn>
                    </div>
                  </v-col>
                  <v-col >
                    <div class="my-2">
                      <v-btn rounded  color="primary btn-width" outlined>
                      Pelajari Lebih Lanjut</v-btn>
                    </div>
                  </v-col>
                </v-row>
            </v-col>
            <v-col cols="12" xl="6" lg="6" sm="6" md="6" xs="6" >
              <v-img
                :src="require('@/assets/'+images)"
                height="539"
                width="729"
                class=""
               ></v-img>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
  props: {
    images: String,
    lists: Array,
  },
};
</script>

<style lang="scss" scoped>
.padding-left{
    padding-left: 5rem;
}

.padding-top{
    padding-top: 10rem;
}

.font-weight-normal{
    font-weight: normal !important;
}

.btn-width{
    width: 100%;
}
</style>
