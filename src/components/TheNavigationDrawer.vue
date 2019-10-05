<template>
  <v-navigation-drawer
    fixed
    permanent
    :width="widthSize"
  >

  </v-navigation-drawer>

</template>

<script>
  import {mapState, mapActions} from 'vuex'
  export default {
    computed: {
      ...mapState('layoutParams', {
        widthSize: state => state.navigationDrawerWidth
      })
    },

    methods: {
      ...mapActions('layoutParams', {
        closeNavigationDrawer: 'closeNavigationDrawer'
      })
    },

    created () {
      this.closeNavigationDrawer()
    }
  }
</script>

<style>

</style>