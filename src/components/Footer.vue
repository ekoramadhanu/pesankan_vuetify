<template>
  <v-footer
    color="white"
    padless
  >
    <v-row
      justify="center"
      class="padding-top"
      no-gutters
    >
      <v-col cols="12" xl="3" lg="3" sm="12" md="3" xs="12">
          <v-img
            :src="require('@/assets/logo-pesankan.png')"
            height="35"
            width="148"
            class=""
           ></v-img>
          <h4>Sebuah Aplikasi yang memudahkan aktivitas Ibu rumah tangga </h4>
          <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                     <v-img :src="require('@/assets/facebook-logo.svg')" width="22" height="22"
                    class="float-left margin-right" v-on="on"></v-img>
                </template>
                <span>Tooltip</span>
            </v-tooltip>
            <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                     <v-img :src="require('@/assets/instagram (1).svg')" width="22" height="22"
                     class="float-left margin-right"  v-on="on" ></v-img>
                </template>
                <span>Tooltip</span>
            </v-tooltip>
            <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                     <v-img :src="require('@/assets/linkedin (1).svg')" width="22" height="22"
                     class="float-left" v-on="on"></v-img>
                </template>
                <span>Tooltip</span>
            </v-tooltip>
      </v-col>
      <v-col cols="12" xl="3" lg="3" sm="12" md="3" xs="12">
         <v-list>
          <v-list-item-group>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title >Bantuan</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Kebijakan Privasi </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title >Syarat & Ketentuan</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
      <v-col cols="12" xl="3" lg="3" sm="12" md="3" xs="12">
         <v-list flat disabled>
            <v-list-item-group color="primary">
                <v-list-item>
                  <v-list-item-content>
                      <v-list-item-title >Kontak</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                      <v-list-item-title >Mt. Haryono</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                      <v-list-item-title >08123456789</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
      </v-col>
      <v-col cols="12" xl="3" lg="3" sm="12" md="3" xs="12">
         <v-list flat disabled>
            <v-list-item-group  color="primary">
                <v-list-item >
                  <v-list-item-content>
                      <v-list-item-title >Unduh Sekarang </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
      </v-col>
      <v-col cols="12" justify="center" align="center">
        <hr>
        <p class="margin-top">
        {{ new Date().getFullYear() }} — <strong>Pesankan</strong>
        </p>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.margin-right{
    margin-right: 0.7rem;
}

.margin-top{
  margin-top: 0.5rem;
}

.padding-top{
  padding-top: 2rem;
}
</style>
