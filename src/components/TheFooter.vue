<template>
  <v-footer
    padless
  >
    <v-card
      flat
      tile
      width="100%"
      class="indigo lighten-1 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        {{ description }}
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ dateFullYear }} - <strong>Vuetify</strong>
      </v-card-text>

    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data () {
      return {
        icons: [
          'fab fa-facebook',
          'fab fa-twitter',
          'fab fa-google-plus',
          'fab fa-linkedin',
          'fab fa-instagram',
          'fab fa-github'
        ],
        description: 'made by cafelatte, SangHyun Kim'
      }
    },
    computed: {
      dateFullYear () {
        return new Date().getFullYear()
      }
    }
  }
</script>

<style>

</style>