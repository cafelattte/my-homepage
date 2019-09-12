import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'vuetify/dist/vuetify.min.css'

import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      custom: {
        primary: colors.cyan.accent3,
        secondary: colors.cyan.darken3,
        accent: colors.deepOrange,
        info: colors.blueGrey
      }
    }
  },
  icons: {
    iconfont: 'mdi',
  },
});
