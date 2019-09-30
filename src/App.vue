<template>
  <div id="app">
    <v-app>

      <TheAppBar/>

      <TheNavigationDrawer/>

      <v-content>
        <v-container fluid>
          <v-fade-transition mode="out-in">
            <router-view></router-view>
          </v-fade-transition>
        </v-container>
      </v-content>

      <TheFooter/>

    </v-app>
  </div>
</template>

<script>
import TheAppBar from './components/TheAppBar';
import TheNavigationDrawer from './components/TheNavigationDrawer'
import TheFooter from './components/TheFooter';
import './App.scss'

export default {
  name: 'App',
  components: {
    TheAppBar,
    TheNavigationDrawer,
    TheFooter
  },
  data: () => ({
    //
  }),
};
</script>
