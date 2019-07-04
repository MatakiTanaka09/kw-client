import { isEmpty } from "~/utils/util";

export const state = () => ({
    user: null,
    isLoggedIn: false,
    token: ''
});

export const getters = {
    user: (state) => state.user,
    isLoggedIn: (state) => state.isLoggedIn,
    token: (state) => state.token
};

export const mutations = {
    setUser (state, payload) {
        state.user = payload.user
        state.isLoggedIn = true
        state.token = payload.token
    }
};

export const actions = {
    async nuxtClientInit ({ commit, state, dispatch }, { req }) {
        if (localStorage.jwt) {
            await this.$axios.$get('/users/user-masters/me')
                .then(res => {
                    if(isEmpty(res)) {
                        commit('setUser', { user: null, token: '', isLoggedIn: false })
                    }
                    commit('setUser', { user: res["data"], token: localStorage.jwt})
                }).catch(e => {
                    localStorage.removeItem('jwt');
                    console.log(e);
                });
        }
    },
    async login ({ commit }, { email, password }) {
        try {
            return new Promise((resolve, reject) => {
                this.$axios.$post('/users/user-masters/login', { email, password })
                    .then(res => {
                        if(res.status === 200) {
                            commit('setUser', { user: '', token: res["access_token"]})
                            this.$router.push("/user/events")
                            resolve({ result: "ok" })
                        } else {
                            this.$router.go(0)
                            this.$toast.show('ログインに失敗しました')
                            reject({result: "ng", error: "ログインに失敗しました" })
                        }

                    })
                    .catch(err => {
                        reject(err)
                        if(err.response.status === 401) {
                            reject({result: "ng", error: err.response })
                        }
                    })
            });
        } catch(e) {
            console.log(e)
        }
    },
    async register({ commit }, {email, password, password_confirmation}) {
        try {
            return new Promise((resolve, reject) => {
                this.$axios.$post('/users/user-masters/register', { email, password, password_confirmation})
                    .then(res => {
                        this.$router.push("/user/auth/register/confirm")
                        resolve(res)
                    })
                    .catch(err => reject(err))
            });
        } catch(e) {
            console.log(e)
        }
    },
    async logout ({ commit }) {
        try {
            await this.$axios.$post('/users/user-masters/logout', {})
                .then(res => {
                    localStorage.removeItem('jwt')
                    commit('setUser', { user: null, token: null })
                }).catch(err => err.response)
        } catch(e) {
            console.log(e)
        }
    }
};
