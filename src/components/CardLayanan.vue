<template>
    <v-card
    align="center"
    justify="center"
    max-width="344"
    class="padding"
    >
    <v-card outlined type="dark" class="circle midlle">
      <v-img
        :src="require('@/assets/'+images)"
        height="55"
        width="55"
        class=""
      ></v-img>
    </v-card>
    <div class="width-text">
      <h4 class="line-spacing">
        {{title}}
      </h4>

      <p class="line-spacing">
        {{subtitle}}
      </p>
    </div>
    </v-card>
</template>

<script>
export default {
  props: {
    images: String,
    title: String,
    subtitle: String,
  },
};
</script>

<style lang="scss" scoped>
.padding{
  padding: 2rem;
}

.line-spacing{
  margin-top: 1rem;
}

.circle{
  width: 80px;
  height: 80px;
  border-radius: 100% !important;
}

.midlle{
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  padding: 5px
}

.width-text {
  height: 8rem;
}

</style>
