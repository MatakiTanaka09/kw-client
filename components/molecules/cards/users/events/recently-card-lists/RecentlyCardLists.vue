<template>
    <BaseCardLists
        :heading="heading"
        :url="createUrl()"
        :response="response"
    />
</template>

<script>
    import BaseCardLists from "../base-card-lists/BaseCardLists"
    export default {
        name: "RecentlyCardLists",
        components: {
            BaseCardLists
        },
        data() {
            return {
                response: [],
                heading: '今日・明日に開催予定のイベント',
                url: '/user/events/search/date'
            }
        },
        methods: {
            createUrl: function() {
                const q = "?q=";
                const sort = "updated_at";
                const order = "desc";
                return `${this.url}${q}${this.formatDate()}&sort=${sort}&order=${order}`
            },
            formatDate: function() {
                let now_date = new Date();
                let year = now_date.getFullYear();
                let mon  = ('0' + (now_date.getMonth() + 1)).slice(-2);
                let date = ('0' + now_date.getDate()).slice(-2);
                return [year, mon, date].join('-')
            },
            gainFirstData() {
                const q = "?q=";
                const sort = "updated_at";
                const order = "desc";
                const limit = 4;
                const create_url = `users/search/date${q}${this.formatDate()}&sort=${sort}&order=${order}&limit=${limit}`;

                return this.$axios.$get(create_url)
                    .then(res => {
                        this.response = res["data"]
                    }).catch(e => {
                        console.log(e)
                    })
            }
        },
        mounted() {
            this.createUrl();
            this.gainFirstData();
        }
    }
</script>

<style scoped>

</style>
