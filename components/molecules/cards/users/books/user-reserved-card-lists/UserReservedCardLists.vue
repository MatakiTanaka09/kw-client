<template>
    <BaseCardLists
        :heading="heading"
        :response="response"
    />
</template>

<script>
    import BaseCardLists from "../base-card-lists/BaseCardLists"
    export default {
        name: "UserReservedCardLists",
        components: {
            BaseCardLists
        },
        data() {
            return {
                response: [],
                heading: '予約中のイベント'
            }
        },
        methods: {
            gainFirstData() {
                const id = "68608530-9813-11e9-8c77-457e6b5eed6d";
                return this.$axios.$get(`users/user-parents/${id}/books`)
                    .then(res => {
                        console.log(res)
                        // this.response = res["data"]
                    }).catch(e => {
                        console.log(e)
                    })
            }
        },
        mounted() {
            this.gainFirstData();
        }
    }
</script>

<style scoped>

</style>
