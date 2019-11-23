<template>
  <div>
    <v-app-bar
      fixed
      class="padding-left padding-right"
    >
      <v-toolbar-title>
        <v-img :src="require('@/assets/'+images)" height="35" width="148" class></v-img>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn
          v-for="list in lists"
          :key="list.id"
          text
          class="text-capitalize">
            {{list.name}}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
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
.padding-left {
  padding-left: 5rem;
}

.padding-right {
  padding-right: 5rem;
}

.grey-secondary {
  background-color: #f8f8f8 !important;
}
</style>
