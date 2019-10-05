<template>
  <v-app-bar
    app
    :color="themeColor"
    flat
    prominent
    src="https://picsum.photos/1920/1080?random"
    fade-img-on-scroll
    shrink-on-scroll
    scroll-threshold="540"
  >
    <v-app-bar-nav-icon
      @click.stop="openNavigationDrawer">
    </v-app-bar-nav-icon>

    <template v-slot:img="{ props }">
      <v-img
        v-bind="props"
        gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"
      ></v-img>
    </template>

  </v-app-bar>
</template>

<script>
  import {mapActions} from 'vuex'
  export default {
    data () {
      return {
        themeColor: 'teal accent-3'
      }
    },

    methods: {
      ...mapActions('layoutParams', {
        openNavigationDrawer: 'openNavigationDrawer'
      })
    }
  }
</script>

<style>

</style>