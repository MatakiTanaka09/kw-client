import Vue from 'vue'

export default function ({ $axios }) {
    $axios.defaults.baseURL = "http://localhost:8888/api/v1/"
    $axios.setToken('access_token')

    if (process.server) {
        return
    }

    $axios.onRequest(config => {
        console.log('Making request to ' + config.url)
        config.headers.common['Authorization'] = `Bearer ${localStorage.getItem('jwt')}`;

        console.log(config.headers)
        // return config
    });

    $axios.onResponse(response => {
        const token = response.headers['Authorization'] || response.data['access_token'];
        if(token) {
            localStorage.setItem("jwt", token);
        }
        return response;
    }, error => {
        Vue.toasted.error(error)
        // console.log(error);
        // return Promise.reject(error);
    });
}
