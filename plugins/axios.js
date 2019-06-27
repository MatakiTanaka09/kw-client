export default function ({ $axios, redirect }) {
    $axios.defaults.baseURL = "http://localhost:8888/api/v1/"
    // $axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
    $axios.setToken('access_token')
}
