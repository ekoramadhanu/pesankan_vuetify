<template>
    <div>
      <v-toolbar elevation="0" fixed class="padding-left padding-right grey-primary">
        <v-toolbar-title>
            <v-img
                :src="require('@/assets/'+images)"
                height="35"
                width="148"
                class=""
            ></v-img>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-toolbar-items>
            <v-btn v-for="list in lists" :key="list.id" text
            class="text-capitalize">{{list.name}}</v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </div>
</template>

<script>
export default {
  props: {
    images: String,
    lists: Array,
  },
  methods: {
    scroll() {

    },
  },
};
</script>

<style lang="scss" scoped>
.padding-left{
    padding-left: 5rem;
}

.padding-right{
    padding-right: 5rem;
}

.grey-secondary{
  background-color: #F8F8F8 !important;
}


</style>
