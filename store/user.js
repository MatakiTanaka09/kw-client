export const state = () => ({
    user: null,
    children: null
});

export const getters = {
    user: (state) => state.user,
    children: (state) => state.children
};

export const mutations = {
    SET_USER (state, payload) {
        state.user = payload.user
    },
    SET_USER_CHILDREN(state, payload) {
        state.children = payload.children
    }
};

export const actions = {
    nuxtServerInit({rootState, commit, state, dispatch}, { req }) {
        const id = rootState.auth.user.id
        try {
            this.$axios.$get(`/users/user-parents/${id}/user`)
                .then(res => {
                    this.$axios.$get(`/users/user-parents/${res}/children`)
                        .then(res => {
                            commit('SET_USER', { user: res["parent"] })
                            commit('SET_USER_CHILDREN', { children: res["children"] })
                        })
                        .catch(err => err.response)
                })
        } catch(e) {
            console.log(e)
        }
        console.log("client init")
    },
    // async GET_USER({ commit }, { id }) {
    //     try {
    //         await this.$axios.$get(`/users/user-parents/${id}/user`)
    //             .then(res => {
    //                 commit('SET_USER', { user: res })
    //             })
    //             .catch(err => err.response)
    //     } catch(e) {
    //         console.log(e)
    //     }
    // },
    async GET_USER_CHILDREN({ commit }, { id }) {
        try {
            await this.$axios.$get(`/users/user-parents/${id}/children`)
                .then(res => {
                    commit('SET_USER', { user: res["parent"] })
                    commit('SET_USER_CHILDREN', { children: res["children"] })
                })
                .catch(err => err.response)
        } catch(e) {
            console.log(e)
        }
    }
}
