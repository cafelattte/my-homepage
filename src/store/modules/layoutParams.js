export default {
    namespaced: true,

    state: {
        navigationDrawerWidth: ''
    },

    mutations: {
        setNavigationDrawerWidth(state, width) {
            state.navigationDrawerWidth = width
        }
    },

    actions: {
        openNavigationDrawer({commit}) {
          commit('setNavigationDrawerWidth', '256')
        },

        closeNavigationDrawer({commit}) {
          commit('setNavigationDrawerWidth', '0')
        }
    }
}