<template>
    <v-carousel>
      <v-carousel-item v-for="n in  3" :key="n">
        <v-sheet
          height="100%"
          tile
          class="fill-height"
          fluid
          color="primary"
        >
          <v-row class="padding-left middle"
          >
            <v-col cols="12" xl="4" lg="4" sm="12" md="4" xs="12" v-for="n in  3" :key="n">
              <v-card
                type="light"
                align="center"
                justify="center"
                max-width="344"
                class="padding-y margin-right"
                color="white"
              >
                <v-img
                  :src="require('@/assets/default.jpg')"
                  height="55"
                  width="55"
                  class="circle line-spacing"
                ></v-img>

                <h4 class="line-spacing text-black">
                  nama Orang
                </h4>
                <h5 class="text-black"> Pekerjaan </h5>
                <p class="line-spacing text-black">
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia,
                  modi officiis? Ad nihil eos iste dignissimos corporis perspiciatis possimus"
                </p>
                <div class="text-center">
                  <v-rating v-model="rating" readonly></v-rating>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
</template>

<script>
export default {
  props: {
    rating: Number,
  },
};
</script>

<style lang="scss" scoped>
.padding-left{
    padding-left: 1.5rem;
}

.padding-right{
    padding-right: 5rem;
}

.margin-right{
  margin-right: 3.2rem;
}

.circle{
  border-radius: 100% !important;
}

.line-spacing{
  margin-top: 1rem;
}

.padding-y{
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.text-black{
  color: black !important;
}

.middle{
  position: absolute;
  top: 50%;
  transform: translate(5%, -50%);
}
</style>
