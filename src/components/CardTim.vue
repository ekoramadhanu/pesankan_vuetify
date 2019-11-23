<template>
 <v-card  >
    <div class="d-flex flex-row " >
        <v-avatar
            class="ma-3"
            size="175"
            tile
        >
            <v-img :src="require('@/assets/'+images)"></v-img>
        </v-avatar>
        <div>
         <h4 class="margin-top"> {{name}}</h4>
         <p>{{job}}</p>
         <div>
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
         </div>
        </div>
    </div>
 </v-card>
</template>

<script>
export default {
  props: {
    images: String,
    name: String,
    job: String,
  },
};
</script>

<style lang="scss" scoped>
.margin-top{
    margin-top: 1rem;
}
.margin-right{
    margin-right: 0.7rem;
}
</style>
