<template>
  <div id="app">
    <v-app>

      <TheAppBar/>

      <v-content>
        <v-container fluid>
          <v-fade-transition mode="out-in">
            <router-view></router-view>
          </v-fade-transition>
        </v-container>
      </v-content>      

    </v-app>
  </div>
</template>

<script>
import TheAppBar from './components/TheAppBar';
import './App.scss'

export default {
  name: 'App',
  components: {
    TheAppBar
  },
  data: () => ({
    //
  }),
};
</script>
