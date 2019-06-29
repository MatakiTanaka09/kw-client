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
    // async nuxtServerInit({ commit }, { req }) {
    //     // this.$axios.$get('/users/event-details/')
    //     commit('SET_EVENT', { event: "event!"})
    //     const [_event, _res] = await Promise.all([
    //
    //     ])
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
