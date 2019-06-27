<template>
    <BaseCardLists
        :heading="heading"
        :url="url"
    />
</template>

<script>
    import BaseCardLists from "../base-card-lists/BaseCardLists"
    export default {
        name: "RecommendCardLists",
        components: {
            BaseCardLists
        },
        data() {
            return {
                heading: 'あなたにおすすめのイベント',
                url: '/user/events/search/date'
            }
        }
    }
</script>

<style scoped>

</style>
