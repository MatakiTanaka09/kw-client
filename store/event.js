export const state = () => ({
    event: null,
});

export const getters = {
    event: (state) => state.event
};

export const mutations = {
    SET_EVENT (state, payload) {
        state.event = payload.event
    }
};

export const actions = {
    // async nuxtClientInit ({ commit, state, dispatch }, { req }) {
    //     if (localStorage.jwt) {
    //         await this.$axios.$get('/users/user-masters/me')
    //             .then(res => {
    //                 if(isEmpty(res)) {
    //                     commit('setUser', { user: null, token: '', isLoggedIn: false })
    //                 }
    //                 commit('setUser', { user: res["data"], token: localStorage.jwt})
    //             }).catch(e => {
    //                 localStorage.removeItem('jwt');
    //                 console.log(e);
    //             });
    //     }
    // },
    async GET_EVENT({ commit }, { id }) {
        try {
            await this.$axios.$get(`/users/event-details/${id}`)
                .then(res => {
                    commit('SET_EVENT', { event: res["data"][0] })
                })
                .catch(err => err.response)
        } catch(e) {
            console.log(e)
        }
    }
}
