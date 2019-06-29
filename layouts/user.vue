<template>
    <div class="app__container">
        <TopHeader/>
        <nuxt/>
        <TopFooter/>
    </div>
</template>

<script>
    import TopHeader from "~/components/organisms/header/user/Header"
    import TopFooter from "~/components/organisms/footer/user/SimpleFooter"
    export default {
        components: {
            TopHeader,
            TopFooter
        }
    }
</script>

<style lang="scss">
    body {
        font-size: 14px;
    }
    .app__container {
        width: 100%;
        position: relative;
        height: 100%;
    }
</style>
