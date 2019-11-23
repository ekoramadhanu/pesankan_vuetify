<template>
    <v-form v-model="valid">
      <v-row>
        <v-col
          cols="12"
          xl="6" lg="6" sm="12" md="6" xs="12"
        >
            <v-text-field
              v-model="name"
              :rules="nameRules"
              :counter="50"
              label="Nama Lengkap"
              outlined
              clearable
              required
            ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          xl="6" lg="6" sm="12" md="6" xs="12"
        >
            <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
            outlined
            clearable
          ></v-text-field>
        </v-col>
      </v-row>
      <v-text-field
        v-model="title"
        :counter="50"
        :rules="nameRules"
        label="Judul Pesan"
        outlined
        clearable
        required
       ></v-text-field>
       <v-textarea
          v-model="message"
          :rules="messageRules"
          :counter="500"
          outlined
          clearable
          name="input-7-4"
          label="Isi Pesan "
          required
        ></v-textarea>
        <v-btn class="mr-4">Kirim Pesan</v-btn>
    </v-form>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    name: '',
    title: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 50 || 'Name must be less than 50 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
    message: '',
    messageRules: [
      v => !!v || 'Message is required',
      v => v.length <= 500 || 'Message must be less than 500 characters',
    ],
  }),
};
</script>

<style lang="scss">

</style>
